const { Router } = require("express");
const router = Router();
const bcryptjs = require("bcryptjs");
const userMiddleware = require("../middleware/user.js");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  try {
    const username = "user";
    const password = "pass";
    const hashpassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
    let data = await User.create({ username, password: hashpassword });
    data = { ...data._doc, password: undefined };
    res.status(200).json({
      user: data,
      message: "User created successfully",
    });
  } catch (errr) {
    console.log(errr);
    res.status(500).json({
      error: errr.message,
      message: "Some error occured",
    });
  }
});

router.get("/courses", async (req, res) => {
  try {
    console.log("f");
    const { username, password } = req.headers;
    console.log("s");
    const findUser = await User.find({ username });
    console.log("t");
    if (!findUser) {
      return res.status(403).json({
        message: "no such user found",
      });
    }
    console.log(findUser);
    console.log("fo");
    const matchpass = bcryptjs.compareSync(password, findUser[0].password);
    if (!matchpass) {
      return res.status(401).json({
        message: "user not found",
      });
    }
    console.log("fu");
    const allCourse = await Course.find({});
    res.status(200).json({
      message: "Fetching all the courses",
      courses: allCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "unexpected error occured",
      error: error.message,
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    let courseId = req.params.courseId;
    const findCourseId = await Course.findOne({
      _id: courseId,
    });

    if (!findCourseId) {
      res.status(403).json({
        message: "No such course found",
      });
    }

    const { username, password } = req.headers;
    const updatedUser = await User.updateOne(
      { username },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );

    res.status(200).json({
      message: `Purchased course is ${courseId}`,
      user: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      message: "Some error has occured",
      error: err.message,
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.headers.username;
  console.log(username);
  const findUser = await User.findOne({ username });
  const findthatCourseinMydb = await Course.findOne({
    _id: {
      $in: findUser.purchasedCourses,
    },
  });
  res.status(200).json({
    message: "done",
    courses: findthatCourseinMydb,
  });
});

module.exports = router;

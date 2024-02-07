const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const bcryptjs = require("bcryptjs");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  try {
    const username = "admin";
    const password = "pass";
    const hashpassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
    let data = await Admin.create({ username, password: hashpassword });
    data = { ...data._doc, password: undefined };
    res.status(200).json({
      user: data,
      message: "admin created successfully",
    });
  } catch (errr) {
    console.log(errr);
    res.status(500).json({
      error: errr.message,
      message: "Some error occured",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink } = req.body;
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.status(200).json({
    message: "Course created successfully",
    courseID: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const findAllCourse = await Course.find({});
  res.status(200).json({
    courses: findAllCourse,
    message: "All courses fetched",
  });
});

module.exports = router;

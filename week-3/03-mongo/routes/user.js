const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user.js");
const { User } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  try {
    const username = "user";
    const password = "pass";
    const data = await User.create({ username, password });
    res.status(200).json({
      user: data,
      message: "User created successfully",
    });
  } catch (errr) {
    console.log(errr);
    res.status(500).json({
      error: errr,
      message: "Some error occured",
    });
  }
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;

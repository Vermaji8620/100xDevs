const mongoose = require("mongoose");

// Define schemas
const AdminSchema = new mongoose.Schema(
  {
    // Schema definition here
    username: String,
    password: String,
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema(
  {
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const CourseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    imageLink: String,
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};

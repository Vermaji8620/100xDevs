const mongoose = require("mongoose");

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
});

const UserSchema = new mongoose.Schema(
  {
    // Schema definition here
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CourseSchema = new mongoose.Schema({
  // Schema definition here
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};

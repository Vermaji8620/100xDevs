const { Admin } = require("../db");
const bcryptjs = require("bcryptjs");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  try {
    const { username, password } = req.headers;
    const findOnee = await Admin.findOne({ username });
    if (!findOnee) {
      return res.status(403).json({
        message: "admin does not exist",
      });
    }
    const hashp = bcryptjs.compareSync(password, findOnee.password);
    if (!hashp) {
      return res.status(403).json({
        message: "admin does not exist",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      message: "User not logged in",
      error: err.message,
    });
  }
}

module.exports = adminMiddleware;

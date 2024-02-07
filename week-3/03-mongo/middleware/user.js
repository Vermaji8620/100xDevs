const { User } = require("../db");
const bcryptjs = require("bcryptjs");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  try {
    const { username, password } = req.headers;

    const findOnee = await User.findOne({ username });
    if (!findOnee) {
      return res.status(403).json({
        message: "user does not existdd",
      });
    }
    const pass = bcryptjs.compareSync(password, findOnee.password);
    if (!pass) {
      return res.status(403).json({
        message: "user does not exists",
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

module.exports = userMiddleware;

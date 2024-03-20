// const express = require("express");
// const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";
// const app = express();

// const ALL_USERS = [
//   {
//     username: "vadityaraj67@gmail.com",
//     password: "123",
//     name: "aditya verma",
//   },
//   {
//     username: "rajaditya14032002@gmail.com",
//     password: "123321",
//     name: "raman singh",
//   },
//   {
//     username: "vermavikasraj70@gmail.com",
//     password: "verma raj",
//     name: "",
//   },
// ];

// app.use(express.json());
// app.use(cookieParser());

// let co;
// const chck = (usernam, passwod) => {
//   const findone = ALL_USERS.find((user) => user.username === usernam);
//   if (!findone) return false;
//   if (findone.password !== passwod) return false;
//   co = findone;
//   return true;
// };

// app.post("/login", (req, res) => {
//   console.log("firsit");
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!chck(username, password)) {
//     res.status(500).json({
//       message: "user not found",
//     });
//   }

//   const token = jwt.sign(
//     { username: username, password: password },
//     jwtPassword
//   );

//   console.log(co);

//   delete co.password;

//   res.cookie("token", token, { httpOnly: true });
//   res.status(200).json({
//     message: "user found",
//     user: co,
//   });
// });

// app.get("/users", (req, res) => {
//   const token = req.cookies.token;
//   const verification = jwt.verify(token, jwtPassword);
//   if (!verification) {
//     console.log("not verified");
//     return;
//   }
//   res.status(200).json({
//     message: "ho rhah",
//     token,
//   });
// });

// app.listen(3000, () => {
//   console.log("server started on port 3000");
// });


// MIDDLEWARE AND ZOD
// const express = require("express");
// const zod = require("zod");
// const app = express();

// // yaha pe jo app.use() ka hum use krte hai, uska yeh matlb hota hai ki uske andar jo function hai, wo har request pe chalega

// let timeinit = 0;
// const middle = (req, res, next) => {
//   timeinit = new Date().getMilliseconds();
//   console.log("timeinit->>>", timeinit);
//   if (req.headers.username != "aditya") {
//     res.status(500).json({
//       message: "you are not aditya and you will be returned",
//     });
//     return;
//   }
//   console.log("dodod");
//   next();
// };

// // yaha pe middle as a middleware use hua hai and next() jo hai uske help se hm next function pe ja sakte hai---

// app.get("/go", middle, (req, res) => {
//   res.status(200).json({ message: "done successfully" });
//   console.log("diff", new Date().getMilliseconds() - timeinit);
//   console.log("done");
// });

// // global catches ka matlb hai ki agar koi error aata hai kisi v function me to wo yaha pe catch ho jayega
// app.use((err, req, res, next) => {
//   console.log("global catches me error aya hai", err);
//   res.status(403).json({
//     message: "global catch error",
//   });
// });

// app.listen(3000, () => {
//   console.log("server is up and running");
// });


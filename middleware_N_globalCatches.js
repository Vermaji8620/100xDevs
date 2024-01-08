const express = require("express");
const zod = require("zod");
const app = express();

// yaha pe jo app.use() ka hum use krte hai, uska yeh matlb hota hai ki uske andar jo function hai, wo har request pe chalega

let timeinit = 0;
const middle = (req, res, next) => {
  timeinit = new Date().getMilliseconds();
  console.log("timeinit->>>", timeinit);
  if (req.headers.username != "aditya") {
    res.status(500).json({
      message: "you are not aditya and you will be returned",
    });
    return;
  }
  console.log("dodod");
  next();
};

// yaha pe middle as a middleware use hua hai and next() jo hai uske help se hm next function pe ja sakte hai---

app.get("/go", middle, (req, res) => {
  res.status(200).json({ message: "done successfully" });
  console.log("diff", new Date().getMilliseconds() - timeinit);
  console.log("done");
});

// global catches ka matlb hai ki agar koi error aata hai kisi v function me to wo yaha pe catch ho jayega
app.use((err, req, res, next) => {
  console.log("global catches me error aya hai", err);
  res.status(403).json({
    message: "global catch error",
  });
});

app.listen(3000, () => {
  console.log("server is up and running");
});

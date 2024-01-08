const express = require("express");
const zod = require("zod");
const app = express();

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().password(),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("Hello world");
// });

app.post("/health-checkup", function (req, res) {
  const response = validateInput(req.body);
  if (!response.success) {
    res.json({
      msg: "yours input are invalid",
    });
    return;
  }
  res.send({ response: response });
});

app.use((err, req, res, next) => {
  console.log("error a gya");
  res.status(500).send({ message: err.message });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

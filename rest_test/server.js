const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const sayHi = (req, res) => {
  res.send("Hi!");
};

app.get("/", sayHi);

app.post("/", (req, res) => {
  const { a, b } = req.body;
  res.send(`This is a POST request. The sum is: ${a + b}`);
});

app.patch("/", (req, res) => {
  const { a } = req.body;
  res.send(`This is a PATCH request. The variable is ${a}`);
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});

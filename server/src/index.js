const express = require("express");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({
    message: "pong",
  });
});

app.post("/chat", (req, res) => {
  const question = req.body.question;
  console.log(question);
  res.json({
    Question: question,
    answer: "pong",
  });
});

app.listen(3000, () => {
  console.log("server is Running");
});

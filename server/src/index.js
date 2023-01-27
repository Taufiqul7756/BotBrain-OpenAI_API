const express = require("express");
const OPENAI_API_KEY = "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";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
openai.listEngines().then((response) => {
  console.log(response);
});

openai
  .createCompletion({
    model: "text-davinci-003",
    prompt: "What is APi",
    max_tokens: 1000,
    temperature: 0,
  })
  .then((response) => {
    console.log(response.data);
  });

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

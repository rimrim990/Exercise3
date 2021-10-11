const express = require("express");
const app = express();
const port = 3001;

const factorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

app.get("/factorial", (req, res) => {
  const { number } = req.query;
  res.redirect(`/factorial/${number}`);
});

app.get("/factorial/:number", (req, res) => {
  const number = req.params.number;
  const ans = factorial(number);
  res.send(`${ans}`);
});

app.listen(port, () => console.log(`Server listening at port ${port}`));

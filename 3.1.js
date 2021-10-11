const express = require("express");
const app = express();
const port = 3001;

// body data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const obj = req.query;
  resStr = Object.keys(obj)
    .map((k) => `${k}: ${obj[k]}`)
    .join("\n");
  res.send(resStr);
});

app.post("/", (req, res) => {
  const obj = req.body;
  resStr = Object.keys(obj)
    .map((k) => `${k}: ${obj[k]}`)
    .join("\n");
  res.send(resStr);
});

app.put("/", (req, res) => {
  const obj = req.body;
  resStr = Object.keys(obj)
    .map((k) => `${k}: ${obj[k]}`)
    .join("\n");
  res.send(resStr);
});

app.delete("/", (req, res) => {
  const obj = req.body;
  resStr = Object.keys(obj)
    .map((k) => `${k}: ${obj[k]}`)
    .join("\n");
  res.send(resStr);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

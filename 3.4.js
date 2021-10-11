const express = require("express");
const app = express();
const port = 3001;

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("3.4.pug");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const resStr = `username: ${username}\npassword: ${password}`;
  res.send(resStr);
});

app.listen(port, () => console.log(`Server running at port ${port}`));

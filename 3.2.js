const express = require("express");
const app = express();
const port = 3001;

app.get("/board/page/:page", (req, res) => {
  const page = req.params.page;
  resStr = `This is page #${page}`;
  res.send(resStr);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

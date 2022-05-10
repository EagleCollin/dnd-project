const express = require("express");

const app = express();

app.use(express.static("./dist/dnd-project"));

app.get("/*", (req, res) =>
  req.sendFile("index.html", { root: "dist/dnd-project" })
);

app.listen(process.env.PORT || 8080);

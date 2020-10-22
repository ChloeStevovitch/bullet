var express = require("express");

var app = express();
app.use(express.static("./dist/bullet"));
app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/bullet/" });
});
app.listen(process.env.PORT || 8080);

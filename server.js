var express = require("express");
const path = require('path');

var app = express();
app.use(express.static(__dirname + "./dist/bullet"));
app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/bullet/" });
  res.sendFile(path.join(__dirname+'/dist/bullet/index.html'));

});
app.listen(process.env.PORT || 8080);

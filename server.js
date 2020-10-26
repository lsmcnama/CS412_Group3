const express = require("express");
const app = express();

// app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs"); // serve js and html together using ejs
app.set("views", __dirname + "/views"); // set views directory

app.use(express.static("views")); // send css, images and other static content/files

// route to HOME page
app.get("/", function (req, res) {
	res.render("home.ejs");
});

app.get("/about", function (req, res) {
	res.render("about.ejs");
});

app.get("/game", function (req, res) {
	res.render("jeopardy_game/index.ejs");
});

// assigned port number
const port = 3000;
app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});

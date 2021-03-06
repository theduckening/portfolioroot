var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require("morgan");
var exphbs = require("express-handlebars");
var app = express();




app.set("port", process.env.PORT || 9898);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public/views"));
app.engine(".hbs", exphbs({extname: ".hbs"}));
app.set("view engine", ".hbs");

app.get("/", function(req, res){
  res.render("index");
});


http.createServer(app).listen(app.get("port"), function(){
  console.log("Listening on port: %s", app.get("port"));
});

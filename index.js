var express = require("express");
var parser  = require("body-parser");
// var cmongo  = require("connect-mongo");
var mongoose= require("./db/connection");
var app     = express();
var Post= mongoose.model("Post");
app.set("port", process.env.PORT || 3001);
app.use(express.static(__dirname ))
app.use(parser.json({extended: true}));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.json({});
});

app.get("/posts", (req, res) =>{
  Post.find({}).then(function(posts){
    res.json(posts);
  });
});
// app.get("/posts/:title",function(req, res){
//   posts.findOne({title: req.params.title}).then(function(posts){
//     posts,
//   })
// });
app.post("/posts", (req, res) => {
  res.json(req.body);
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});

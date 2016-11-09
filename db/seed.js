var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Post = mongoose.model("Post");

Post.remove({}).then(function(){
  Post.collection.insert(seedData).then(function(){
    process.exit();
  });
});

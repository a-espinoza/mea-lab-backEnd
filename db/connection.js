var mongoose  = require("mongoose");

var PostSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    upvote: Number,
    image_url: String,
  }
);

mongoose.model("Post", PostSchema);
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/mean-lab-backEnd");


module.exports = mongoose;

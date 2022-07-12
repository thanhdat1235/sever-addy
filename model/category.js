// Model Post
// const Post = require("./posts");
const mongoose = require("mongoose");
Schema = mongoose.Schema;
// Model user
const categorySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    dropDups: true,
  },
  name: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});
categorySchema.index({ "$**": "text" });
module.exports = mongoose.model("Category", categorySchema);

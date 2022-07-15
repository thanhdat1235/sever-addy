const Post = require("./posts");
const Category = require("./category");
const mongoose = require("mongoose");
Schema = mongoose.Schema;
// Model user
const parentPostSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    dropDups: true,
  },
  name: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  categories: { type: Schema.Types.ObjectId, ref: "Category" },
});
parentPostSchema.index({ "$**": "text" });
module.exports = mongoose.model("ParentPosts", parentPostSchema);

// Model Post
const ParentPosts = require("./parentPosts");
const mongoose = require("mongoose");
Schema = mongoose.Schema;
// Model user
const postSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    dropDups: true,
  },
  title: { type: String },
  tags: { type: String },
  countViews: { type: Number },
  created_at: { type: Date },
  ckeditor_data: { type: String },
  urlImage: { type: String },
  description: { type: String },
  countComments: { type: Number },
  parentPostS: { type: Schema.Types.ObjectId, ref: "ParentPosts" },
});
postSchema.index({ "$**": "text" });
module.exports = mongoose.model("Post", postSchema);

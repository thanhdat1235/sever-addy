// Model Post
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
  ckeditor: { type: String },
  urlImage: { type: String },
  description: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});
postSchema.index({ "$**": "text" });
module.exports = mongoose.model("Post", postSchema);

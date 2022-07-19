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
  ckeditor_data: { type: String },
  urlImage: { type: String },
  description: { type: String },
  countComments: { type: Number },
  template: { type: String },
  status: { type: Boolean },
  categories: { type: Schema.Types.ObjectId, ref: "Category" },
  tags: { type: Schema.Types.ObjectId, ref: "Tags" },
});
postSchema.index({ "$**": "text" });
module.exports = mongoose.model("Post", postSchema);

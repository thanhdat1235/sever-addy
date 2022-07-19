const mongoose = require("mongoose");
Schema = mongoose.Schema;
// Model user
const tagsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    dropDups: true,
  },
  name: String,
  created_at: Date,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  categories: { type: Schema.Types.ObjectId, ref: "Category" },
});
tagsSchema.index({ "$**": "text" });
module.exports = mongoose.model("Tags", tagsSchema);

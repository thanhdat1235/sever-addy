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
  created_at: Date,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  tags: [{ type: Schema.Types.ObjectId, ref: "Tags" }],
});
categorySchema.index({ "$**": "text" });
module.exports = mongoose.model("Category", categorySchema);

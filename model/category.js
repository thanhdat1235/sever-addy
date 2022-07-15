const ParentPosts = require("./parentPosts");
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
  parentPosts: [{ type: Schema.Types.ObjectId, ref: "ParentPosts" }],
});
categorySchema.index({ "$**": "text" });
module.exports = mongoose.model("Category", categorySchema);

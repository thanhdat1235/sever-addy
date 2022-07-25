const mongoose = require("mongoose");
Schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *  schema:
 *    Tags:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        name:
 *          type: string
 *        created_at:
 *          type: dateTime
 *        posts:
 *          type: array
 *        categories:
 *          type: array
 */

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

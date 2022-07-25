const mongoose = require("mongoose");
Schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *  schema:
 *    Category:
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
 *        tags:
 *          type: array
 */

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

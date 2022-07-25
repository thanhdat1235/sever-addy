const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *  schema:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        first_name:
 *          type: string
 *        last_name:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        token:
 *          type: string
 *        role:
 *          type: string
 *        created_at:
 *          type: date
 *        otp_code:
 *          type: string
 *        resetLink:
 *          type: string
 */
// Model user
const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  role: { type: String },
  created_at: { type: Date },
  otp_code: { type: String, default: null },
  resetLink: { data: String, default: "" },
});
userSchema.index({ "$**": "text" });
module.exports = mongoose.model("user", userSchema);

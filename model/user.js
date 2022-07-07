const mongoose = require("mongoose");
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

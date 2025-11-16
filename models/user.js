const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

const userSchema = mongoose.Schema({
  from: String,
  to: String,
  mgs: String,
  created_at: {
    type: Date,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;

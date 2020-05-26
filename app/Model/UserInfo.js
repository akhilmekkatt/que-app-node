const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for User schema
let UserInfo = new Schema(
  {
    username: {
      type: String, required: true, index: { unique: true }
    },
    password: {
      type: String
    }, email: {
      type: String, required: true, index: { unique: true }
    }, phone: {
      type: Number, required: true, index: { unique: true }
    },
    role: { type: Array }
  },
  {
    collection: "Users"
  }
);

module.exports = mongoose.model("UserInfo", UserInfo);

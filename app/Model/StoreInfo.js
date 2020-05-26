const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for StoreInfo schema
let StoreInfo = new Schema(
  {
    id: { type: String },

    name: {
      type: String, required: true, index: { unique: true }
    },
    details: {
      type: String
    },
    description: {
      type: String
    },
    tags: {
      type: Array
    },
    category: {
      type: Array
    },
    addedDate: {
      type: Date
    },
    addedBy: {
      type: String
    },
    rating: {
      type: Number
    },
    images: {
      type: Array
    }

  },
  {
    collection: "StoreInfo"
  }
);

module.exports = mongoose.model("StoreInfo", StoreInfo);

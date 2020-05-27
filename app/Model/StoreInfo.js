const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for StoreInfo schema
let StoreInfo = new Schema(
  {
    storeId: { type: String, required: true, index: { unique: true } },

    name: {
      type: String, required: true, index: { unique: true }
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
    },
    lattitude: {
      type: Number
    },
    longitude: {
      type: Number
    },
    phone: {
      type: Number, required: true, index: { unique: true }
    }

  },
  {
    collection: "StoreInfo"
  }
);

module.exports = mongoose.model("StoreInfo", StoreInfo);

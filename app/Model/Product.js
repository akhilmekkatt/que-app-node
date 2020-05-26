const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Product schema
let Product = new Schema(
  {
    id: { type: String },

    name: {
      type: String
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
    date: {
      type: Date
    },
    itemPrice: {
      type: Number
    },
    size: {
      type: Array
    },
    rating: {
      type: Number
    },
    images: {
      type: Array
    }


  },
  {
    collection: "Products"
  }
);

module.exports = mongoose.model("Product", Product);

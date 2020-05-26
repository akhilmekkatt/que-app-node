// Imported required packages
const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URI || "mongodb+srv://akhil:akhil123@cluster0-pbzyl.mongodb.net/storeDB?retryWrites=true&w=majority";
// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true
}).then(
  () => {
    console.log(MONGO_URL + " Database is connected");
  },
  err => {
    console.log("There is problem while connecting database " + err);
  }
);

// All the express routes
const appRoutes = require("../Routes/app.route");

app.use(express.static("../public"));
// Conver incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

// Setup for the server port number
const port = process.env.PORT || 5000;

// Routes Configuration
app.use("/", appRoutes);

// Staring our express server
app.listen(port, function () {
  console.log("Server Lisening On Port : " + port);
});
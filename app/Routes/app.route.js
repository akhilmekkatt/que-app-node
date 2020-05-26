// Importing important packages
const express = require("express");
// Using express and routes
const jwt = require("jsonwebtoken");
const randtoken = require("rand-token");
const appRoute = express.Router();

let loginRequestModel = require("../Model/LoginRequest");


//user actions
// To Add new user
appRoute.route("/addUser").post((req, res) => {
  let request = new loginRequestModel(req.body);
  request
    .save()
    .then(game => {
      res.status(200).json({ request: "User Added Successfully" });
    })
    .catch(err => {
      res.status(400).send("Something Went Wrong");
    });
});

//list users
appRoute.route("/users").get((req, res) => {
  loginRequestModel.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

appRoute.route("/deleteUser/:id").get((req, res, next) => {

  loginRequestModel.findByIdAndRemove({ _id: req.params.id }, (err, employee) => {
    if (err) res.json(err);
    else res.json("User Deleted Successfully");
  });
});


//authenticate
appRoute.route("/authenticate").post((req, res) => {
  console.log("before", req.body);
  loginRequestModel.findOne(
    { username: req.body.username, password: req.body.password },
    (user, err) => {
      console.log(err);

      if (err == null) {
        res.json({ status: "error", error: "No User found" });
      } else {
        const refreshToken = randtoken.uid(256);
        jwt.sign({ user }, "secretkey", { expiresIn: "1hr" }, (err, token) => {
          res.json({ jwt: token, refreshToken: refreshToken });
        });
      }
    }
  );
});


//token verification function
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader != "undefined") {
    console.log(bearerHeader);
    req.token = bearerHeader.split(" ")[1];
    next();
  } else {
    res.json({
      message:
        "Dont try to fool us. We are too smart. You dont have access to see this."
    });
  }
}

module.exports = appRoute;

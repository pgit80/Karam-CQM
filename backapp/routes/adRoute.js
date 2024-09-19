const express = require("express");
const User = require("../models/user");
const Query = require("../models/query");
const Admin = require("../models/admin");
const adRoute = express.Router();

// Admin login route
adRoute.post("/adlogin", async (req, res) => {
  const { username, password } = req.body;
  const user = await Admin.findOne({ username: username });
  if (user) {
    if (user.password === password) {
      return res.send({ msg: "Admin Login Success" });
    } else {
      return res.send({ msg: "Invalid Password" });
    }
  } else {
    return res.send({ msg: "Admin Not Exist" });
  }
});

// Route to get all pending queries
adRoute.get("/ad/allpenquery", async (req, res) => {
  try {
    const queries = await Query.find({ status: "pending" }).populate(
      "_id",
      "firstname lastname"
    );
    return res.send({ msg: "Success", queries: queries });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "Error fetching pending queries", error: error.message });
  }
});

// Route to get all processing queries
adRoute.get("/ad/allproquery", async (req, res) => {
  try {
    const queries = await Query.find({ status: "processing" });
    return res.send({ msg: "Success", queries: queries });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "Error fetching processing queries", error: error.message });
  }
});

// Route to get all completed queries
adRoute.get("/ad/allcomquery", async (req, res) => {
  try {
    const queries = await Query.find({ status: "com" });
    return res.send({ msg: "Success", queries: queries });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "Error fetching completed queries", error: error.message });
  }
});

// Route to update query status
adRoute.patch("/status/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Query.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      return res.status(404).send({ msg: "Query not found" });
    }
    return res.send({ msg: "Success", updatedQuery: result });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "Error updating status", error: error.message });
  }
});

module.exports = adRoute;

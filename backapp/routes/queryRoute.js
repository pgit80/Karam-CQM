const express = require("express");
const User = require("../models/user");
const Query = require("../models/query");
const queryRoute = express.Router();
queryRoute.get("/getquery/", async (req, res) => {
  const result = await Query.find();
  res.send(result);
});

queryRoute.get("/getpenquery/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Query.find({ uid: id, status: "pending" });
  res.send({ msg: "Success", result: result });
});

queryRoute.get("/getproquery/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Query.find({ uid: id, status: "processing" });
  res.send({ msg: "Success", result: result });
});

queryRoute.get("/getcomquery/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Query.find({ uid: id, status: "completed" });
  res.send({ msg: "Success", result: result });
});

queryRoute.post("/addquery/", async (req, res) => {
  const query = req.body;
  console.log(query);
  const result = await Query.create(req.body);
  res.send({ msg: "Query Added" });
});

queryRoute.patch("/updatequery/:id", async (req, res) => {
  const id = req.params.id;
  const { department, subject, description } = req.body;
  try {
    const updateQuery = await Query.findByIdAndUpdate(
      id,
      { department, subject, description },
      { new: true }
    );
    if (!updateQuery) {
      return res.status(404).json({ msg: "query not found" });
    }
    res.json({ msg: "Query updated Successfully", result: updateQuery });
  } catch (error) {
    console.error("failed to update query", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = queryRoute;

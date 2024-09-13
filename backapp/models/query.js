const express = require("express");
const mongoose = require("mongoose");

const querySchema = mongoose.Schema(
  {
    uid: {
      type: String,
    },
    department: {
      type: String,
    },
    subject: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
    },
    firstname: {
      type: String,
    },
  },
  { timestamps: true }
);

Query = mongoose.model("query", querySchema);

module.exports = Query;

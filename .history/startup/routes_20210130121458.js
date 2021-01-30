const express = require("express");
const reqLogger = require("../startup/logger");
const error = require("../middleware/error");
const endpoint = require("../routes/endpoint");

module.exports = function (app) {
  app.use(express.json());
  app.use(reqLogger);
  app.use(error);
  app.get("/", endpoint);
  app.post("/validate-rule", endpoint);
};

const express = require("express");
const reqLogger = require("../startup/logger");
const error = require("../middleware/error");


module.exports = function (app) {
    app.use(express.json());
    app.use(reqLogger);
    app.use(error);
}
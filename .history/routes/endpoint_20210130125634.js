const config = require("config");
const express = require("express");
const response = require("../services/response");
const router = express.Router();

router.get("/", async (req, res) => {
  getdata = {
    name: config.get("profile_name"),
    github: config.get("github"),
    email: config.get("email"),
    mobile: config.get("mobile"),
    twitter: config.get("twitter"),
  };

  return response.withDataAndMsg(res, config.get("app_name"), getdata);
});

router.post("/validate-rule", async (req, res) => {
  // var getRequestType = typeof req.params
  var { rule, data } = req.body;
  console.log(rule);
  return response.withDataAndMsg(res, config.get("app_name"), req.body);
});

var ruleHandler = ({field, condition, condition_value}) => {

};

module.exports = router;

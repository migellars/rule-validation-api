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
  ruleHandler(rule);
  return response.withDataAndMsg(res, config.get("app_name"), req.body);
});

var ruleHandler = (condition, value1, value2) => {
  var sign = conditionSign(condition);
  // perform the operation
  var res = performOperation(sign, value1, value2);
  console.log;
  ("performing operation", res;
};

var conditionSign = (condition) => {
  switch (condition) {
    case "gte":
      return ">=";
    case "eq":
      return "==";
    case "neq":
      return "!=";
    case "gt":
      return ">";
    case "contains":
      return "includes";
    default:
      break;
  }
};

var performOperation = (sign, value1, value2) => {
  var res = false;
  if (sign != includes) {
    if (eval(`${value1}${sign}${value2}`)) res = true;
  }
  return res;
};

module.exports = router;

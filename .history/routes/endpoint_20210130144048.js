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
  //var { rule, data } = req.body;
  var fn = anotherFn(req.body);
  console.log(fn);

  var result = ruleHandler(fn);
  console.log(result);

  return response.withDataAndMsg(res, config.get("app_name"), req.body);
});

var anotherFn = ({ rule, data }) => {
  var condition = rule["condition"];
  var field = rule["field"];
  var value1 = data.hasOwnProperty(field) ? data[field] : "";
  var value2 = rule["condition_value"];

  return { condition, value1, value2 };
};

var ruleHandler = ({ condition, value1, value2 }) => {
  var sign = conditionSign(condition);
  // perform the operation
  return performOperation(sign, value1, value2);
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
  if (sign != "includes") {
    // console.log(`${value1}${sign}${value2}`);

    if (eval(`${value1}${sign}${value2}`)) res = true;
  }
  return res;
};

module.exports = router;

const errorType = {
  ERROR_TYPE_INVALID_JSON_PAYLOAD: "Invalid JSON payload passed.",
  ERROR_TYPE_INVALID_REQUIRED_FIELD: (field) => `[${field}] is required.`,
  ERROR_TYPE_RULE_FIELD_NOT_PASSED: "rule is required.",
  ERROR_TYPE_WRONG_TYPE: (field,type) => `[${field] should be a|an [type].`,
};

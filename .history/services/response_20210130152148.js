const config = require("config");

function validationErrors(res, payload = {}) {
  return res.status(422).json({
    status: "error",
    error: payload,
  });
}

function success(res, msg = "Operation successful") {
  return res.status(200).json({
    status: "success",
    message: msg,
  });
}

// function withDataAndMsg(res, msg = "Operation successful", payload = {}) {
//   return res.status(200).json({
//     status: "success",
//     message: msg,
//     data: payload,
//   });
// }
function withPayload()

function withData(res, payload = {}) {
  return res.status(200).json({
    status: "success",
    data: payload,
  });
}

function error(res, msg = "Error Occured", code = 400) {
  return res.status(code).json({
    status: "error",
    message: msg,
  });
}

function redirect(res, url = config.get("front_app_domain"), msg = "") {
  return res.redirect(301, `${url}/?message=${msg}`);
}

module.exports.success = success;
module.exports.withDataAndMsg = withDataAndMsg;
module.exports.withData = withData;
module.exports.error = error;
module.exports.redirect = redirect;
module.exports.validationErrors = validationErrors;

const resStatus = {
  SUCCESS: 200,
  ERROR: 400,
};

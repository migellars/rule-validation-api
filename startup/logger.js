const config = require("config");

module.exports = function (req, res, next) {
  if (config.get("environment") === "dev" || config.get("environment") === "staging") {
    console.log({
      host: req.headers["host"],
      contentType: req.headers["content-type"],
      Authorization: req.headers["Authorization"],
      method: req.method,
      url: req.url,
      body: req.body
    });
  }
  next();
};

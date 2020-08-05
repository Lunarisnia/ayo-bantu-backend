const router = require("express").Router();
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

let writeStream = fs.createWriteStream(
  path.join(__dirname, "../../logs", "access.log"),
  { flags: "a" }
);

router.use(morgan("combined", { stream: writeStream }));
router.use(morgan("dev"));

module.exports = router;

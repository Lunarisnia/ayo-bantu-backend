const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.use("/", async (req, res, next) => {
try {
    let token = req.headers.authorization;
    if(!token) {
      res.status(401);
      res.send("Unaothorized");
      return null;
    }
    token = token.slice(7);
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        res.status(401);
        res.send("Unauthorized");
      } else {
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send("Error C100");
  }
});

module.exports = router;

const server = require("./src/server");
const dotenv = require("dotenv");
const connection = require("./config/dbCon");
dotenv.config();

connection.on("open", () => {
  server.listen("10", "0.0.0.0", () => {
    if (server.listening) {
      console.log("Server is listening");
    }
  });
});

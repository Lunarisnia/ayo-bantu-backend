const server = require("./src/server");
const dotenv = require("dotenv");
const connection = require("./config/dbCon");
dotenv.config();

connection.on("open",async () => {
  server.listen(process.env.APP_PORT, "0.0.0.0", () => {
    if (server.listening) {
      console.log("Server is listening on port: " + process.env.APP_PORT);
    }
  });
});

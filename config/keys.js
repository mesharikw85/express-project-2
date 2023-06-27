const dotenv = require("dotenv");
dotenv.config();

const config = {
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_TOKEN_EXP: process.env.JWT_TOKEN_EXP,
  PORT: process.env.PORT,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
};

if (!config.JWT_TOKEN_EXP) {
  console.log("env values missing");
  process.exit(1);
}

module.exports = config;

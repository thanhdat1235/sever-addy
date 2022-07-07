require("dotenv").config();

const { MONGO_URI, API_PORT, TOKEN_KEY, REFRESH_TOKEN_KEY } = process.env;

module.exports = {
  MONGO_URI,
  API_PORT,
  TOKEN_KEY,
  REFRESH_TOKEN_KEY,
};

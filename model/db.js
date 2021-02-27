const { MongoClient } = require("mongodb");
require("dotenv").config();
const uriDb = process.env.URI_DB;

const db = MongoClient.connect(uriDb, {
  useUnifiedTopology: true,
  poolSize: 5,
});

module.exports = db;

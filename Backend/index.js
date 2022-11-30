const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/config");
const jobController = require("./Controllers/job.routes");
require("dotenv").config();

let PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/job", jobController);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
  console.log(`listening on port ${PORT}`);
});

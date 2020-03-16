require("dotenv").config();
const express = require("express");
const app = express();
const jobRouter = require("./api/jobs/job.router");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on port: ", process.env.APP_PORT);
});
const {
  create,
  getJobById,
  getJobs,
  updateJob,
  deleteJob,
  getRates
} = require("./job.service");

module.exports = {
  createJob: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      return res.status(200).json(results);
    });
  },
  getJobById: (req, res) => {
    const jobId = req.params.jobId;
    getJobById(jobId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Record not Found"
        });
      }
      return res.status(200).json(results);
    });
  },
  getJobs: (req, res) => {
    getJobs((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  getRates: (req, res) => {
    getRates((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  updateJob: (req, res) => {
    const body = req.body;
    updateJob(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.status(500).json({
          status: false,
          message: "Failed to update Job"
        });
      }
      return res.status(200).json({
        status: true,
        message: "Updated successfully"
      });
    });
  },
  deleteJob: (req, res) => {
    const body = req.body;
    deleteJob(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (results == 0) {
        return res.status(404).json({
          status: false,
          message: "Record not Found"
        });
      }
      return res.status(200).json({
        status: true,
        message: "Job deleted successfully"
      });
    });
  }
};

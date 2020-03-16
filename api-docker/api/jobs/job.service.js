const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "INSERT INTO job(name) values (?)",
      [data.name],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getJobs: callBack => {
    pool.query("SELECT jobId, name FROM job", [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getRates: callBack => {
    pool.query("SELECT amount, year, jobId FROM rate", [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getJobById: (jobId, callBack) => {
    pool.query(
      "SELECT jobId, name FROM job WHERE jobId = ?",
      [jobId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateJob: (data, callBack) => {
    pool.query(
      "UPDATE job set name=? WHERE jobId = ?",
      [data.name, data.jobId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteJob: (data, callBack) => {
    pool.query(
      "DELETE FROM job WHERE jobId = ?",
      [data.jobId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results.affectedRows);
      }
    );
  },
  
};

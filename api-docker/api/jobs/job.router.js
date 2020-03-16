const {
  createJob,
  getJobById,
  getJobs,
  updateJob,
  deleteJob,
  getRates
} = require("./job.controller")

const router = require("express").Router()

router.post("/", createJob)
router.get("/", getJobs)
router.get("/rates/", getRates)
router.get("/:jobId", getJobById)
router.patch("/", updateJob)
router.delete("/", deleteJob)

module.exports = router

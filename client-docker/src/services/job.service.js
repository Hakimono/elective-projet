import axios from 'axios'
const API_URL = 'http://localhost:8091/api/jobs/'

class JobService {
  getAll () {
    return axios
      .get(API_URL).then(response => {
        return response.data
      })
  }

  getAllRates () {
    return axios
      .get(API_URL + 'rates/').then(response => {
        return response.data
      })
  }

  getById (jobId) {
    return axios
      .get(API_URL + jobId).then(response => {
        return response.data
      })
  }

  add (newJob) {
    return axios
      .post(API_URL, newJob)
  }

  update (job) {
    return axios
      .patch(API_URL, job)
  }

  delete (job) {
    return axios
      .delete(API_URL, { data: job })
  }
}

export default new JobService()

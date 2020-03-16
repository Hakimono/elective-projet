import jobService from '../services/job.service'

export const jobs = {
  namespaced: true,
  state: {
    all: {}
  },
  actions: {
    getAll ({ commit }) {
      commit('getAllRequest')
      jobService.getAll()
        .then(async jobs => {
          const rates = await jobService.getAllRates()
          jobs.forEach(job => {
            job.rate = rates.find(rate => rate.jobId === job.jobId)
          })
          commit('getAllSuccess', jobs)
        })
        .catch(error => commit('getAllFailure', error))
    },
    async add ({ dispatch }, job) {
      await jobService.add(job)
        .then(() => {
          dispatch('alert/success', 'Job added successfully!', { root: true })
          dispatch('getAll')
        })
        .catch(error => {
          dispatch('alert/error', error, { root: true })
        })
    },
    async delete ({ dispatch }, job) {
      await jobService.delete(job)
        .then(() => {
          dispatch('alert/success', 'Job deleted successfully!', { root: true })
          dispatch('getAll')
        })
        .catch(error => {
          dispatch('alert/error', error, { root: true })
        })
    },
    update ({ dispatch }, job) {
      jobService.update(job)
        .then(() => {
          dispatch('alert/success', 'Job updated successfully!', { root: true })
          dispatch('getAll')
        })
        .catch(error => {
          dispatch('alert/error', error, { root: true })
        })
    }
  },
  mutations: {
    getAllRequest (state) {
      state.all = { loading: true }
    },
    getAllSuccess (state, jobs) {
      state.all = { items: jobs }
    },
    getAllFailure (state, error) {
      state.all = { error }
    }
  }
}

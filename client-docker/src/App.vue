<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row bg-dark">
        <div class="col-lg-12">
          <p
            class="text-center text-light display-4 pt-2"
            style="font-size:25px;"
          >POSTES</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-3">
        <div class="col-lg-6">
          <h3 class="text-info float-left">Postes</h3>
        </div>
        <div class="col-lg-6">
          <button class="btn btn-info float-right" @click="showAddModal=true">
            <v-icon class="tab-icon" name="plus"></v-icon>
          </button>
        </div>
      </div>
      <hr class="bg-info" />
      <div v-if="alert.message" :class="'alert ' + alert.type">{{alert.message}}</div>
      <!-- Displaying Records -->
      <div class="row">
        <div class="col-lg-12">
          <table class="table table-bordered table-striped">
            <thead>
              <tr class="text-center bg-info text-light">
                <th>Modifier</th>
                <th>ID</th>
                <th>Poste</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center" v-for="job in jobs.items" :key="job.jobId">
                <td>
                  <a class="text-success" @click="showEditModal=true; selectJob(job);">
                    <v-icon class="tab-icon" name="edit-2"></v-icon>
                  </a>
                </td>
                <td>{{ job.jobId }}</td>
                <td>{{ job.name }}</td>
                <td>
                  <a class="text-danger" @click="showDeleteModal=true; selectJob(job);">
                    <v-icon class="tab-icon" name="trash-2"></v-icon>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Add New Job Modal -->
    <div id="overlay" v-if="showAddModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter un nouveau poste</h5>
            <button type="button" class="close" @click="showAddModal=false">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-4">
            <form action="#" method="post" @submit.prevent>
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control form-control-lg"
                  placeholder="Nom"
                  v-model="newJob.name"
                />
              </div>
              <div class="form-group">
                <button
                  class="btn btn-info btn-block btn-lg"
                  @click="showAddModal=false; addJob(newJob)"
                >Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Job Modal -->
    <div id="overlay" v-if="showEditModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier un emploi</h5>
            <button type="button" class="close" @click="showEditModal=false; $store.dispatch('jobs/getAll')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-4">
            <form action="#" method="post">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control form-control-lg"
                  v-model="currentJob.name"
                />
              </div>
              <div class="form-group">
                <button
                  class="btn btn-info btn-block btn-lg"
                  @click="showEditModal=false; updateJob();"
                >Modifier</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Job Modal -->
    <div id="overlay" v-if="showDeleteModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Supprimer un emploi</h5>
            <button type="button" class="close" @click="showDeleteModal=false">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-4">
            <form action="#" method="post">
              <h4 class="text-danger">Voulez-vous vraiment supprimer : {{ currentJob.name }} ?</h4>
              <hr />
              <button class="btn btn-danger btn-lg" @click="showDeleteModal=false; deleteJob();">Supprimer</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.tab-icon {
  width: 24px;
}

#overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}

</style>

<script>

export default {
  name: 'app',
  data () {
    return {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      newJob: { name: '' },
      currentJob: {}
    }
  },
  computed: {
    jobs () {
      return this.$store.state.jobs.all
    },
    alert () {
      return this.$store.state.alert
    }
  },
  mounted () {
    this.$store.dispatch('jobs/getAll')
  },
  methods: {
    selectJob (job) {
      this.currentJob = job
    },
    addJob (job) {
      this.$store.dispatch('jobs/add', job)
      this.newJob = { name: '' }
    },
    deleteJob () {
      this.$store.dispatch('jobs/delete', this.currentJob)
      this.currentJob = {}
    },
    updateJob () {
      this.$store.dispatch('jobs/update', this.currentJob)
      this.currentJob = {}
    }
  }
}

</script>

<template>
  <!--https://art-of-engineer.blogspot.com/2021/06/vue-js-crud-app.html
https://github.com/ArtOfEngineer/Vue-Js-ASP-NET-Core-WebAPI/blob/main/ui/department.js
https://www.youtube.com/watch?v=Jg4GOPaE4do&ab_channel=ArtofEngineer
 -->
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-sm-12 col-md-8">
        <div class="title-tab">
          <h3>Usuários cadastrados</h3>
        </div>
        <!-- botão cadastrar usuario 
        <router-link to="/cadastro"
          ><a class="btn">
            
            Add
          </a></router-link
        >--><!--data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="addClick()" -->
      </div>

      <!-- pesquisa -->
      <div class="col-sm-12 col-md-4">
        <input
          class="form-control input-pesquisa"
          v-model="usernameFilter"
          placeholder="Pesquisa"
        />
      </div>
    </div>

    <div class="table-scroll">
      <table id="tableUsers" class="table table-sm">
        <thead>
          <tr>
            <th>
              <div class="d-flex flex-row align-items-end">
                <div class="col-2">ID</div>
                <!--mudar ordem alfabética nome completo-->
                <div class="col">
                  <a @click="sortId = !sortId">
                    <!--mudar de true para false de acordo com o click-->
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAo0lEQVRIie2VywqDMBBFD/5EtVXQ/18X+hUtFRSMgi76H+3CzKbER14LaS9cyCbnBiYzA38FVAY8gLs+B9UJaIC3dgdcQsHTL7hYhQjJgd4AF49A6QovNuDiCahc4MMOuHNIbQEXP02gZCHgZfMajzsH1g37GlxNoKUanB0eZdV00b+phOxpNK9uToF2Ba6Yx4mXog47UdRxLcqYl02UhfPD+gA2c2+d96/PBQAAAABJRU5ErkJggg=="
                    />
                  </a>
                </div>
              </div>
            </th>
            <th>
              <!--mudar ordem alfabética username-->
              <div class="d-flex flex-row align-items-end">
                <div class="col-4 p-0">Usuário</div>
                <div class="col-8">
                  <a @click="sortUsername = !sortUsername">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAo0lEQVRIie2VywqDMBBFD/5EtVXQ/18X+hUtFRSMgi76H+3CzKbER14LaS9cyCbnBiYzA38FVAY8gLs+B9UJaIC3dgdcQsHTL7hYhQjJgd4AF49A6QovNuDiCahc4MMOuHNIbQEXP02gZCHgZfMajzsH1g37GlxNoKUanB0eZdV00b+phOxpNK9uToF2Ba6Yx4mXog47UdRxLcqYl02UhfPD+gA2c2+d96/PBQAAAABJRU5ErkJggg=="
                    />
                  </a>
                </div>
              </div>
            </th>
            <th>
              <!--mudar ordem alfabética nome completo-->
              <div class="d-flex flex-row align-items-end">
                <div class="col-4 p-0">Nome</div>
                <div class="col">
                  <a @click="sortFullname = !sortFullname">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAo0lEQVRIie2VywqDMBBFD/5EtVXQ/18X+hUtFRSMgi76H+3CzKbER14LaS9cyCbnBiYzA38FVAY8gLs+B9UJaIC3dgdcQsHTL7hYhQjJgd4AF49A6QovNuDiCahc4MMOuHNIbQEXP02gZCHgZfMajzsH1g37GlxNoKUanB0eZdV00b+phOxpNK9uToF2Ba6Yx4mXog47UdRxLcqYl02UhfPD+gA2c2+d96/PBQAAAABJRU5ErkJggg=="
                    />
                  </a>
                </div>
              </div>
            </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in resultQuery" :key="user.id">
            <td style="text-align: center">{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.fullname }}</td>
            <td style="vertical-align: middle">
              <a
                class=" mr-1 mt-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="editClick(user)"
                title="Editar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </a>

              <a @click="deleteClick(user.id)" class=" mr-1 mt-0" title="Excluir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                  />
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- modal editar ou criar usuario-->
    <!--<div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="input-group mb-3">
              <span class="input-group-text">Usuário</span>
              <input type="text" class="form-control" v-model="username" />
            </div>

            <button type="button" @click="createClick()" v-if="userId == 0" class="btn btn-primary">
              Create
            </button>
            <button type="button" @click="updateClick()" v-if="userId != 0" class="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {
      users: [],
      modalTitle: '',
      username: '',
      fullname: '',
      userId: 0,
      usernameFilter: null,
      //userIdFilter: '',
      usersWithoutFilter: [],
      sortUsername: false,
      sortFullname: false,
      sortId: false,
    }
  },
  watch: {
    //de acordo com o click o val vai ser true ou false
    sortUsername(val) {
      this.sortResult('username', val)
    },
    sortFullname(val) {
      this.sortResult('fullname', val)
    },
    sortId(val) {
      this.sortResult('id', val)
    },
  },
  computed: {
    //pesquisa
    resultQuery() {
      if (this.usernameFilter != null) {
        return this.users.filter(user => {
          return (
            this.usernameFilter
              .toLowerCase()
              .split(' ')
              .every(v => user.username.toLowerCase().includes(v)) ||
            this.usernameFilter
              .toLowerCase()
              .split(' ')
              .every(v => user.fullname.toLowerCase().includes(v))
          )
        })
      } else {
        return this.users
      }
    },
  },

  //pegar os dados do json server
  async created() {
    const { data } = await axios.get('http://localhost:3000/users')
    this.users = data
  },
  methods: {
    refreshData() {
      axios.get('http://localhost:3000/users').then(response => {
        this.users = response.data
        this.usersWithoutFilter = response.data
      })
    },
    deleteClick(id) {
      if (!confirm('Excluir o usuário ' + id + '?')) {
        return
      }
      axios.delete('http://localhost:3000/users/' + id).then(response => {
        this.refreshData()
        console.log(response.data)
      })
    },

    /*addClick() {
      this.modalTitle = 'Cadastrar usuário'
      this.userId = 0
      this.username = ''
      this.fullname = ''
    },
    editClick(user) {
      this.modalTitle = 'Editar usuário'
      this.userId = user.userId
      this.username = user.username
    },
    async updateClick() {
      await axios
        .put('http://localhost:3000/users', {
          username: this.username,
          fullname: this.fullname,
          password: this.password,
        })
        .then(response => {
          this.refreshData()
          alert(response.data)
        })
    },*/

    sortResult(prop, asc) {
      this.users = this.usersWithoutFilter.sort(function(a, b) {
        if (asc) {
          //true
          return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0
        } else {
          return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0
        }
      })
    },
  },
  mounted: function() {
    this.refreshData()
  },
}
</script>

<style scoped>
#tableUsers {
  margin-top: 10px;
}

.btn {
  margin: 15px 0px;
}

.input-pesquisa {
  margin: 15px 0;
  background-image: url('https://img.icons8.com/material-rounded/24/000000/search.png');
  background-position: 95% 7px;
  background-repeat: no-repeat;
}

.title-tab {
  padding-top: 15px;
}

.table-scroll {
  overflow-x: auto;
}

@media screen and (max-width: 768px) {
  .title-tab {
    text-align: center;
  }
}
</style>

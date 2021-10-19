<template>
  <!--https://art-of-engineer.blogspot.com/2021/06/vue-js-crud-app.html
https://github.com/ArtOfEngineer/Vue-Js-ASP-NET-Core-WebAPI/blob/main/ui/department.js
https://www.youtube.com/watch?v=Jg4GOPaE4do&ab_channel=ArtofEngineer
 -->
  <div class="container">
    <div class="row justify-content-between ">
      <div class="col-8">
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
      <div class="col-4 ">
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
                <div class="col-2 ">ID</div>
                <!--<div class="col-10">
                  <a @click="sortResult('userId', true)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-down-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"
                      />
                    </svg>
                  </a>
                  <a @click="sortResult('userId', false)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-up-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </a>
                </div>-->
              </div>
            </th>
            <th>
              <!--mudar ordem alfabética username-->
              <div class="d-flex flex-row align-items-end">
                <div class="col-4 ">Usuário</div>
                <div class="col-8">
                  <a @click="sortResult('username', true)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-down-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"
                      />
                    </svg>
                  </a>

                  <a @click="sortResult('username', false)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-up-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </th>
            <th>
              <!--mudar ordem alfabética nome completo-->
              <div class="d-flex flex-row align-items-end">
                <div class="col-4 ">Nome</div>
                <div class="col-8">
                  <a @click="sortResult('fullname', true)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-down-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"
                      />
                    </svg>
                  </a>

                  <a @click="sortResult('fullname', false)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-up-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in resultQuery" :key="user.id">
            <td style="text-align: center;">{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.fullname }}</td>
            <td style="text-align: center; vertical-align: middle">
              <button
                type="button"
                class="btn btn-light mr-1 mt-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="editClick(user)"
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
              </button>

              <button type="button" @click="deleteClick(user.id)" class="btn btn-light mr-1 mt-0">
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
              </button>
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
      userIdFilter: '',
      usersWithoutFilter: [],
    }
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
    deleteClick(id) {
      if (!confirm('Excluir o usuário ' + id + '?')) {
        return
      }
      axios.delete('http://localhost:3000/users/' + id).then(response => {
        this.refreshData()
        console.log(response.data)
      })
    },

    sortResult(prop, asc) {
      this.users = this.usersWithoutFilter.sort(function(a, b) {
        if (asc) {
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
.btn {
  margin: 15px 0px;
}

.input-pesquisa {
  margin: 15px 0;
}

.title-tab {
  padding-top: 15px;
}

.table-scroll {
  overflow-x: auto;
}
</style>

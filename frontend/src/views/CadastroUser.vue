<template>
  <main>
    <NavBarDashboard />
    <div class="cadastroUser" style="margin-top:60px">
      <div>
        <form @submit.prevent="addUser">
          <div class="title-form">
            <h4>Cadastro de usuário</h4>
          </div>
          <div>
            <label for="username">Usuário</label>
            <input type="text" name="username" v-model="form.username" />
          </div>
          <div>
            <label for="full_name">Nome completo</label>
            <input type="text" name="full_name" v-model="form.full_name" />
          </div>
          <div>
            <label for="password">Senha</label>
            <input type="password" name="password" v-model="form.password" />
          </div>
          <div>
            <button class="button-submit mt-4" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <!--<p v-if="showError" id="error">Username já existe? ou erro</p>-->
    </div>
  </main>
</template>

<script>
import NavBarDashboard from '../components/NavBarDashboard.vue'

export default {
  name: 'CadastroUser',
  components: { NavBarDashboard },
  data() {
    return {
      form: {
        username: '',
        full_name: '',
        password: '',
      },
      //showError: false,
    }
  },
  methods: {
    async addUser() {
      const axios = require('axios')
      if (this.form.username && this.form.full_name && this.form.password) {
        await axios
          .post('http://localhost:3000/users', {
            username: this.form.username,
            fullname: this.form.full_name,
            password: this.form.password,
          })
          .then(resp => {
            //limpar campos:
            this.form.username = ''
            this.form.full_name = ''
            this.form.password = ''
            alert('Usuário ' + resp.data.username + ' cadastrado(a)!')
          })
          .catch(error => {
            console.log(error)
          })
      }
    },

    /*async submit() {
      try {
        await this.Register(this.form)
        this.$router.push('/login')
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },*/
  },
}
</script>

<style scoped>
.cadastroUser {
  align-items: center;
  margin-top: 30px;
  align-items: center;
  margin: auto;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0rem 0 1rem rgb(194, 193, 193);
  padding: 20px;
  width: 35vh;
}

input,
label {
  display: block;
  margin: 0px;
  width: 100%;
}

label {
  padding: 15px 0px 0px 0px;
}

.button-submit {
  width: 100%;
  border-radius: 5px;
}

.title-form {
  text-align: center;
  padding: 5px;
}

#error {
  color: red;
}
</style>

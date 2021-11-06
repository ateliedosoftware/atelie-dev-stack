<template>
  <div>
    <Navbar />
    <main>
      <div>
        <div>
          <img
            class="banner-ifrs"
            src="https://moodle.sertao.ifrs.edu.br/pluginfile.php/1/theme_moove/logo/1631296024/Instituto_Federal_Sertao_Refeito13.png"
          />
        </div>
        <form class="form-login" @submit.prevent="submit">
          <!--@submit.prevent="submit"-->
          <h4 class="title-login">Login</h4>
          <div class="usuario">
            <label for="username">Usuário</label>
            <input
              id="inputUser"
              name="username"
              type="text"
              placeholder="Matrícula"
              v-model="form.username"
            />
            <p id="mensagem" class="feedback">{{ tipo }}</p>
          </div>
          <div>
            <label for="password">Senha</label>
            <input type="password" name="password" placeholder="" v-model="form.password" />
          </div>
          <br />
          <div class="btn-login">
            <!--por enquanto entra no dashboard sem fazer autenticação -->
            <router-link to="/dashboard"><button type="submit">Entrar</button></router-link>
          </div>
        </form>
        <p v-if="showError" id="error">Username or Password is incorrect</p>
      </div>
    </main>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Navbar from '../components/NavBar.vue'

export default {
  name: 'Login',
  components: { Navbar },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      tipo: '', //tipo de usuário
      showError: false,
    }
  },

  computed: {
    username() {
      return this.form.username
    },
  },

  watch: {
    //observa o usuário e o tipo de usuário e chama as funções
    username(val) {
      this.tipoUsuario(val)
    },
    tipo(val) {
      this.cssTipoUsuario(val)
    },
  },

  /*mounted: function() {
    //mudar placeholder usuário
    var i = 0
    var x = ['CPF', 'Email', 'Matrícula'] // ex: 123.123.123-12
    setInterval(() => {
      //console.log(i)
      document.getElementById('inputUser').placeholder = x[i]
      i++
      if (i == 3) i = 0
    }, 3000)
  },

  beforeDestroy: function() {
    delete this.mounted
  },*/

  methods: {
    ...mapActions(['LogIn']),
    async submit() {
      const User = new FormData()
      User.append('username', this.form.username)
      User.append('password', this.form.password)
      try {
        await this.LogIn(User)
        this.$router.push('/posts')
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },

    validaSubmit(e) {
      if (this.user && this.password) return true
      e.preventDefault()
    },

    cssTipoUsuario(tipo) {
      // muda as cores do input e da mensagem caso a matrícula esteja incorreta
      // -- CSS erro --
      var campoMensagem = document.getElementById('mensagem')
      var inputUser = document.getElementById('inputUser')

      if (tipo != 'Matrícula incorreta!') {
        campoMensagem.className = 'feedback'
        //inputUser.className = "certo-input";
        inputUser.classList.remove('erro-input')
        campoMensagem.classList.remove('incorreto')
      } else {
        campoMensagem.className = 'feedback incorreto'
        inputUser.className = 'erro-input'
      }
    },

    tipoUsuario(x) {
      //-- Mensagens --
      // ---- Mensagem matricula Campus ----
      if (matriculaCampus(x)) {
        return (this.tipo = 'Matrícula do Câmpus Digital')
      }

      // ---- Mensagem matricula Sigaa ----
      else if (matriculaSigaa(x)) {
        return (this.tipo = 'Matrícula do SIGAA')
      }

      // ---- Mensagem CPF ----
      else if (testaCPF(x) && x.length == 11) {
        return (this.tipo = 'Matrícula CPF') // sem pontuação
      } else if (x.split('.').length == 3) {
        if (
          testaCPF(
            x
              .split('.')
              .join('')
              .split('-')
              .join(''),
          )
        ) {
          return (this.tipo = 'Matrícula CPF com pontuação') // com pontuação
        }
      }

      // ---- Mensagem matricula Email ----
      else if (testaEmail(x)) {
        return (this.tipo = 'Matrícula email')
      } else if (x.length < 4) {
        return (this.tipo = '')
      } else {
        return (this.tipo = 'Matrícula incorreta!')
      }

      // -- Testes --
      // ---- Testa matricula Campus ----
      function matriculaCampus(x) {
        return (
          !isNaN(x) &
          ((x.substr(0, 1) == '0') & (x.length == 7) || (x.length == 5) | (x.length == 6))
        )
      }

      // ---- Testa matricula Sigaa ----
      function matriculaSigaa(x) {
        return (x.substr(0, 2) == '20') & (x.length == 10)
      }

      // ---- Testa CPF ----
      function testaCPF(strCPF) {
        var Soma
        var Resto
        Soma = 0

        if (strCPF.match(/^(\d)\1{10}/)) return false //verificação de numeros repetidos

        for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
        Resto = (Soma * 10) % 11

        if (Resto == 10 || Resto == 11) Resto = 0
        if (Resto != parseInt(strCPF.substring(9, 10))) return false

        Soma = 0
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
        Resto = (Soma * 10) % 11

        if (Resto == 10 || Resto == 11) Resto = 0
        if (Resto != parseInt(strCPF.substring(10, 11))) return false
        return true
      }

      // ---- Testa Email ----
      function testaEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
      }
    },
  },
}
</script>

<style scoped>
main {
  margin-top: 40px;
  justify-content: baseline;
  align-items: center;
}

.banner-ifrs {
  width: 300px;
}

.form-login {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0rem 0 1rem rgb(194, 193, 193);
  margin-top: 30px;
  text-align: center;
  justify-items: center;
  height: auto;
  width: 300px;
  padding-bottom: 15px;
  padding-top: 15px;
}

.title-login {
  color: rgb(37, 37, 37);
}

button {
  width: 70%;
}

input {
  width: 70%;
  margin: 0;
}

.is-invalid {
  border: red;
}

.invalid-feedback {
  color: red;
}

.feedback {
  color: rgb(11, 9, 160);
  padding-top: 5px;
  margin: 0;
  text-align: center;
  margin: auto;
  width: 70%;
  font-size: 15px;
}

.incorreto {
  color: red;
}

.certo-input {
  border-color: #2ff150;
  box-shadow: 0 0 2px #2ff150;
}

.erro-input {
  border-color: #ee5b36;
  box-shadow: 0 0 2px #ee5b36;
}

#error {
  color: red;
}

label {
  padding: 0px 0px 0px 0;
  display: block;
  text-align: left;
  margin: 0;
  margin-left: 15%;
}

.usuario {
  margin-bottom: 10px;
  margin-top: 20px;
}
</style>

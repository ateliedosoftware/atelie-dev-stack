<template>
  <main>
    <div>
      <div>
        <img
          class="banner-ifrs"
          src="https://moodle.sertao.ifrs.edu.br/pluginfile.php/1/theme_moove/logo/1631296024/Instituto_Federal_Sertao_Refeito13.png"
        />
      </div>
      <form class="form-login">
        <h4 class="title-login">Login</h4>
        <div class="usuario">
          <input
            id="inputUser"
            type="text"
            placeholder="Usuário"
            v-model="user"
          />
          <p id="mensagem" class="feedback">{{ tipo }}</p>
        </div>

        <input type="password" placeholder="Senha" v-model="password" />
        <!-- :class="{'is-invalid' : validatonStatus($v.password)}"-->
        <!--<div v-if="!$v.password.rerquired" class="invalid-feedback">
          Digite a senha!
        </div> -->
        <br />
        <div class="btn-login">
          <button>Entrar</button>
        </div>
      </form>
    </div>
  </main>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      user: null,
      password: null,
      tipo: null,
    };
  },

  watch: {
    user(val) {
      this.tipoUsuario(val);
    },
  },

  methods: {
    tipoUsuario(x) {

      // -- CSS erro --
      var campoMensagem = document.getElementById("mensagem");
      var inputUser = document.getElementById("inputUser");
      
      if (this.tipo != "Matrícula incorreta!") {
        campoMensagem.className = "feedback";
        //inputUser.className = "certo-input";
        inputUser.classList.remove("erro-input");
        campoMensagem.classList.remove("incorreto");
      } 

      //-- Mensagens --
      // ---- Mensagem matricula Campus ----
      if (matriculaCampus(x)) {
        return (this.tipo = "Matrícula do Câmpus Digital");
      }

      // ---- Mensagem matricula Sigaa ----
      else if (matriculaSigaa(x)) {
        return (this.tipo = "Matrícula do SIGAA");
      }

      // ---- Mensagem CPF ----
      else if (TestaCPF(x)) {
        return (this.tipo = "Matrícula CPF"); // sem pontuação
      } else if (x.split(".").length == 3) {
        if (TestaCPF(x.split(".").join("").split("-").join(""))) {
          return (this.tipo = "Matrícula CPF"); // com pontuação
        }
      } else if (x.length > 4) {
        campoMensagem.className = "feedback incorreto";
         inputUser.className = "erro-input";
        return (this.tipo = "Matrícula incorreta!");
      } else {
        return (this.tipo = "");
      }

      // -- Testes --
      // ---- Testa matricula Campus ----
      function matriculaCampus(x) {
        return (
          !isNaN(x) & ((x.substr(0, 1) == "0") & (x.length == 7) ||
          (x.length == 5) | (x.length == 6))
        );
      }

      // ---- Testa matricula Sigaa ----
      function matriculaSigaa(x) {
        return (x.substr(0, 2) == "20") & (x.length == 10);
      }

      // ---- Testa CPF ----
      function TestaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;

        for (var i = 1; i <= 9; i++)
          Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if (Resto == 10 || Resto == 11) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++)
          Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if (Resto == 10 || Resto == 11) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;
        return true;
      }

      /* ---- Testa email ----
      function testaEmail(x){
        
      }*/
    },
  },
};
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

.teste {
  color: red;
}

.teste2 {
  border-color: #2ff150;
  box-shadow: 0 0 2px #2ff150;
}
</style>

<template>
  <main>
    <div>
      <div>
        <img
          class="banner-ifrs"
          src="https://moodle.sertao.ifrs.edu.br/pluginfile.php/1/theme_moove/logo/1631296024/Instituto_Federal_Sertao_Refeito13.png"
        />
      </div>
      <div class="form-login">
        <h4 class="title-login">Login</h4>
        <input type="text" placeholder="Usuário" v-model="user" />
        <br />
        <input type="password" placeholder="Senha" v-model="password" />
        <br />
        <div class="btn-login">
          <button @click="login">Entrar</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  name: "Login",
  data() {
    return {
      form: {
        user: null,
        password: null,
      },
    };
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
  margin-top: 30px;

  text-align: center;
  justify-items: center;
  height: 200px;
  width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0rem 0 1rem rgb(194, 193, 193);
  /*
  transition: 0.4s ease-out;
  position: relative;
  left: 0px; */
}

.title-login {
  padding: 10px;
}

button {
  width: 70%;
}

input {
  width: 70%;
}
</style>

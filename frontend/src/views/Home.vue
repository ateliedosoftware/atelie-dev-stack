<template>
  <main>
    <Navbar />
    <div class="home">
      <h2>Seja bem vindo(a)</h2>
      <p>Faça login para continuar!</p>

      <router-link to="/login"><button>Fazer login</button></router-link>
    </div>
  </main>
</template>

<script>
import Navbar from '../components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
  },
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
</style>

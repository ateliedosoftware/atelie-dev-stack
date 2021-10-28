<template>
  <div class="home">
   <h2>Seja bem vindo(a)</h2>
   <p>Faça login para continuar!</p>

   <router-link to="/login"><button>Fazer login</button></router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
</style>

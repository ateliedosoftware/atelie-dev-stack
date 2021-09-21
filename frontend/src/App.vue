<template>
  <!--<Login /> -->
  <div>
    <div id="nav">
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import "./styles/global.css";
//import Login from "./views/Login.vue";

export default {
  name: "app",
  components: {
    //Login,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "IFRS";
      },
    },
  },
};
</script>

<style>

</style>

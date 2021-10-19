<template>
  <div>
    <!--<div id="nav">
      <div>
        <NavBar />
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
      </div>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import './styles/global.css'
//import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    //NavBar,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'IFRS'
      },
    },
  },
}
</script>

<style></style>

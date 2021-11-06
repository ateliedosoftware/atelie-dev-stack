<template>
  <main>
    <div class="containerNavbar">
      <div class="navbar">
        <div class="navcontent">
          <div class="banner">
            <router-link to="/dashboard" class="routerlink"
              ><img
                src="https://ifrs.edu.br/wp-content/uploads/2017/08/logo_horizontal_simplificado-012.png"
                style="width:15vh"
            /></router-link>
          </div>
          <!--https://ifrs.edu.br/wp-content/uploads/2019/09/horizontal-nova-04.png -->

          <router-link to="/dashboard" class="navbarlink"
            ><img
              class="icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAe0lEQVRIie2UUQrAIAxDw07n/Y+gB5k/ThxY1gQZKj4QP9pSSJsCOxEAJAB358USV3Ir0ShoC5XcyhP0xNy5l5E0jGkbpPL39G/jL5gZBNiDNreIaeDm1xkwukpGY3SVjMYwp9EkXRkYXaWVPsfuswFjNOnYMUaTjt2aZFkdmGlyTRNBAAAAAElFTkSuQmCC"
            />Dashboard</router-link
          >
          <h5 style="margin-top:30px;" class="title-nav">Usuários</h5>
          <router-link to="/cadastro" class="navbarlink"
            ><img
              class="icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACNklEQVRYhe3VT28NURgG8F8lJaESC8pnaAkSWlZVH0BaJBY+QHcNC2ks6dK/unwDGyuEXfkMRSpEooJaktCS3kbba3HOZCY3c2emN9ONeJKTM5l5zvs8Z85535f/KEc/pvESv+KYw3Xs22rx81hCq8P4ibNbKb4RhR5jBLviOIUn8ds6xusW75fu/EoBbypyfmBvnQampTsvw9PIvVangVcx6EgF7mjkztVpYDkG7avA3R25S90Ibevwfm0TMXq6WFNq4GOcj1WIkXAW6jTwKM6XKsS43LamFuzHd+Fspwp4VyPnm5C6tWJcONeWkGqjwqXsw2k8i9/WMFa3eIJzQqXrVIrXIwcO4R7e4bfQM97gDga7ET+DDwXiyVjAgxKja2hgexXhHtzILH6NSQwIfWAPjgol+n2Gt4IZDEl7xjDuohk5z6uYuBnJTUzonClwP3K/CEfQCYexGLmNIvGxjHhZGT4odMuVHPHkr7SbaArHMZAXcAc+xYUTJeKEC9cSLlk78gwQdt/C7byAF6RnXvTbE7yN/OObMDAc38/nBXwYP05WECekWbZhlWULOY0ru9OhOL+oaGCjIq8QWQMH4rxYcW3CSy5UT2bo8C4pSJ/zDOyMxOWKBmbjfLEiP8udLWRVxKCQUk0hxbLIu4RHsKogDbtBklaLOSbaxb9G7kxd4tArlNekeDVwQto1Twr1YlVainvrNECo7Q1p684bf4Sd1y6exaBQ4eaFi7wcn2+p8cz/PfwFcFG+SI46/aEAAAAASUVORK5CYII="
            />Cadastro</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'NavBarDashboard',
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('LogOut')
      this.$router.push('/login')
    },
  },
}
</script>
<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

.containerNavbar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 15%;
}

.navbar {
  position: relative;

  height: 100%;
  background-color: #f9fbfc;
  color: rgb(65, 65, 65);
  float: left;
}

.navcontent {
  position: relative;
  width: 100%;
  height: 100%;
}

.navbarlink {
  margin: 0;
  padding: 0;
  display: block;
}

.icon {
  display: inline-block;
  font-size: inherit;
  height: 1.4em;
  overflow: visible;
  vertical-align: -0.125em;
  margin-right: 5px;
}

.routerlink {
  margin: 0;
}

.banner {
  text-align: center;
  margin-bottom: 30px;
}

@media screen and (max-width: 1000px) {
  .containerNavbar {
    position: sticky;
    width: 100%;
  }

  .navbar {
    width: 100%;
    height: 100px;
    background-color: inherit;
    color: rgb(65, 65, 65);
    display: flex;
    padding: 0;
  }

  .navcontent {
    margin-top: 0px;
    width: 100%;
    height: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: left;
  }

  .title-nav {
    display: none;
  }

  .navbarlink {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>

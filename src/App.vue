<template>
  <AppHeader :gnb="gnb" />
  <router-view />
</template>

<script>
import AppHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style>
html {
  margin: 0; padding: 0;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #222;
}

ul {
  margin: 0; padding: 0;
}

ul li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
}
</style>

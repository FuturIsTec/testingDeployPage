<template>
  <div id="app">
    <router-view :id-to-page="idToPage" :update-id-to-page="updateIdToPage"/>
  </div>
</template>

<script>
import router from "./router";
//import globals from './scripts/globals.js';
export default {
  data() {
    return {
      idToPage: '/HomeView'
    }
  },
  methods: {
    updateIdToPage(value) {
      console.log("id page value:" + value);
      this.idToPage = value;
      this.$router.push(this.idToPage);
    }
  },
  mounted (){
    console.log("id page value:" + this.idToPage);
    this.$router.push(this.idToPage);
  },
  router,
};
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: rgb(36, 35, 35);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

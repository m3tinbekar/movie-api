<template>
  <div id="app">
    <navbar></navbar>

    <router-view />
    
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"


export default {
  components : {
    Navbar
  },
  data() {
    return{
      

    }
  },
}
</script>

<style>
#app {
  font-family: SourceSansPro-Bold,SourceSansPro-Light,Avenir, Helvetica, Arial, sans-serif;
   
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "SourceSansPro-Bold";
  src: local("SourceSansPro-Bold.ttf"),
  url(./fonts/SourceSansPro-Bold.ttf) format("truetype");
  /* font-family: "SourceSansPro-Light";
  src: local("SourceSansPro-Light.ttf"),
  url(./fonts/SourceSansPro-Light.ttf) format("truetype"); */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

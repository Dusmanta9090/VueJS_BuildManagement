<template>
  <div id="app">
    <AppHeader/>
    <Footer/>
    <router-view/>
    <!-- <Home/> -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import Footer from './components/Footer.vue'
// import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    Footer,
    // Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

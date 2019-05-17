<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <GithubLogin />
  </div>
</template>

<script>
import GithubLogin from './components/GithubLogin.vue'

export default {
  name: 'app',
  components: {
    GithubLogin
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

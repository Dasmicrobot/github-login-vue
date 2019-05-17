<template>
  <div class="github-login">
    <p class="github-login-description">To start using this service authenticate using Github</p>
    <button class="github-login-btn" v-on:click="startSequence">Login with Github</button>
  </div>
</template>

<script>
export default {
  name: 'GithubLogin',
  methods: {
    startSequence: function (event) {
      let state
      if (window.crypto != null) {
        state = crypto.getRandomValues(new Uint32Array(1))[0]
      } else {
        state = Math.random()
      }

      window.sessionStorage.setItem('state', state)

      let github = {
        baseUrl: 'https://github.com',
        authorizePath: '/login/oauth/authorize',
        clientId: '207c9ed5142c1d5b74a0',
        scope: 'user:email,read:org',
        allowSignup: 'false',
        state: state
      }
      let authorizationUrl = `${github.baseUrl}${github.authorizePath}?client_id=${github.clientId}&scope=${github.scope}&allow_signup=${github.allowSignup}&state=${github.state}`
      console.log('going to url', authorizationUrl)
      window.location.href = authorizationUrl
    }
  }
}
</script>

<style scoped lang="scss">

</style>

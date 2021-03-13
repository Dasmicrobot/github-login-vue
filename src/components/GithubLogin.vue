<template>
  <div class="github-login">
    <p v-if="!isAuthenticated" class="github-login-description">
      To start using this service authenticate using Github
    </p>
    <button v-if="!isAuthenticated" class="github-login-btn" v-on:click="startSequence">
      Login with Github
    </button>
    <button v-if="isAuthenticated" class="github-logout-btn" v-on:click="logout">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: 'GithubLogin',
  data: () => ({ isAuthenticated: window.sessionStorage.getItem('github_access_token') != null }),
  methods: {
    startSequence() {
      window.location.href = 'https://api.app.gitactivity.com/oauth/github/login';
    },
    logout() {
      this.isAuthenticated = false;
      window.sessionStorage.removeItem('github_access_token');
    },
  },
};
</script>

<style scoped lang="scss">

</style>

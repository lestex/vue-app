<template>
<div class="test">
  <header>
    <router-link :to="{ name: 'home' }" class="logo">Logo</router-link>
    <router-link :to="{ name: 'about' }" class="button">About</router-link>
    <router-link v-if="!isAuthenticated" :to="{ name: 'login' }" class="button">Login</router-link>
    <button v-if="isAuthenticated" @click="logout">Logout</button>
  </header>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['userLogout']),
    logout(){
      this.userLogout()
    }
  }
}
</script>

<style scoped>
</style>
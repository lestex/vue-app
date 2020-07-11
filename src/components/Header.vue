<template>
<div class="test">
  <header>
    <router-link :to="{ name: 'home' }" class="logo">Logo</router-link>
    <router-link :to="{ name: 'about' }" class="button">About</router-link>
    <router-link :to="{ name: 'login' }" class="button">Login</router-link>
    <router-link :to="{ name: 'logout' }" class="button">Logout</router-link>
  </header>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>
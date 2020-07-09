<template>
<div class="test">
  <header>
    <router-link to="/" class="logo">Logo</router-link>
    <router-link to="/" class="button">Home</router-link>
    <router-link to="/about" class="button">About</router-link>
    <router-link to="/login" class="button">Login</router-link>
    <router-link to="/logout" class="button">Logout</router-link>
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
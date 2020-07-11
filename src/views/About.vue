<template>
  <div class="about">
    <p>{{ lorem }}</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      lorem: 'Welcome to about page'
    }
  }
}
</script>
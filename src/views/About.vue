<template>
  <div class="about">
    <p>{{ lorem }}</p>
  </div>
</template>

<script>
import lorem from '@/common/';

export default {
  name: 'Home',
  data() {
    return {
      lorem: lorem.lorem
    }
  }
}
</script>
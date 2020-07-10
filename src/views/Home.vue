<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
          <p>{{ lorem }}</p>
      </div>
      <div class="col-sm-8">
          <p>{{ lorem }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
          <p>{{ lorem }}</p>
      </div> 
      <div class="col-sm-6">
          <p>{{ lorem }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
          <p>{{ lorem }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import lorem from '@/data/';

export default {
  name: 'Home',
  data() {
    return {
      lorem: lorem.lorem
    }
  }
}
</script>

<style></style>
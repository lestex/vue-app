<template>
  <div class="row">
    <div class="col-sm-12 col-md-3">
      <label for="sf1-text" class="doc">Enter search term:</label>
    </div>
    <div class="col-sm-12 col-md">
      <input 
        @change="onChange"
        type="text"
        placeholder="Search"
        v-model.trim="term"
        style="width:85%;"
        class="doc"
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      term: null
    }
  },
  methods: {
    ...mapActions(['getAllRepos']),
    onChange() {
      this.getAllRepos(this.term)
    }
  }
}
</script>

<style></style>

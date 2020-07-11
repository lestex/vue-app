<template>
  <div class="container">
    <p>Total repo countf or your request: {{ reposCount }} </p>
    <ul>
      <li v-for="repo in repos" :key="repo.id">
        <a v-bind:href="repo.html_url">{{ repo.html_url }}</a> - {{ repo.description }} - {{ repo.stargazers_count }}
      </li>
  </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: mapState({
    repos: state => state.home.repos,
    reposCount: state => state.home.reposCount
  }),
  mounted() {
    this.$store.dispatch('getAllRepos')
  }
}
</script>

<style></style>
<template>
  <div class="container">
    <Search />

    <p>Total repo count or your request: {{ reposCount }} </p>

    <TableView v-bind:repos=repos />

  </div>
</template>

<script>
import Search from '@/components/Search'
import TableView from '@/components/TableView'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Search,
    TableView
  },
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
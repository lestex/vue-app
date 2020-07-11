<template>
  <table>
    <thead>
      <tr>
        <th>Link</th>
        <th>Description</th>
        <th>Stars</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="repo in repos" :key="repo.id">
        <td data-label="Link"><a v-bind:href="repo.html_url">{{ repo.html_url }}</a></td>
        <td data-label="Description">{{ repo.description }}</td>
        <td data-label="Stars">{{ repo.stargazers_count }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableView',
  props: ['repos']
}
</script>

<style></style>

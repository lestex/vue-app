<template>
<form>
  <fieldset>
    <legend>Simple form</legend>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <label for="username">Username</label>
        <input type="text" id="Username" placeholder="Username"/>
      </div>
      <div class="col-sm-12 col-md-6">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password"/>
      </div>
    </div>
  </fieldset>
</form>  
</template>

<script>
export default {
    name: 'Form'
}
</script>

<style scoped>

</style>
<template>
<div class="row">
  <div class="col-sm-8 col-md-offset-2">
    <form>
      <fieldset>
        <legend class="doc">Login</legend>
          <div class="row responsive-label">
            <div class="col-sm-12 col-md-3">
              <label for="sf1-text" class="doc">Username</label>
            </div>
            <div class="col-sm-12 col-md">
              <input type="text" placeholder="Username" id="sf1-text" style="width:85%;" class="doc">
            </div>
          </div>
          <div class="row responsive-label">
            <div class="col-sm-12 col-md-3">
              <label for="sf1-pwd" class="doc">Password</label>
            </div>
            <div class="col-sm-12 col-md">
                <input type="password" placeholder="Password" id="sf1-pwd" style="width:85%;" class="doc">
            </div>
          </div>
      </fieldset>
      <button class="primary">Login</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
    name: 'Form'
}
</script>

<style scoped>

</style>
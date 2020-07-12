<template>
<div class="row">
  <p>User: </p>
  <div class="col-sm-8 col-md-offset-2">
    <form @submit.prevent="onSubmit(email, password)">
      <fieldset>
        <legend class="doc">Login</legend>
          <div class="row responsive-label">
            <div class="col-sm-12 col-md-3">
              <label class="doc">Username</label>
            </div>
            <div class="col-sm-12 col-md">
              <input
                type="text"
                placeholder="Username"
                class="doc"
                style="width:85%;"
                v-model="email"
              />
            </div>
          </div>
          <div class="row responsive-label">
            <div class="col-sm-12 col-md-3">
              <label class="doc">Password</label>
            </div>
            <div class="col-sm-12 col-md">
                <input 
                  type="password"
                  placeholder="Password"
                  style="width:85%;"
                  class="doc"
                  v-model="password"
                >
            </div>
          </div>
      </fieldset>
      <button class="primary">Login</button>
    </form>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions(['userLogin']),
    onSubmit(email, password) {
      console.log(email, password)
      this.userLogin(email)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped></style>

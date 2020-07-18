<template>
  <div class="card-body p-0">
    <div class="row">
      <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
      <div class="col-lg-6">
      <div class="p-5">
        <div class="text-center">
        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
        </div>
        <form class="user">
        <div class="form-group">
            <input type="email"
              class="form-control form-control-user" 
              id="exampleInputEmail" 
              aria-describedby="emailHelp" 
              placeholder="Enter Email Address..."
              v-model="email"
            >
        </div>
        <div class="form-group">
            <input type="password"
              class="form-control form-control-user"
              id="exampleInputPassword"
              placeholder="Password"
              v-model="password"
            >
        </div>
        <a @click="onSubmit" class="btn btn-primary btn-user btn-block" type="submit">
            Login
        </a>
        <hr>
        <a href="index.html" class="btn btn-google btn-user btn-block">
            <i class="fab fa-google fa-fw"></i> Login with Google
        </a>
        <a href="index.html" class="btn btn-facebook btn-user btn-block">
            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
        </a>
        </form>
        <hr>
        <div class="text-center">
          <router-link
            class="small"
            :to="{ name: 'forgot-password' }"
          >
          Forgot Password?
          </router-link>
        </div>
          <div class="text-center">
            <router-link
              class="small"
              :to="{ name: 'register' }"
            >
            Create an Account!
            </router-link>
          </div>
      </div>
      </div>
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

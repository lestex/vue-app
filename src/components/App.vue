<template>
  <component v-bind:is="layout">
    <router-view/>
  </component>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
import '@/assets/sb-admin-2.css'

export default {
  name: 'App',
  components: {
    AuthLayout, MainLayout
  },
  computed: {
    layout() {
      console.log((this.$route.meta.layout || 'auth') + '-layout')
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  }
}
</script>

<template>
  <div id="app">
    <Header />
    <Main />
    <Form />
    <Buttons />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Buttons from './components/Buttons'
import Form from './components/Form'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Buttons,
    Form,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

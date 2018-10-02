<template>
  <div id="app">
    <header-app></header-app>
    <content-app></content-app>
    <footer-app></footer-app>
  </div>
</template>

<script>
import HeaderApp from './components/layout/Header'
import ContentApp from './components/layout/Content'
import FooterApp from './components/layout/Footer'

export default {
  name: 'app',
  components: {
    HeaderApp,
    ContentApp,
    FooterApp
  }
}
</script>

<style>


</style>

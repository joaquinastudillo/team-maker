<template>
  <div id="app">
    <header-app></header-app>
    <content-app></content-app>
  </div>
</template>

<script>
import HeaderApp from './components/layout/Header'
import ContentApp from './components/layout/Content'

export default {
  name: 'app',
  components: {
    HeaderApp,
    ContentApp
  }
}
</script>

<style>

html{
   background: url('./assets/background.jpg') no-repeat center center fixed ; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>

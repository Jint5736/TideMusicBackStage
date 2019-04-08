<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import '../static/css/reset.css'

export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
body
  height 100%
  background url(./assets/images/login/bg.jpg) no-repeat
  background-size 100%
#app
  font-family  'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing  antialiased
  -moz-osx-font-smoothing  grayscale
  text-align center
  color  #2c3e50
</style>

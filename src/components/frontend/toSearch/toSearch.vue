<template>
  <div class="toSearch">
  <input type="text" class="search" placeholder="搜索" v-model.trim="title" v-model="myval" @onkeyup="keychange(myval)">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'toSearch',
  data () {
    return {
      title: '',
      search: [],
      myval:''
    }
  },
  methods:{
    keychange(myval) {
    axios.defaults.withCredentials = true
    axios.get(`http://localhost:3000/search?keywords=${myval}`)
      .then(function (response) {
        console.log(response.data.result.songs)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  created () {
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .toSearch
    width 200px
    height 50px
    position relative
    input
        width 200px
        height 20px
        font-size 12px
</style>

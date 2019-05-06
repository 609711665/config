<template>
  <div id="app">
    

    <navbar :show-back="showBack" :title="navTitle"/>

    <router-view/>

  </div>
</template>

<script>

import tabbar from '@/components/tabbar'
import navbar from '@/components/navbar'


export default {
  name: 'App',
  data(){
    return {
      navTitle:"豆瓣",
      showBack:false
    }
  },

  components:{
    tabbar:tabbar,
    navbar:navbar
  }
}
</script>

<style>
#app {
  
}

body{
    margin: 0;
}

a{
    color: black;
    text-decoration: none;
}

ul,li{
    list-style: none;
    padding: 0;
}

</style>

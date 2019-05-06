<template>
  <div class="hello tabbar">
    <router-link to="/book">图书</router-link>
    <router-link to="/music">音乐</router-link>
    <router-link to="/film">电影</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* tabbar */
.tabbar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    background-color: black;
    

    font-size: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.tabbar a{
    color:#666;
}

.router-link-active{
  color: white !important;
}
</style>

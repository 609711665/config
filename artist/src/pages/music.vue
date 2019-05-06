<template>
  <div class="hello">
    music

    <tabbar />
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'


export default {
  name: 'music',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  mounted(){
    //this.$parent 是当前界面的父组件, 就是App.vue
    //console.log(this.$parent)
    this.$parent.navTitle = "音乐"
  },

  components:{
    tabbar:tabbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

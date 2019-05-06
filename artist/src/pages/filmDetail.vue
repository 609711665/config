<template>
  <div class="hello">
    filmDetail
  </div>
</template>

<script>
export default {
  name: 'filmDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  mounted(){
    //this.$parent 是当前界面的父组件, 就是App.vue
    //console.log(this.$parent)
    this.$parent.navTitle = "电影详情"
    this.$parent.showBack = true
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

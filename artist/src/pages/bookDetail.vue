<template>
  <div class="hello">
    
    <div class="info">
      <img :src="item.image?netapi.imagePrefix+item.image:''" alt="">
      <div>{{item.name}}</div>
      <div>{{item.author}}</div>
      <div>{{item.publisher}}</div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'bookDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      item:{}
    }
  },


  created(){
    this.downloadData()
  },
  methods:{
    downloadData(){

      var id = this.$route.params.id

      var url = this.netapi.bookDetailUrl+"&id="+id

      //Vue.axios
      //this.axios
      //this.$http

      this.axios.get(url).then(res=>{
        console.log(res.data)

        this.item =  res.data.result
      })

    }
  },
  mounted(){
    //this.$parent 是当前界面的父组件, 就是App.vue
    //console.log(this.$parent)
    this.$parent.navTitle = "图书详情"
    this.$parent.showBack = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

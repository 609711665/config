<template>
  <div class="hello">
    

    <div class="list">

      <div class="item" v-for="(item,index) in list" :key="index">

        <router-link :to="'/bookDetail/'+item.id">
          <div><img :src="netapi.imagePrefix+item.image" alt=""></div>
          <div>{{item.name}}</div>
        </router-link>

      </div>

    </div>


    <tabbar />
  </div>
</template>

<script>

import tabbar from '@/components/tabbar'


export default {
  name: 'book',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

      list:[]
    }
  },

  created(){
    console.log(this.netapi.bookListUrl)

    this.downloadData()
  },

  methods:{
    downloadData(){

      var url = this.netapi.bookListUrl

      //Vue.axios
      //this.axios
      //this.$http

      this.axios.get(url).then(res=>{
        console.log(res.data)

        this.list =  res.data.result
      })

    }
  },

  mounted(){
    //this.$parent 是当前界面的父组件, 就是App.vue
    //console.log(this.$parent)
    this.$parent.navTitle = "图书"
    this.$parent.showBack = false
  },

  components:{
    tabbar:tabbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

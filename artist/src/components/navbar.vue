<template>
  <div class="hello navbar">
    <div>
      <span v-if="showBack" @click="dealBack">返回</span>
    </div>
    <div>{{title}}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['title','showBack'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    dealBack(){
      this.$router.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* navbar */
.navbar{
    width: 100%;
    height: 44px;

    background-color: black;
    color: white;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: 44px;

    display: flex;
    justify-content: space-between;
}
.navbar>div:nth-of-type(1){
    flex-basis: 60px;
}
.navbar>div:nth-of-type(1) a{
    color: white;
    font-size: 14px;
}
.navbar>div:nth-of-type(2){
    flex-grow: 1;
}
.navbar>div:nth-of-type(3){
    flex-basis: 60px;
}
</style>

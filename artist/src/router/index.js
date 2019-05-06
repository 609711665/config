import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//导入文件
import book from '@/pages/book'
import music from '@/pages/music'
import film from '@/pages/film'
import bookDetail from '@/pages/bookDetail'
import musicDetail from '@/pages/musicDetail'
import filmDetail from '@/pages/filmDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'book',
      component: book
    },{
      path: '/book',
      name: 'book',
      component: book
    },{
      path: '/music',
      name: 'music',
      component: music
    },{
      path: '/film',
      name: 'film',
      component: film
    },{
      path: '/bookDetail/:id',
      name: 'bookDetail',
      component: bookDetail
    },{
      path: '/musicDetail/:id',
      name: 'musicDetail',
      component: musicDetail
    },{
      path: '/filmDetail/:id',
      name: 'filmDetail',
      component: filmDetail
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 元素如何缩小到指定的位置
    {
      path: '/demo1',
      name: 'demo1',
      component: () => import('@/views/demo1')
    },
    // 实现购物车功能
    {
      path: '/demo2',
      name: 'demo2',
      component: () => import('@/views/demo2')
    },
    // 比较节流和防抖的区别
    {
      path: '/demo3',
      name: 'demo3',
      component: () => import('@/views/demo3')
    },
    // 验证返回页面，定位到原来的位置
    {
      path: '/demo4/one',
      name: 'one',
      component: () => import('@/views/demo4/one')
    },
    {
      path: '/demo4/two',
      name: 'two',
      component: () => import('@/views/demo4/two')
    },
    // 实现左右固定宽度，中间长度自适应省略
    {
      path: '/demo5',
      name: 'demo5',
      component: () => import('@/views/demo5')
    },
    // 网格布局
    {
      path: '/demo6',
      name: 'demo6',
      component: () => import('@/views/demo6')
    },
    // 实现钟表的转动
    {
      path: '/demo7',
      name: 'demo7',
      component: () => import('@/views/demo7')
    },
    // 全屏的API
    {
      path: '/demo8',
      name: 'demo8',
      component: () => import('@/views/demo8')
    },
    // 检测摄像头和麦克风
    {
      path: '/demo9',
      name: 'demo9',
      component: () => import('@/views/demo9')
    },
    // 动画元素缩小到屏幕的指定位置
    {
      path: '/demo9',
      name: 'demo9',
      component: () => import('@/views/demo9')
    },
    // 头部导航的吸顶效果
    {
      path: '/demo11',
      name: 'demo11',
      component: () => import('@/views/demo11')
    },
    // 用border-shadow来画一个机器猫
    {
      path: '/demo12',
      name: 'demo12',
      component: () => import('@/views/demo12')
    }
  ]
})

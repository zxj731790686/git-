<template>
  <div class="content">
    <div class="scroll"
         v-for="item in 60"
         :key="item">
      哈哈哈{{item}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.debounce(this.handle, 1000))
    window.addEventListener('scroll', this.throttle(this.handle, 1000))
  },
  methods: {
    // 防抖函数：不管你执行滚动事件多少次，只会在你停止delay时间内没有触发滚动事件，才会输出
    debounce (fn, delay) {
      let timer = null
      return () => {
        if (timer !== null) { clearTimeout(timer) }
        timer = setTimeout(fn, delay)
      }
    },
    // 节流函数： 不管你触发滚动事件多少次，隔一段时间就会输出一次
    throttle (fn, delay) {
      let flag = true
      return () => {
        if (!flag) {
          return false
        }
        flag = false
        setTimeout(() => {
          fn()
          flag = true
        }, delay)
      }
    },
    handle () {
      console.log(Math.random())
    }
  }
}
</script>
<style scoped>
/* .content {
  position: absolute;
  overflow: scroll;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
} */
/* .scroll {
  width: 200px;
  height: 2000px;
  background: red;
} */
</style>

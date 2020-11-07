<template>
  <div>
    <video src="https://www.runoob.com/try/demo_source/movie.ogg"
           width="300px"
           height="300px"
           controls
           id="video"></video>
    <p @click="clickEvent()">全屏</p>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    // 元素全屏的方法
    setFullScreen (element) {
      if (element.requestFullScreen) {
        element.requestFullScreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
      }
    },
    clickEvent () {
      // this.setFullScreen(document.documentElement) // 整个页面全屏
      this.setFullScreen(document.getElementById('video')) // 指定元素全屏
    }
  }
}
</script>
<style scoped>
p {
  width: 100px;
  height: 30px;
  background-color: red;
  line-height: 30px;
  text-align: center;
  margin: 100px auto;
  cursor: pointer;
}
</style>

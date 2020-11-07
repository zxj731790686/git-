<template>
  <div class="main">
    <div class="openButton"
         @click="openVideo"
         ref="openVideo">打开</div>
    <div class="closeButton"
         @click="closeVideo">关闭</div>
    <div :class="['cover', {'coverBg': isShowCover}]">
      <div v-show="isShowVideo"
           v-cloak
           ref="video"
           :class="['video', {'scaleVideo': isScaleVideo}]"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isScaleVideo: false,
      isShowVideo: true,
      isShowCover: false
    }
  },
  methods: {
    openVideo () {
      this.isShowVideo = true
      this.isShowCover = false
      this.isScaleVideo = false
      this.$refs.video.style.top = '50%'
      this.$refs.video.style.left = '50%'
    },
    closeVideo () {
      // let top = this.$refs.openVideo.getBoundingClientRect().top
      let left = this.$refs.openVideo.getBoundingClientRect().left
      let height = this.$refs.openVideo.offsetHeight / 2
      let width = this.$refs.openVideo.offsetWidth / 2
      this.$refs.video.style.top = -height + 'px'
      this.$refs.video.style.left = left + width + 'px'
      this.isShowCover = true
      this.isShowVideo = true
      this.isScaleVideo = true
      setTimeout(() => {
        this.isShowVideo = false
        this.isScaleVideo = false
      }, 1900)
    }
  }
}
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
.openButton {
  display: inline-block;
  cursor: pointer;
  width: 100px;
  height: 20px;
  background-color: red;
  margin-top: 20px;
  margin-left: 50px;
}
.closeButton {
  display: inline-block;
  cursor: pointer;
  width: 100px;
  height: 20px;
  background-color: red;
  margin-top: 20px;
  margin-left: 100px;
}
.cover {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
}
.coverBg {
  background: #fff;
}
.video {
  width: 100px;
  height: 100px;
  background: yellow;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.scaleVideo {
  animation: scaleVideo 2s;
  /* transform-origin: left top; */
}
@keyframes scaleVideo {
  0% {
    left: 50%;
    top: 50%;
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>

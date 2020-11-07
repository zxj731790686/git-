<template>
  <div class="main">
    <div ref="header"
         v-if="!isFixed"
         class="header">
      11111111111111
    </div>
    <div v-else
         :class="['small',{'isFixed': isFixed}]"></div>
    <div :class="['center',{'isCenter': isFixed}]"
         ref="
         center">222222222222222222</div>
    <div class="footer">33333333333333333</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isFixed: false,
      offsetTop: null,
      offsetHeight: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
    this.$nextTick(() => {
      this.offsetTop = this.$refs.header.offsetTop
      this.offsetHeight = this.$refs.header.offsetHeight
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight () {
      var scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log('scrollTop' + scrollTop + 'offsetHeight' + this.offsetHeight + 'offsetTop' + this.offsetTop)
      if (scrollTop > this.offsetHeight - this.offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
.mian {
  width: 100%;
  height: 100%;
  z-index: 1;
}
.header {
  width: 100%;
  height: 100px;
  background: red;
}
.isFixed {
  position: fixed;
  top: 0;
  z-index: 999;
}
.center {
  width: 100%;
  height: 100px;
  background-color: green;
}
.small {
  width: 100%;
  background: black;
  height: 50px;
}
.isCenter {
  margin-top: 150px;
}
.footer {
  width: 100%;
  height: 1000px;
  background-color: yellow;
}
</style>

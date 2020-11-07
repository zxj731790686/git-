<template>
  <div>
    <p @click="getElectricity">点击查看电量</p>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    async getElectricity () {
      let video = document.getElementById('video')
      let stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 100,
          height: 200
        },
        audio: false
      })
      video.srcObject = stream
      video.play()
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="cover">
      <div class="video">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.main {
  .cover {
    width: 100%;
    height: 100%;
    background-color: rgba($color: 0, 0, 0, 0.2);
    position: relative;
    .video {
      width: 200px;
      height: 200px;
      background-color: red;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

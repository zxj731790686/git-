<template>
  <div>
    <span class="left"></span>
    <span class="center">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
    <span class="right"></span>
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
<style scoped>
div {
  display: flex;
}
.left {
  display: inline-block;
  width: 10px;
  height: 20px;
  background-color: red;
  vertical-align: middle;
}
.center {
  flex: 1;
  vertical-align: middle;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.right {
  vertical-align: middle;
  display: inline-block;
  height: 20px;
  width: 20px;
  background-color: blue;
}
</style>

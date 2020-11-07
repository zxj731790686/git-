<template>
  <div class="container">
    <div class="header">header</div>
    <div class="main">
      <div class="left">left</div>
      <div class="center">main</div>
      <div class="right">right</div>
    </div>
    <div class="footer">footer</div>
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
* {
  padding: 0;
  margin: 0;
}
html,
body,
.container {
  height: 100%;
}
.container {
  display: grid;
  grid-template-rows: 100px auto 100px;
}
.main {
  display: grid;
  grid-template-columns: 200px minmax(150px, 1fr) 200px;
}
.header {
  background-color: pink;
}
.footer {
  background-color: blue;
}
.left {
  background-color: yellow;
}
.right {
  background-color: violet;
}
.center {
  background-color: red;
}
</style>

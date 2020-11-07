<template>
  <div class="box">
    <ul>
      <li v-for="item in 60"
          ref="li"
          :key="item"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    for (var i = 0; i < this.$refs.li.length; i++) {
      this.$refs.li[i].style.transform = 'rotate(' + i * 6 + 'deg)'
    }
  },
  methods: {

  }
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.box {
  width: 400px;
  height: 400px;
  border: 1px solid red;
  border-radius: 50%;
  margin: 100px auto;
}
ul {
  position: relative;
  list-style: none;
}
li {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  left: 198px;
  top: 0px;
  transform-origin: center 200px;
}
</style>

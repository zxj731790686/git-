<template>
  <div>
    <div class="demo"></div>
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
<style>
.demo {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 300px auto;
  background-color: #c63d01;
  box-shadow: 0px 0px 0 1px #000, -20px -26px 0 -10px #333333,
    -34px -40px 0 15px #fff, -34px -40px 0 16px, 20px -26px 0 -10px #333333,
    34px -40px 0 15px #fff, 34px -40px 0 16px, 0px 55px 0 75px #fff,
    0px 55px 0 76px #000, 0 22px 0 120px #08bdeb, 0 22px 0 121px #000;
}
/*叮当猫的鼻子*/
.demo::before {
  content: "";
  position: absolute;
  bottom: -81px;
  left: 17px;
  height: 80px;
  width: 2px;
  background-color: #000;
}
/*叮当猫的嘴巴*/
.demo::after {
  content: "";
  position: absolute;
  bottom: -83px;
  left: -44px;
  width: 125px;
  height: 70px;
  border-bottom-right-radius: 28px;
  border-bottom: solid 2px black;
  border-bottom-left-radius: 28px;
}
</style>

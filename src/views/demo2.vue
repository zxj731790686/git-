<template>
  <div class="main">
    <template v-if="projects.length">
      <table class="table"
             border="1"
             cellpadding="0"
             cellspacing="0">
        <tr class="header">
          <th></th>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>购买数量</th>
          <th>操作</th>
          <th @click="checkAll">全选 <input type="checkbox"
                   :checked="allCheck"></th>
        </tr>
        <tr v-for="(item, index)  in projects"
            :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td><span style="cursor: pointer"
                  @click="reduce(index)">-</span> {{item.price}} <span style="cursor: pointer"
                  @click="add(index)">+</span></td>
          <td>{{item.number}}</td>
          <td style="cursor: pointer"
              @click="move(index)">移除</td>
          <td><input type="checkbox"
                   @click="checkItem(index)"
                   class="checkbox"
                   :checked="item.check"></td>
        </tr>
      </table>
      <p>总价：{{calculationTotal}}</p>
    </template>
    <div v-else>
      购物车为空
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      projects: [
        { name: '口香糖', price: 10, number: 2, check: false },
        { name: '辣条', price: 5, number: 3, check: false },
        { name: '薯片', price: 4, number: 1, check: false },
        { name: '火腿肠', price: 20, number: 5, check: false },
        { name: '苹果', price: 7, number: 2, check: false },
        { name: '鸡腿', price: 13, number: 5, check: false }
      ]
    }
  },
  computed: {
    // 计算总价
    calculationTotal () {
      var total = 0
      for (var i = 0; i < this.projects.length; i++) {
        if (this.projects[i].check) {
          total += this.projects[i].price * this.projects[i].number
        }
      }
      return total
    },
    // 全选按钮
    allCheck: {
      get: function () {
        var checkNum = 0
        for (var i = 0; i < this.projects.length; i++) {
          if (this.projects[i].check) {
            checkNum += 1
          }
        }
        if (checkNum !== this.projects.length) {
          return false
        } else {
          return true
        }
      },
      set: function (val) {
        for (var i = 0; i < this.projects.length; i++) {
          this.projects[i].check = val
        }
      }
    }
  },
  methods: {
    reduce (index) {
      if (this.projects[index].number <= 0) return
      this.projects[index].number--
    },
    add (index) {
      this.projects[index].number++
    },
    move (index) {
      this.projects.splice(index, 1)
    },
    // 全选按钮
    checkAll () {
      this.allCheck = !this.allCheck
    },
    // 单选按钮
    checkItem (index) {
      this.projects[index].check = !this.projects[index].check
    }
  }
}
</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.main {
  margin: 100px auto;
  width: 600px;
}
.table {
  width: 100%;
  text-align: center;
}
.header {
  height: 30px;
  background: #999;
}
th,
td {
  width: 100px;
}
</style>

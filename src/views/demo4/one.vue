<template>
  <div ref="box">
    <p @click="enterTwo"
       v-for="item in dataList"
       :key="item">{{item}}</p>
  </div>
</template>
<script>
let listData = [
  {
    'name': 'a'
  },
  {
    'name': 'b'
  },
  {
    'name': 'c'
  },
  {
    'name': 'd'
  },
  {
    'name': 'e'
  },
  {
    'name': 'f'
  },
  {
    'name': 'g'
  },
  {
    'name': 'h'
  },
  {
    'name': 'i'
  },
  {
    'name': 'j'
  },
  {
    'name': 'k'
  },
  {
    'name': 'l'
  },
  {
    'name': 'm'
  },
  {
    'name': 'n'
  },
  {
    'name': 'o'
  },
  {
    'name': 'p'
  },
  {
    'name': 'q'
  },
  {
    'name': 'r'
  },
  {
    'name': 's'
  },
  {
    'name': 't'
  },
  {
    'name': 'u'
  },
  {
    'name': 'v'
  },
  {
    'name': 'w'
  },
  {
    'name': 'x'
  },
  {
    'name': 'y'
  },
  {
    'name': 'z'
  }
]
export default {
  data () {
    return {
      dataList: null,
      scrollTop: 0
    }
  },
  created () {
    // 异步获取数据
    this.mockAPI().then((data) => {
      this.dataList = data.map((item) => {
        return item.name
      })
    })
    this.scrollTop = localStorage.getItem('scrollTop')
    // if (this.scrollTop) {
    debugger
    window.scrollTop = 500 + 'px'
    // }
  },
  mounted () {
  },
  methods: {
    mockAPI (url) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(listData)
        }, 300)
      })
    },
    enterTwo (e) {
      this.$router.push({ name: 'two' })
      localStorage.setItem('scrollTop', e.clientY)
    }
  }
}
</script>

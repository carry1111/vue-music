<template>
  <div class="home">
    <div class="list">
      <div class="item"
           v-for="(item, index) in navlist"
           :key="index">
        <div class="left"><i class="iconfont"
             :class="item.iconClass"></i></div>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      navlist: [
        {
          'iconClass': 'iconyinyue',
          'name': '本地音乐',
        },
        {
          'iconClass': 'iconzuijinbofang',
          'name': '最近播放',
        },
        {
          'iconClass': 'icondibar-xiazai',
          'name': '下载管理',
        },
        {
          'iconClass': 'icondiantai',
          'name': '我的电台',
        },
        {
          'iconClass': 'iconshoucang',
          'name': '我的收藏',
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {

    })
  },
  methods: {},
  filters: {},
  computed: {
    ...mapState([])
  }
}
</script>

<style lang="scss" type="text/scss">
@import "../../assets/css/base";
.home {
  margin-top: pr(53);
}
.item {
  display: flex;
  &:not(:last-child) {
    .name {
      border-bottom: pr(0.5) solid #f0f0f0;
    }
  }
}
.left {
  width: pr(40);
}
.iconfont {
  font-size: pr(20) !important;
  display: inline-block;
  width: pr(40);
  padding: pr(14) pr(10);
}
.name {
  flex: 1;
  padding: pr(14) 0;
  display: flex;
  align-items: center;
}
.bg {
  height: pr(6);
  background-color: #f0f0f0;
}
</style>

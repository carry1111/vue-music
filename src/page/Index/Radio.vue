<template>
  <div>
    <ul class="list">
      <li class="item"
          v-for="(item, index) in popularRadioList"
          :key="index"
          @click="toSongListDetail(item.id, item)">
        <div>
          <img :src="item.picUrl"
               alt="">
        </div>
        <p class="name">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import api from '@/api/main/index'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      popularRadioList: [],
    }
  },
  created () {
    this.getPopularRadio()
  },
  mounted () {
    this.$nextTick(() => {

    })
  },
  methods: {
    getPopularRadio () {
      api.getPopularRadio({ limit: 20 }).then(res => {
        console.log(res);
        this.popularRadioList = res.data.djRadios;
      })
    }
  },
  filters: {},
  computed: {
    ...mapState([])
  }
}
</script>

<style lang="scss" type="text/scss">
@import "../../assets/css/base";
.list {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 32%;
  margin-right: 1%;
  margin-bottom: pr(12);
}
.name {
  padding-left: pr(2);
  font-size: pr(12);
}
</style>

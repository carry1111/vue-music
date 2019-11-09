<template>
  <div>
    <ul class="list">
      <li class="item"
          v-for="(item, index) in songList"
          :key="index"
          @click="toSongListDetail(item.id, item)">
        <div><img :src="item.coverImgUrl"
               alt=""></div>
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
      songList: [],
      limitNum: 18,
    }
  },
  methods: {
    axiosSongList () {
      api.getSongList({ limit: this.limitNum, order: 'new' }).then(res => {
        this.songList = this.songList.concat(res.data.playlists);
        console.log(res);
      })
    },
    //点击获取歌单详情
    toSongListDetail (id, obj) {
      this.$router.push({ path: '/playlistdetail/' + id })
      this.$store.dispatch('curPlaylistDetail', obj)
    }
  },
  filters: {

  },
  computed: {
    ...mapState([

    ])
  },
  created () {
    this.axiosSongList()
  },
  mounted () {
    this.$nextTick(() => {

    })
  },
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

import ajax from "./../index";
export default {
  getRecommendList() {
    return ajax.get("/personalized");
  },
  getBanner() {
    return ajax.get("/banner?type=1");
  },
  // 获取歌单列表
  getSongList(params) {
    return ajax.get("/top/playlist", { params });
  },
  // 获取推荐电台
  getRadioList() {
    return ajax.get("/personalized/djprogram");
  },
  // 获取热门电台
  getPopularRadio(params) {
    return ajax.get("/dj/hot", { params });
  }
};

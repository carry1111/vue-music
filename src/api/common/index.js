import ajax from './../index'
export default {
    getRecommendList() {
        return ajax.get('/personalized')
    },
    getBanner() {
        return ajax.get('/banner?type=1')
    },
    getSongList(params) {
        return ajax.get('/top/playlist', {params})
    }
}
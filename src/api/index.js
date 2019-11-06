import axios from 'axios'
const ajax = axios.create({
    baseURL: 'http://neteasecloudmusicapi.zhaoboy.com/',
    timeout: 3000,
})
export default ajax;
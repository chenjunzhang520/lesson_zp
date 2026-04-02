import axios from 'axios';
// 接口地址都以/api开始
axios.defaults.baseURL = 'http://localhost:5173/api'
// axios.defaults.baseURL = 'http://douyin.com:5173/api'

export default axios
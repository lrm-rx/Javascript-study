import axios from 'axios'

export const getData = (callBack) => {
  axios.get('http://123.207.32.32:9001/lyric?id=167876').then(res=>{
    callBack(res.data)
  })
}

export const getData1 = () => {
  return axios.get('http://123.207.32.32:9001/lyric?id=167876')
}

export const getData2 = () => {
  return axios.get('http://123.207.32.32:9001/lyric?id=167876')
}

export const getData3 = () => {
  return axios.get('http://123.207.32.32:9001/lyric?id=167876')
}
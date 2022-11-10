import axios from 'axios'

export const getData = (callBack) => {
  axios.get('xxx').then(res=>{
    callBack(res.data)
  })
}

export const getData1 = () => {
  return axios.get('xxx')
}

export const getData2 = () => {
  return axios.get('xxx')
}

export const getData3 = () => {
  return axios.get('xxx')
}
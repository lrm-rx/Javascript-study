const https = require('https')

https.get('https://portal-portm.meituan.com/horn/v1/modules/lx-web-config/prod?_lxsdk_rnd=1846c2c3f070', (res) => {
  let str = ''
  res.on('data', (chunk) => {
    str += chunk
  })
  res.on('end',()=>{
    console.log(str);
  })
})
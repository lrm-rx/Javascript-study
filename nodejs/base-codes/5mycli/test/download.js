const download = require('download-git-repo')
// 第二个参数为下载保存的位置
download('direct:https://gitee.com/lrm-cn/egg-template.git','./xxx',{clone:true},(err)=>{
  console.log(err);
})
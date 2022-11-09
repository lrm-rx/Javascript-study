const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

const clientFn = async (c)=>{
  await client.connect()
  const db = client.db('test')
  return db.collection(c)
}

const main = async ()=>{
  let teamUser = await clientFn('teamuser');
  // 查找
  // let users = await teamUser.find()
  // console.log('users:',await users.toArray());
  // 添加(单条)
  // let d = await teamUser.insertOne({uname:'Theshy', age: 23})
  // 添加(批量)
  // let d = await teamUser.insertMany([
  //   {uname: 'gala', age: 20},
  //   {uname: 'viper', age: 21},
  //   {uname: 'tian', age: 22},
  //   {uname: 'lwx', age: 21}
  // ])
  // 查询
  // let d = await teamUser.findOne({age: {$gte: 22}})
  // 修改
  // let d = await teamUser.updateOne({age:{$gt: 25}},{$set: {uname: 'lrm'}})
  // 删除
  let d = await teamUser.deleteOne({age:{$gt: 25}},{$set: {uname: 'lrm'}})
  console.log('aaaa',d); 
}
main().finally(()=> client.close())
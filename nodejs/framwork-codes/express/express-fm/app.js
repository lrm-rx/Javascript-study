const express = require('express')
const app = express()
const db = require('./db')

// 传输数据的接收方式
// app.use(express.urlencoded())
app.use(express.json()) // json格式

// 获取用户
app.get('/', async(req,res)=>{
  try{
    let jsonObj = await db.getDb()
    res.send(jsonObj.users)
  }catch(error) {
    res.status(500).json({error})
  }
  
})

// 修改用户
app.post('/adduser', async (req, res)=>{
  // console.log(req.headers)
  // console.log(req.body)
  let bodyData = req.body
  if(!bodyData) {
    res.status(403).json({
      error: '缺少用户信息!'
    })
  }
  let jsonObj = await db.getDb()
  bodyData.id = jsonObj.users[jsonObj.users.length - 1].id + 1;
  // console.log(bodyData)
  jsonObj.users.push(bodyData)
  
  try{
    let w = await db.saveDb(jsonObj)
    if(!w){
      res.status(200).json({
        msg: '添加成功!'
      })
    }
  }catch(error) {
    res.status(500).json({
      error
    })
  }
})

// 修改用户
app.put('/:id',async(req, res)=>{
  // console.log(req.params.id)
  try {
    let userInfo = await db.getDb()
    let userId = Number.parseInt(req.params.id)
    let user = userInfo.users.find(item=>item.id === userId)
    if(!user){
      res.status(403).send({
        error: '用户不在存'
      })
    }
    // res.send(user)
    const body = req.body
    // 有修改则用修改的数据, 没有修改就使用原有的修改
    user.username = body.username?body.username:user.username
    user.age = body.age?body.age:user.age
    // 赋值
    userInfo.users[userId - 1] = user
    if(!await db.saveDb(userInfo)){
      res.status(201).send({
        msg: '修改成功'
      })
    }
  } catch (error) {
    res.status(500).send({
      error
    })
  }
})
// 删除用户
app.delete('/:id',async(req, res)=>{
  console.log(req.params.id)
  try {
    let userInfo = await db.getDb()
    let userId = Number.parseInt(req.params.id)
    let user = userInfo.users.find(item=>item.id === userId)
    if(!user){
      res.status(403).send({
        error: '用户不在存'
      })
    }
    userInfo.users = userInfo.users.filter(item=>{
      return item.id !== userId
    })
    if(!await db.saveDb(userInfo)){
      res.status(200).send({
        msg: '删除成功'
      })
    }
  } catch (error) {
    res.status(500).send({
      error
    })
  }
})
app.listen(3000, ()=>{
  console.log('port 3000 is runing!');
})
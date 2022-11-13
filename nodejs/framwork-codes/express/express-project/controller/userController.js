const { User } = require('../model/index')
// const jwt = require('jsonwebtoken')
const { createToken } = require('../util/jwt')
const fs = require('fs')
const { promisify } = require('util')
const rename = promisify(fs.rename)


// 用户注册
const userRegister = async (req, res) => {
  const userModel = new User(req.body)
  const dbBack = await userModel.save()
  let user = dbBack.toJSON()
  delete user.password
  res.status(200).json(user)
}

// 用户登录
const userLogin = async (req, res) => {
  let dbBack = await User.findOne(req.body)
  if (!dbBack) {
    res.status(402).json({ error: "账号或密码不正确!" })
  }
  // 对dbBack进行转义
  dbBack = dbBack.toJSON()
  // 使用uuid generator(vs code插件) ctrl + shift + p
  // dbBack.token = jwt.sign(dbBack,'99266fd4-ad17-48fa-bae3-af22e4e3394b')
  dbBack.token = await createToken(dbBack)
  res.status(200).json(dbBack)
}

// 更新用户信息
const userinfoUpdate = async (req, res) => {
  let uid = req.user.userinfo._id
  // 更新后获取最新数据 {new: true}
  let updateUserData = await User.findByIdAndUpdate(uid, req.body, { new: true })
  res.status(200).json({
    user: updateUserData
  })
}

// 上传用户头像
const userAvatar = async (req, res) => {
  /**
   * file: {
   *  fieldname: 'avatar',
   *  originalname: 'xhh.jpg',
   *  encoding: '7bit',
   *  mimetype: 'image/jpeg',
   *  destination: 'public/images',
   *  filename: '053475106bf3498b29bbf4b87b8ac22e',
   *  path: 'public\\images\\053475106bf3498b29bbf4b87b8ac22e',
   *  size: 25776
   * }
   */
  try {
    let splitArray = req.file.originalname.split('.')
    let imgType = splitArray[splitArray.length - 1]
    // 文件重命名
    let fileNameAndType = req.file.filename + '.' + imgType
    await rename(
      './public/images/' + req.file.filename,
      './public/images/' + fileNameAndType
    )
    // 更新头像(todo) req = req.user.userinfo  在 userinfoUpdate要进行对象合并
    // await userinfoUpdate(req, res)
    res.status(200).json({
      filepath: fileNameAndType
    })
  } catch (error) {
    res.status(500).json({ error })
  }
}

const userList = async (req, res) => {
  console.log(req.method);
  res.send('/user-list')
}

const userInfoDelete = async (req, res) => {
  console.log(req.method);
  res.send('/user-list')
}
module.exports = {
  userRegister,
  userLogin,
  userinfoUpdate,
  userAvatar,
  userList,
  userInfoDelete
}
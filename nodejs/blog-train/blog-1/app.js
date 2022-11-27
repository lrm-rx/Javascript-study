const qs = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const getCookieExpire = require('./src/utils/getCookieExpire')

// session数据
const SESSION_DATA = {}

// 用于处理post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData)
      )
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json')
  // 获取path
  const url = req.url
  req.path = url.split('?')[0]
  // 解析query
  req.query = qs.parse(url.split('?')[1])

  // 解析 cookie
  req.cookie = {}
  const cookieStr = req.headers.cookie || ''
  cookieStr.split(';').forEach(item => {
    if (!item) {
      return
    }
    const arr = item.split('=')
    const key = arr[0].trim()
    const val = arr[1].trim()
    req.cookie[key] = val
  })
  //  解析 session
  let needSetCookie = false
  let userId = req.cookie.userId
  if (userId) {
    if (!SESSION_DATA[userId]) {
      SESSION_DATA[userId] = {}
    }
    req.session = SESSION_DATA[userId]
  }else{
    needSetCookie = true
    userId = `${Date.now()}_${Math.random()}`
    SESSION_DATA[userId] = {}
  }
  req.session = SESSION_DATA[userId]

  // 处理post data
  getPostData(req).then(postData => {
    req.body = postData
    // 处理 blog 路由

    // const blogData = handleBlogRouter(req, res)
    // if (blogData) {
    //   res.end(
    //     JSON.stringify(blogData)
    //   )
    //   return
    // }

    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
      blogResult.then(blogData => {
        if(needSetCookie){
          res.setHeader('Set-Cookie', `userid=${userid}; path=/; httpOnly; expires=${getCookieExpire()}`)
        }
        res.end(
          JSON.stringify(blogData)
        )
      }).catch(error => {
        console.error(error);
      })
      return
    }

    // 处理user路由
    // const userData = handleUserRouter(req, res)
    // if (userData) {
    //   res.end(
    //     JSON.stringify(userData)
    //   )
    //   return
    // }

    const userResult = handleUserRouter(req, res)
    if (userResult) {
      userResult.then(userData => {
        if(needSetCookie){
          res.setHeader('Set-Cookie', `userid=${userid}; path=/; httpOnly; expires=${getCookieExpire()}`)
        }
        res.end(
          JSON.stringify(userData)
        )
      }).catch(error => {
        console.error(error);
      })
      return
    }

    // 返回404
    res.writeHead(404, {
      'Content-type': 'text/plain'
    })
    res.write('404 NOT FOUND\n')
    res.end()
  })

}

module.exports = serverHandle

// process.env.NODE_ENV
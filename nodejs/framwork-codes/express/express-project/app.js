const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const router = require('./router') // 路由

app.use(express.json())
app.use(express.urlencoded())
app.use(cors()) // 解决跨域
app.use(morgan('dev')) // 开发时打印日志
app.use('/api/v1', router)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

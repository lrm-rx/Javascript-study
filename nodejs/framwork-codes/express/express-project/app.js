const express = require('express')
const app = express()
const router = require('./router/index')
const routerVideo = require('./router/video')



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

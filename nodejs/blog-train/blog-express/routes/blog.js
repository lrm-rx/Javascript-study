const express = require('express');
const router = express.Router();
const {
  getList,
  getBlogDetailById,
  createBlog,
  updateBlog,
  deleteBlogById
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')

router.get('/list', function (req, res, next) {
  let { author = '', keyword = '' } = req.query
  if (req.query.isadmin) {
    // 管理员界面
    if (req.session.username == null) {
      // 没有登录
      res.json(new ErrorModel('未登录'))
    }
    // 强制查询自己的博客
    author = req.session.username
  }
  const result = getList(author, keyword)
  return result.then(listData => {
    return res.json(new SuccessModel(listData))
  }).catch(error => {
    console.error(error);
  })
});

router.get('/detail', function (req, res, next) {
  const { id } = req.query
  const result = getBlogDetailById(id)
  return result.then(data => {
    res.json(new SuccessModel(data))
  }).catch(error => {
    console.error(error);
  })
});

router.post('/create', loginCheck, function (req, res, next) {
  try {
    req.body.author = req.session.username
    const result = createBlog(req.body)
    return result.then(data => {
      res.json(new SuccessModel(data))
    }).catch(error => {
      console.error(error);
    })
  } catch (error) {
    console.log('error:', error);
  }
});

router.post('/update', loginCheck, function (req, res, next) {
  const result = updateBlog(req.body)
  return result.then(value => {
    if (value) {
      return res.json(new SuccessModel('更新成功'))
    }
    res.json(new SuccessModel('更新失败'))
  }).catch(error => {
    console.error(error);
  })
});

router.post('/delete', loginCheck, function (req, res, next) {
  const result = deleteBlogById(req.body)
  return result.then(value => {
    if (value) {
      return res.json(new SuccessModel('删除成功'))
    }
    res.json(new ErrorModel('删除失败'))
  }).catch(error => {
    console.error(error);
  })
});

module.exports = router;
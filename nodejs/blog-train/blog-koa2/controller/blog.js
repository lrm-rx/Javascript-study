const xss = require('xss')
const _ = require('lodash')
const { exec, escape } = require('../db/mysql')

const reg = /^["|'](.*)["|']$/g; // 去掉首尾的引号
// 博客列表
const getList = async (author, keyword) => {
  console.log('autho:', author);
  author = xss(author)
  keyword = xss(keyword)
  author = escape(author.replace(reg,"$1"))
  keyword = `%${keyword}%`
  keyword = `${escape(keyword.replace(reg,"$1"))}`
  let sql = `SELECT * FROM blogs WHERE 1=1 `
  if (_.isEmpty(author)) {
    sql += `AND author=${author} `
  }
  if (_.isEmpty(keyword)) {
    sql += `AND title like ${keyword} `
  }
  sql += `ORDER BY createTime DESC;`
  console.log('blogListsql:', sql)
  return await exec(sql)
}

// 博客详情
const getBlogDetailById = async (id) => {
  id = xss(id)
  id = escape(id.replace(reg,"$1"))
  const sql = `SELECT * FROM blogs WHERE id=${id};`
  // return exec(sql).then(rows => {
  //   return rows[0]
  // })
  const rows = await exec(sql)
  return rows[0]
}
// 新建博客
const createBlog = async ({ title, content, author }) => {
  title = xss(title)
  content = xss(content)
  author = xss(author)
  title = escape(title.replace(reg,"$1"))
  content = escape(content.replace(reg,"$1"))
  author = escape(author.replace(reg,"$1"))
  const sql = `
   INSERT INTO blogs (title, content, author) VALUES
   (${title}, ${content}, ${author});
  `
  const inserData = await exec(sql)
  return {
    id: inserData.insertId,
    msg: '新建博客成功'
  }
}

// 更新博客
const updateBlog = async ({ id, title, content }) => {
  id = xss(id)
  title = xss(title)
  content = xss(content)
  id = escape(id.replace(reg,"$1"))
  title = escape(title.replace(reg,"$1"))
  content = escape(content.replace(reg,"$1"))
  if (!title && !content) {
    return {
      msg: '标题或内容不能为空!'
    }
  }
  let sql = ''
  if (title) {
    sql = `UPDATE blogs SET title=${title} WHERE id = ${id};`
  }
  if (content) {
    sql = `UPDATE blogs SET content=${content} WHERE id = ${id};`
  }
  if(title && content){
    sql = `UPDATE blogs SET title=${title}, content=${content} WHERE id = ${id};`
  }
  const updateData = await exec(sql)
  if(updateData.affectedRows > 0) {
    return true
  }
  return false
}

// 删除博客
const deleteBlogById = async ({ id }) => {
  id = xss(id)
  id = escape(id.replace(reg,"$1"))
  const sql = `DELETE FROM blogs WHERE id = ${id};`
  const deleteData = await exec(sql)
  if(deleteData.affectedRows > 0) {
    return true
  }
  return false
}

module.exports = {
  getList,
  getBlogDetailById,
  createBlog,
  updateBlog,
  deleteBlogById
}
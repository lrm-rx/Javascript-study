const xss = require('xss')
const { exec, escape } = require('../db/mysql')

const reg = /^["|'](.*)["|']$/g; // 去掉首尾的引号
// 博客列表
const getList = (author, keyword) => {
  author = xss(author)
  keyword = xss(keyword)
  author = escape(author.replace(reg,"$1"))
  keyword = `%${keyword}%`
  keyword = `${escape(keyword.replace(reg,"$1"))}`
  let sql = `SELECT * FROM blogs WHERE 1=1 `
  if (author === '') {
    sql += `AND author=${author} `
  }
  if (keyword === '') {
    sql += `AND title like ${keyword} `
  }
  sql += `ORDER BY createTime DESC;`
  return exec(sql)
}

// 博客详情
const getBlogDetailById = (id) => {
  id = xss(id)
  id = escape(id.replace(reg,"$1"))
  const sql = `SELECT * FROM blogs WHERE id=${id};`
  return exec(sql).then(rows => {
    return rows[0]
  })
}
// 新建博客
const createBlog = (ctx) => {
  const { title, content, author } = ctx
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
  return exec(sql).then(inserData => {
    return {
      id: inserData.insertId,
      msg: '新建博客成功'
    }
  }).catch(error => {
    console.error(error);
  })
}

// 更新博客
const updateBlog = (ctx) => {
  const { id, title, content } = ctx
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
  
  return exec(sql).then(updateData => {
    if(updateData.affectedRows > 0) {
      return true
    }
    return false
  }).catch(error => {
    console.error(error);
  })
}

// 删除博客
const deleteBlogById = (ctx) => {
  const { id } = ctx
  id = xss(id)
  id = escape(id.replace(reg,"$1"))
  const sql = `DELETE FROM blogs WHERE id = ${id};`
  return exec(sql).then(deleteData => {
    if(deleteData.affectedRows > 0) {
      return true
    }
    return false
  }).catch(error => {
    console.error(error);
  })
}

module.exports = {
  getList,
  getBlogDetailById,
  createBlog,
  updateBlog,
  deleteBlogById
}
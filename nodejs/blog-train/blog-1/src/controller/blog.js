
// 博客列表
const getList = (author, keyword) => {
  // 
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容222222',
      createTime: '2022-11-25',
      updateTime: '2022-11-26',
      author: 'lrm'
    },
    {
      id: 2,
      title: '标题2',
      content: '内容222222',
      createTime: '2022-11-25',
      updateTime: '2022-11-26',
      author: 'lrm'
    }
  ]
}

// 博客详情
const getBlogDetailById = (id) => {
  console.log('id:', id);
  return {
    id: 1,
    title: '标题1',
    content: '内容222222',
    createTime: '2022-11-25',
    updateTime: '2022-11-26',
    author: 'lrm'
  }
}
// 新建博客
const createBlog = (content) => {
  console.log('content:', content);
  return {
    id: 3,
    msg: '新建博客成功'
  }
}

// 更新博客
const updateBlog = (id, content) => {
  console.log('update:', id, content);
  return {
    id: 3,
    msg: '更新博客成功'
  }
}

// 删除博客
const deleteBlogById = (id) => {
  console.log('delete:', id);
  return {
    id: 3,
    msg: '删除博客成功'
  }
}

module.exports = {
  getList,
  getBlogDetailById,
  createBlog,
  updateBlog,
  deleteBlogById
}
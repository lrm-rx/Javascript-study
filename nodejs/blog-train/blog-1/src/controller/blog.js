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

const getBlogDetail = (id) => {
  return {
    id: 1,
    title: '标题1',
    content: '内容222222',
    createTime: '2022-11-25',
    updateTime: '2022-11-26',
    author: 'lrm'
  }
}

module.exports = {
  getList,
  getBlogDetail
}
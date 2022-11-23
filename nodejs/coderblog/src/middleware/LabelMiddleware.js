const labelService = require('../service/LabelService')
const verifyLabelExists = async (ctx, next) => {
  // 1. 取出要添加的所有标签
  const { labels } = ctx.request.body
  const newLabels = []
  // 2. 判断每一个标签在label表中是否在存
  for (let name of labels) {
    const labelResult = await labelService.getLabelByName(name)
    const label = { name }
    if (!labelResult) {
      // 创建新标签数据
      try {
        const result = await labelService.create(name)
        console.log('resussss', result);
        label.id = result.insertId
      } catch (error) {
        console.log(error);
      }
    }else {
      label.id = labelResult.id
    }
    newLabels.push(label)
  }

  ctx.labels = newLabels
  await next()
}

module.exports = {
  verifyLabelExists
}
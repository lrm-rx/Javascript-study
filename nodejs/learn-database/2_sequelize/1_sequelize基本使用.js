const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('nodedb', 'root', '756131502', {
  host: 'localhost',
  dialect: 'mysql', 
  port: 3307
});

sequelize.authenticate().then(() => {
  console.log('连接数据库成功!');
}).catch((error) => {
  console.log('连接数据库失败!', error);
})
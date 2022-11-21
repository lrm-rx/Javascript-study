const { Sequelize, DataTypes, Model, Op } = require('sequelize')

const sequelize = new Sequelize('nodedb', 'root', '756131502', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3307
})


sequelize.authenticate().then(() => {
  console.log('连接数据库成功!');
}).catch((error) => {
  console.log('连接数据库失败!', error);
})

// 方式一:
// sequelize.define()

// 方式二:
class Product extends Model { }

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: DataTypes.DOUBLE,
  score: DataTypes.DOUBLE
}, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
})


async function queryProducts() {
  // 查询产品数据
  // const result = await Product.findAll({
  //   where: {
  //     price: {
  //       [Op.gte]: 5000
  //     }
  //   }
  // })
  // 2. 插入产品数据
  // const addResult = await Product.create({
  //   title: 'iphone 20 Pro',
  //   price: 99999,
  //   score: 10
  // })
  
  // 更新数据
  const result = await Product.update({
    brand: '苹果',
    price: 88888 
  },{
    where: {
      id: 109
    }
  })
  console.log('result:', result);
}

queryProducts()




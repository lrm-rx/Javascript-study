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


class Brand extends Model { }

Brand.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  website: DataTypes.STRING,
  phoneRank: {
    field: 'phone_rank',
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'brand',
  createdAt: false,
  updatedAt: false,
  sequelize
})

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
  score: DataTypes.DOUBLE,
  brandId: { // 外键
    field: 'brand_id',
    type: DataTypes.INTEGER,
    references: {
      model: Brand,
      key: 'id'
    }
  }
}, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
})

// 将两张表联系在一起
Product.belongsTo(Brand, {
  foreignKey: 'brandId'
})


async function queryProducts() {
  const result = await Product.findAll({
    include: {
      model: Brand
    }
  })
  console.log(result);
}

queryProducts()




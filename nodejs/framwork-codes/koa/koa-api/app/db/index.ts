
import { Sequelize } from 'sequelize-typescript'
import config from '../config';
import path from 'path'
import { sqlLogger } from '../logger';
// 分别传递参数 (其它数据库)
const sequelize = new Sequelize(config.db.db_name, config.db.db_user, config.db.db_password, {
  host: config.db.db_host,
  port: config.db.db_port as number,
  dialect: 'mysql', /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
  pool: {   //连接池设置
    max: 50, //最大连接数
    min: 0, //最小连接数
    idle: 30000,
    acquire: 60000
  },
  models: [
    path.join(__dirname, '..', 'model/**/*.ts'),
    path.join(__dirname, '..', 'model/**/*.js'),
  ],
  dialectOptions: {
    charset: 'utf8'
  },
  define: { // 数据表的默认字段
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  },
  logging: msg => sqlLogger.info(msg) // 数据库日志
});
const dbMain = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // if (config.server.env === 'dev') {
    //   await sequelize.sync({ alter: true }) // 根据模型同步创建表,生成环境需要关闭
    //   console.log('table sync done')
    // }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default dbMain



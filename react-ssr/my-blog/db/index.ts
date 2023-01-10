import { EntityTarget, ObjectLiteral } from 'typeorm';
import AppDataSource from './connection';

AppDataSource.then(() => {
  console.log('数据库连接成功!');
}).catch((err: Error) => {
  console.log(err);
});

const getMyRepository = async(entity: EntityTarget<ObjectLiteral>) => {
  return (await AppDataSource).getRepository(entity);
};

export { AppDataSource as dataSource, getMyRepository };

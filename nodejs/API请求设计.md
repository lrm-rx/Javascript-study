# API请求设计

## 请求 = 动词 + 宾语
+ 动词 使用五种 `HTTP` 方法, 对应`CRUD`操作.
+ 宾语 `URL` 应该全部使用名词复数,可以有例外,比如搜索可以使用更加直观的 `search`.
+ 过滤信息(Filtering)如果记录数量很多,API应该提供参数,过滤返回结果.`?limi=10`指定返回记录的数量 `?offset=10`指定返回记录的开始位置.

| 方法 | 接口 | 说明 |
|------|-----|------|
| GET | /zoos | 列出所有动物园 |
| POST | /zoos | 新建一个动物园 |
| GET | /zoos/:id | 获取某个指定动物园的信息 |
| PUT | /zoos/:id | 更新某个指定动物园的全部信息 |
| PATCH | /zoos/:id | 更新某个动物园的部分信息 |
| DELETE | /zoos/:id | 删除某个动物园 |
| GET | /zoos/:id/animals | 列出某个指定动物园的所有动物 |
| DELETE | /zoos/:id/animals/:id | 删除某个动物园的指定动物 |
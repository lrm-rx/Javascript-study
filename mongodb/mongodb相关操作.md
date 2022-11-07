# 基本操作
## 库
+ 通过命令行打开mongodb
  ```sql
  > mongo
  ```
+ 查看所有库
  ```sql
  > show databases; | show dbs;
  ```
  
  注意:
  - `admin`: 从权限的角度来看, 这是`root`数据库. 要是将一个用户添加到这个数据库, 这个用户自动继承所有数据库的权限. 一些特定的服务器端命令也只能从这个数据库运行, 比如列出所有的数据库或者关闭服务器.
  - `local`: 这个数据永远不会被复制, 可以用来存储限于本地单台服务器的任意集合.
  - `config`:当mongo用于分片设置时, config数据库在内部使用, 用于保存分片的相关信息.

+ 创建/切换数据库(创建并使用)
  ```sql
  > use 数据库名
  ```

  注意: 创建完数据库之后, 如果该数据库中没有集合时,mongodb是不显示这个数据库的,因此通过`show databases; | show dbs; `是查看不到的.

+ 查看当前所在库
  ```sql
  > db
  ```

+ 删除数据库
  - 默认删除当前选中的库
  ```sql
  > db.dropDatabase() // 虽然已经删除了当前库, 但是db查看当前所在库还是会显示出来
  ```

## 集合
+ 查看数据库中所有的集合
  ```sql
  > show collections; | show tables;  // 后者与mysql查看表命令一致
  ```
  
+ 创建集合
  ```sql
  > db.createCollection('集合名称',[options])
  ```

  options参数：
  | 字段   | 类型 | 描述                                                                                                                                             |
  | ------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
  | capped | 布尔 | (可选)如果为true, 则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。**当该值为true时，必须指定size参数。** |
  | size   | 数值 | （可选）为固定集合指定一个最大值，即字节数。**如果capped为true,也需要指定该字段。**                                                              |
  | max    | 数值 | （可选）指定固定集合中包含文档的最大数量。                                                                                                       |

  **注意：当集合不在存时，向集合中插入文档也会自动创建该集合。**
+ 删除集合
  ```sql
  > db.集合名称.drop();
  ```


## 文档
参考文档: https://www.mongodb.com/docs/v5.0/

+ 插入文档
  - 单条插入
  ```sql
  > db.集合名称.insert({name: "ming", age: 22, bir: "2000-08-15"});
  或
  > db.集合名称.insertOne({name: "ming", age: 22, bir: "2000-08-15"});
  ```
  - 多条插入
  ```sql
  > db.集合名称.insertMany(
    [<document 1>, <document 2>, ...],
    {
      writeConcern: 1, // 写入策略, 默认为1,即要求确认写操作, 0 是不要求.
      ordered: true // 指定是否按顺序写入, 默认true, 按顺序写入.
    }
  )
  或
  > db.集合名称.insert([
    {name: "ming", age: 22, bir: "2000-08-15"},
    {name: "xiaohu", age: 25, bir: "1998-08-15"}
  ]);
  ```
  - 脚本方式
  ```js
  for(let i=0;i<100;i++) {
    db.users.insert({_id: i, name:"ming", age: 20})
  }
  ```

  **注意: 在mongodb中每个文档都会有一个_id作为唯一标识, _id默认会自动生成,如果手动指定将使用手动指定的值作为_id的值**

+ 查询所有
  ```sql
  > db.集合名称.find();
  ```

+ 删除文档
  db.collection.remove(
    <query>,
    {
      justOne: <boolean>,
      writeConcern: <document>
    }
  )
  **参数说明:**
  - **query**: `可选`,删除的文档的条件.
  - **justOne**: `可选`,如果设为`true`或1,则只删除一个文档,如果不设置该参数,或使用默认值false,则删除所有匹配条件的文档.
  - **writeConcern**: `可选`抛出异常的级别.
+ 更新文档
  ```sql
  db.集合名称.update(
    <query>,
    <update>,
    {
      upsert: <boolean>,
      multi: <boolean>,
      writeConcern: <document>
    }
  );
  ```
  **参数说明:**
  - **query**: update的查询条件,类似sql update查询内where后面的语句.
  - **update**: update的对象和一些更新的操作符(如$,$inc...)等,也可以理解为sql update查询内where后面的语句.
  - **upsert**: `可选`, 这个参数的意思是, 如果不在存update的记录, 是否插入objNew,true为插入,默认是false,不插入.
  - **multi**: `可选`,mongdb默认为false,只更新找到的第一条记录,如果这个参数为true,就把按条件查出来多条记录全部更新.
  - writeConcern: `可选`,抛出异常的级别.
  ```sql
  - db.集合名称.update({name:"ming"},{name: '22',bir:new date()})
  `这个更新是将符合条件的全部更新成后面的文档,相当于先删除再更新`
  - db.集合名称.update({name:"baolan"},{$set: {name:"pyl"}})
  `保留原有数据更新,但是只更新符合条件的第一条数据`
  - db.集合名称.update({name:"xiaohu"},{$set:{name:"rookie"}},{multi: true})
  `保留原有数据更新,更新符合条件的所有数据`
  - db.集合名称.update({name:"hang"},{$set:{name:"on"}},{multi:true,upsert:true})
  `保留原有数据更新,更新符合条件的所有数据 没有条件符合时插入数据`
  ```

## 文档查询
**MongoDB查询文档使用find()方法.find()方法以非结构化的方式来显示所有文档.**
### 语法
```sql
> db.集合名称.find(query, projection)
```
+ **query**:可选,使用查询操作符指定查询条件.
+ **projection**:可选,使用投影操作符指定返回的键.查询时返回文档中所有键值,只需省略该参数即可(默认省略).
如果你需要以易读的方式来读取数据,可以使用pretty()方法,语法格式如下:
```sql
> db.集合名称.find().pretty()
```
**`注意: pretty()方法以格式化的方式来显示所有文档.`**

### 对比语法
如果你熟悉常规的SQL数据,通过下表可以更好的理解MongoDB的条件语句查询:
| 操作       | 格式                   | 范例                                   | RDBMS中的类似语句   |
| ---------- | ---------------------- | -------------------------------------- | ------------------- |
| 等于       | {<key>:<value>}        | db.col.find({name: "ming"}).pretty()   | where name = "ming" |
| 小于       | {<key>:{$lt:<value>}}  | db.col.find({age:{$lt: 22}}).pretty()  | where age < 22      |
| 小于或等于 | {<key>:{$lte:<value>}} | db.col.find({age:{$lte: 22}}).pretty() | where age <= 22     |
| 大于       | {<key>:{$gt:<value>}}  | db.col.find({age:{$gt: 22}}).pretty()  | where age > 22      |
| 大于或等于 | {<key>:{$gte:<value>}} | db.col.find({age:{$gte: 22}}).pretty() | where age >= 22     |
| 不等于     | {<key>:{$ne:<value>}}  | db.col.find({age:{$ne: 22}}).pretty()  | where age != 22     |

### AND
```sql
> db.集合名称.find({key1:value1,key2:value2,...}).pretty()
```
**`类似于 WHERE 语句: WHERE key1=value1 AND key2=value2,如果有多个相同的key值,则以最后一个为准`**

### OR
**MongDB OR条件语句使用了关键字 `$or` ,语法格式如下:**
```sql
> db.集合名称.find(
  {
    $or: [
      {key1: value1},
      {key2: value2},
      ......
    ]
  }
)
```
**`类似于 WHERE 语句: WHERE key1=value1 or key2=value2`**

### AND和OR联合
**`类似SQL语句为: where age > 22 and (name = 'ming' or name = 'baolan'`**

```sql
> db.集合名称.find({age: {$gt: 50},$or:[{name: "ming"},{name: "baolan"}]}).pretty();
```

### 数组查询
```sql
-- 测试数据
> db.集合名称.insert({_id: 100, name: "liang", age: 20, likes:["下棋","lol"]});
-- 执行数组查询
> db.集合名称.find({likes: "lol"});
-- $size按照数组长度查询
> db.集合名称.find({likes: {$size: 2}});
```

### 模糊查询
`类似于SQL中的: where name like '%name%'`
```sql
> db.集合名称.find({likes: /a/});
```
**`注意: 在MongoDB中使用正则表达式 可以是实现近似模糊查询功能`**

### 排序
```sql
> db.集合名称.find().sort({name: 1, age: 1});
-   1:升序 -1:降序
```
**`类似SQL语句为: order by name,age`**

### 分页
```sql
> db.集合名称.find().sort({条件}).skip(start).limit(rows);
```
**`类似于 SQL 语句为: limit start, rows`**

### 总条数
```sql
> db.集合名称.count();
> db.集合名称.find({name:"ming"}).count();
```

**`类似于 SQL 语句为: select count(id) from xxx`**

### 去重
```sql
> db.集合名称.distinct('字段');
```

### 指定返回字段
```sql
> db.集合名称.find({条件},{name: 1,age:1});
-   参数2: 1 返回  0 不返回
- 注意: 1和0不能同时使用
```

## $type
### 说明
$type操作符是基于BSON类型来检索集合中匹配的数据类型,并返回结果.
MongoDB中可以使用的类型如下表所示:
| 类型                   | 数字 | 备注          |
| ---------------------- | ---- | ------------- |
| Double                 | 1    |               |
| String                 | 2    |               |
| Object                 | 3    |               |
| Array                  | 4    |               |
| Binary data            | 5    |               |
| Undefined              | 6    | 已废弃        |
| Object id              | 7    |               |
| Boolean                | 8    |               |
| Date                   | 9    |               |
| Null                   | 10   |               |
| Regular Expression     | 11   |               |
| JavaScript             | 13   |               |
| Symbol                 | 14   |               |
| JavaScript(with scope) | 15   |               |
| 32-bit integer         | 16   |               |
| Timestamp              | 17   |               |
| 64-bit integer         | 18   |               |
| Min key                | 255  | Query with -1 |
| Max key                | 127  |               |

### 使用
```sql
> db.col.insert({
  title: "Vue 教程",
  by: "尤大大",
  description: "Vue是一个渐进式框架......",
  url: "https://cn.vuejs.org/",
  tags: ["Vue"],
  lieks: 266
});
> db.col.insert({
  title: "Java 教程",
  by: "a",
  description: "Java是一门强类型语言......",
  url: "https://cn.vuejs.org/",
  tags: ["Vue"],
  lieks: 350
});
> db.col.insert({
  title: "React 教程",
  by: "b",
  description: "React是一个前端框架......",
  url: "https://cn.vuejs.org/",
  tags: ["React"],
  lieks: 555
});
```

+ 如果想要获取`col`集合中的`title`为`String`的数据, 你可以使用以下命令:
  ```sql
  db.col.find({title: {$type: 2}}).pretty();
  或
  db.col.find({title: {$type: "string"}}).pretty();
  ```
+ 如果想要获取`col`集合中的`tags`为`Array`的数据, 你可以使用以下命令:
  ```sql
  dge
  或
  db.col.find({tags: {$type: 'array'}}).pretty();
  ```
## 索引
### 说明
索引通常能够极大的提高查询的效率,如果没有索引,MongoDB在读取数据时必须扫描集合中的每个文件并选取那些符合条件的记录.这种扫描全集合的查询效率是非常低的,特别在处理大量的数据时,查询可能要花费几十秒甚至几分钟,这对网商的性能是非常致命的.索引是特殊的数据结构,索引存储在一个易于遍历读取的数据集合上,索引是对数据库表中一列或多列的值进行排序的一种结构.

### 原理
从根本上说, MongoDB中的索引与其他数据库系统中的索引类似.MongoDB在集合层面上定义了索引,并支持对MongoDB集合中的任何字段或文档的子字段进行索引.

### 操作
1. 创建索引
   ```sql
  > db.集合名称.createIndex(keys, options)
  > db.集合名称.createIndex({title: 1, description: -1})
   ```
   **说明: 语法中的 key 值为你要创建的索引字段, 1 为指定按升序创建索引, 如果你想按降序来创建索引指定为 -1 即可.**

   createIndex()接收可选参数, 可选参数列表如下:
    | Parameter            | Type          | Description                                                                                                                          |
    | -------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
    | `background`         | Boolean       | 建索引过程会阻塞其他数据库操作, background可指定以后台方式创建索引,即增加"background"可选参数. "background"默认值为false.            |
    | `unique`             | Boolean       | 建立的索引是否唯一.指定为true创建唯一索引.默认值为false.                                                                             |
    | `name`               | string        | 索引的名称.如果未指定,MongoDB的通过连接索引的字段名和排序生成一个索引名称.                                                           |
    | sparse               | Boolean       | 对文档中不在存的字段数据不启用索引;这个参数需要特别注意,如果设置为true的话,在索引字段中不会查询出不包含对应字段的文档.默认值为false. |
    | `expireAfterSeconds` | integer       | 在指定一个以秒为单位的数值,完成TTL设定,设定集合的生存时间.是一个标识,不会删除,查看时还是会显示出来.                                  |
    | `v`                  | index version | 索引的版本号.默认的索引版本取决于mongod创建索引时运行的版本.                                                                         |
    | weights              | document      | 索引权重值,数值在1 - 99999之间,表示该索引相对于其他索引字段的得分权重.                                                               |
    | default_language     | string        | 对于文本索引,该参数决定了停用词及词干和词器的规则的列表.默认为英语.                                                                  |
    | language_override    | string        | 对于文本索引,该参数指定了包含在文档中的字段名,语言覆盖默认的language,默认值为language.                                               |
2. 查看集合索引
   ```sql
   > db.集合名称.getIndexes();
   ```
3. 查看集合索引大小
   ```sql
   > db.集合名称.totalIndexSize();
   ```
4. 删除集合所有索引
   ```sql
   > db.集合名称.dropIndexes();
   ```
5. 删除集合指定索引
   ```sql
  > db.集合名称.dropIndex("索引名称");
   ```
6. 复合索引
   **说明: 一个索引的值是由多个key进行维护的索引称之为复合索引**
   ```sql
  > db.集合名称.createIndex({title: 1, description: -1})
   ```
   `注意:mongoDB中复合索引和传统关系型数据库一致 都是左前缀原则.`

## 聚合
### 说明
MongoDB中聚合(aggregate)主要用于处理数据(诸如统计平均值,求和等),并返回计算后的数据结果.有点类似SQL语句中的`count(*)`.

### 使用
```sql
{_id:ObjectId(7df78ad8902c)
title:MongoDB Overview',
description:'MongoDB is no sql database',
by_user:'runoob.com',
url:'http://www.runoob.com',
tags:[mongodb','database','NoSQL']
likes:100
},
{_id:ObjectId(7df78ad8902d)
title:'NoSQL Overview',
description:'No sql database is very fast',
by_user:'runoob.com',
ur1:'http://www.runoob.com',
tags:['mongodb','database','NoSQL']
likes:10
},
{_id:ObjectId(7df78ad8902e)
title:'Neo4j Overview',
description:'Neo4j is no sql database',
by_user:'Neo4j',
ur1:'http://www.neo4j.com',
tags:[deo4j,database','NoSQL']
likes:750
},
```
现在我们通过以上集合计算每个作者所写的文章数,使用aggregate()计算结果如下:
```sql
> db.集合名称.aggregate([{$group: {_id: "$by_user", num_tutorial: {$sum:1}}}]);
```

### 常见聚合表达式
| 表达式               | 描述                                                                       | 实例                                                                             |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| $sum                 | 计算总和                                                                   | db.mycol.aggregate([{$group: {_id: "$by_user",num_tutorial: {$sum: "$likes"}}}]) |
| $avg                 | 计算平均值                                                                 | db.mycol.aggregate([{$group: {_id: "$by_user",num_tutorial: {$avg: "$likes"}}}]) |
| $min                 | 获取集合中所有文档对应值得最小值。                                         | db.mycol.aggregate([{$group: {_id: "$by_user",num_tutorial: {$min: "$likes"}}}]) |
| $max                 | 获取集合中所有文档对应值得最大值。                                         | db.mycol.aggregate([{$group: {_id: "$by_user",num_tutorial: {$max: "$likes"}}}]) |
| $push                | 将值加入一个数组中，不会判断是否有重复的值。                               | db.mycol.aggregate([{$group: {_id: "$by_user",url: {$push: "$url"}}}])           |
| $addToSet            | 将值加入一个数组中，会判断是否有重复的值，若相同的值在数组中已             |
| 经存在了，则不加入。 | db.mycol.aggregate([{$group: {_id: "$by_user",url: {$addToSet: "$url"}}}]) |
| $first               | 根据资源文档的排序获取第一个文档数据。                                     | db.mycol.aggregate([{$group: {_id: "$by_user",first_url: {$first: "$url"}}}])    |
| $last                | 根据资源文档的排序获取最后一个文档数据                                     | db.mycol.aggregate([{$group: {_id: "$by_user",last_url: {$last: "$url"}}}])      |

## 副本集
### 说明
MongoDB副本集(Replica Set).是有自动故障恢复功能的主从集群，有一个Primaryi节点和一个或多个Secondary节点组成。副本集没有固定的`主节点`，当`主节点`发生故障时整个集群会`选举一个主节点`为系统提供服务以保证系统的高可用。

### Automatic Failover
自动故障转移机制：当主节点未与集合的其他成员通信超过配置的选举超时时间（默认为10秒)时，合格的辅助节点将调用选举以将自己提名为新的主节点。集群尝试完成新主节点的选举并恢复正常操作。

### 搭建副本集
+ 创建数据目录
  ```sql
  #在安装目录中创建
  mkdir -p ../repl/datal
  mkdir -p ../repl/data2
  mkdir -p ../repl/data3
  ```
+ 搭建副本集
  ```sql
  mongod --port 27017 --dbpath../repl/data1 --bind_ip 0.0.0.0 --replSet
  yreplace/[localhost:27018,localhost:27019]
  mongod --port 27018 --dbpath ../repl/data2 --bind_ip 0.0.0.0--replSet
  myreplace/[localhost:27019,localhost:27017]
  mongod --port 27019 --dbpath ../repl/data3 --bind_ip 0.0.0.0 --replSet
  myreplace/[localhost:27017,localhost:27018]
  ```
  `注意: --replSet副本集  myreplace 副本集名称/集群中其他节点的主机和端口`
+ 配置副本集,连接任意节点
  - use admin
  - 初始化副本集
  ```sql
  > var config = {
    _id:"myreplace",
    members:
    {_id:0,host:"localhost:27017"},
    {_id:1,host "localhost:27018"},
    {_id:2,host "localhost:27019"}]
  }
  > rs.initiate(config);//初始化配置
  ```
  - 设置客户端临时可以访问
  ```sql
  > re.slaveOk();
  > rs.secondaryok();
  ```

## 分片集群
### 说明

分片(sharding)是指将数据拆分，将其分散存在不同机器的过程，有时也用分区(partitioning)来表示这个概念，将数据分散在不同的机器上，不需要功能强大的大型计算机就能存储更多的数据，处理更大的负载。

分片目的是通过分片能够增加更多机器来应对不断的增加负载和数据，还不影响应用运行。

MongoDB支持自动分片，可以摆脱手动分片的管理困扰，集群自动切分数据做负载均衡。MongoDB分片的基本思想就是将集合拆分成多个块，这些快分散在若干个片里，每个片只负责总数据的一部分，应用程序不必知道哪些片对应哪些数据，甚至不需要知道数据拆分了，所以在分片之前会运行一个路由进程，mongos进程，这个路由器知道所有的数据存放位置，应用只需要直接与mongos?交互即可。mongos自动将请求转到相应的片上获取数据，从应用角度看分不分片没有什么区别。

+ **`Shard`**:用于存储实际的数据块，实际生产环境中一个shard serveri角色可由几台机器组个一个replica set承担，防止主机单点故障.
+ **`Config Server:mongod`**:实例，存储了整个ClusterMetadata。
+ **`Query Routers`**:前端路由，客户端由此接入，且让整个集群看上去像单一数据库，前端应用可以透明使用。
+ **`Shard Key`**:片键，设置分片时需要在集合中选一个键，用该键的值作为拆分数据的依据，这个片键称之为(shard key),片键的选取很重要，片键的选取决定了数据散列是否均匀。

### 搭建
```sql
#1.集群规划
Shard Server 1:27017
Shard Repl 1：27018
Shard Server 2:27019
Shard Repl 2:27020
Shard Server 3:27021
Shard Repl 3:27022
Config Server 27023
Config Server 27024
Config Server 27025
Route Process 27026

#2.进入安装的bin目录创建数据目录
mkdir -p ../cluster/shard/s0
mkdir -p../cluster/shard/s0-repl
mkdir -p ../cluster/shard/s1
mkdir -p ../cluster/shard/s1-repl
mkdir -p ../cluster/shard/s2
mkdir -p ../cluster/shard/s2-repl
mkdir -p../cluster/shard/config1
mkdir -p ../cluster/shard/config2
mkdir -p ../cluster/shard/config3

#3.启动4个shard服务
#启动s0、r0
>./mongod --port 27017 --dbpath ../cluster/shard/s0 --bind_ip 0.0.0.0 --shardsvr --rep1Setr0/121.5.167.13:27018
>./mongod --port 27018 --dbpath ../cluster/shard/s0-repl --bind_ip 0.0.0.0 --shardsvr --rep1Setr0/121.5.167.13:27017
--1.登录任意节点
--2.use admin
--3.执行
config ={_id:"r0",members:[
{_1d:0,host:"121,5.167.13:27017"},
{_1d:1,host:"121.5.167.13:27018"},
]
}
rs.initiate(config);//初始化

#启动s1、r1
./mongod --port 27019 --dbpath ../cluster/shard/s1 --bind_ip 0.0.0.0 --shardsvr --rep1Setr1/121.5.167.13:27020
>./mongod --port 27020 --dbpath ../cluster/shard/s1-repl --bind_ip 0.0.0.0 --shardsvr --rep1Setr1/121.5.167.13:27019
-1.登录任意节点
--2.use admin
--3.执行
config = {_id:"r1",members: [
{_1d:0,host:"121.5.167.13:27019"},
{_id:1,host:"121.5.167.13:27020"},
]
}
rs.initiate(config);//初始化

#启动s2、r2
>./mongod --port 27021 --dbpath ../cluster/shard/s2 --bind_ip 0.0.0.0 --shardsvr --rep1Setr2/121.5.167.13:27022
大
>./mongod --port 27022 --dbpath ../cluster/shard/s2-repl --bind_ip 0.0.0.0 --shardsvr --rep1Setr2/121.5.167.13:27021
--1.登录任意节点
--2.use admin
--3.执行
config = {_id:"r2",members:[
{-1d:0,host:"121.5.167.13:27021"},
{-1d:1,host:"121.5.167.13:27022"},
]
}
rs.initiate(config);/初始化

#4.启动3个config.服务
>./mongod --port 27023 --dbpath ../cluster/shard/config1 --bind_ip 0.0.0.0 --rep1Set config/[121.5.167.13:27024,121.5.167.13:27825] --configsvr
>./mongod --port 27024 --dbpath ../cluster/shard/config2 --bind_ip 0.0.0.0 --rep1Set config/[121.5.167.13:27023,121.5.167.13:27025] --configsvr
>./mongod --port 27025 --dbpath ../cluster/shard/config3 --bind_ip 0.0.0.0 --rep1Set config/[121.5.167.13:27023,121.5.167.13:27824] --configsvr

#5.初始化config server副本集
-`登录任意节点congfig server
> 1.use admin
> 2.在admin中执行
config = {
_id:"config",
configsvr:true,
members: [
{_1d:0,host:"121.5.167.13:27023"},
{_1d:1,host:"121.5.167.13:27024"},
{_1d:2,h0st:"121.5.167.13:27025"}
]
}
> 3.rs.initiate(config);//初始化副本集配置

#6.启动mongos路由服务
./mongps --port 27026 --configdb config/121.5.167.13:27023,121.5.167.13:27024,121.5.167.13:27025--bind_ip 0.0.0.0

#7.登录mongos服务
> 1.登录mongo --p0rt27026
> 2.use admin 
> 3.添加分片信息
  db.runCommand({addshard:"121.5.167.13:27017","allowLocal":true }
  db.runCommand (addshard:"121.5.167.13:27019","allowLocal":true }
  db.runCommand (addshard:"121.5.167.13:27021","allowLocal":true }
> 4.指定分片的数据库
  db.runCommand({enablesharding:"baizhi"})
> 5.设置库的片键信息
  db.runCommand({shardcollection:"baizhi.users",key:{_id:1)))
  db.runCommand({shardcollection:"baizhi.users",key:{_id:"hashed")))
```

















索引的expireAfterSeconds 是设置过了一个时间后这个数据自动删除

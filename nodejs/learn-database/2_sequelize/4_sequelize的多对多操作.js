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

// student
class Student extends Model {}
Student.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  age: DataTypes.INTEGER
},{
  tableName: 'students',
  createdAt: false,
  updateAt: false,
  sequelize
})

// course
class Course extends Model {}
Course.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: DataTypes.DOUBLE
},{
  tableName: 'courses',
  createdAt: false,
  updateAt: false,
  sequelize
})

// student-course
class StudentCourse extends Model {}
StudentCourse.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: 'id'
    },
    field: 'student_id'
  },
  courseId: {
    type: DataTypes.INTEGER,
    references: {
      model: Course,
      key: 'id'
    },
    field: 'course_id'
  }
}, {
  tableName: 'student-select_course',
  createdAt: false,
  updateAt: false,
  sequelize
})

// 多对多关系
Student.belongsToMany(Course, {
  through: StudentCourse,
  foreignKey: 'studentId',
  otherKey: 'courseId'
})
Course.belongsToMany(Student, {
  through: StudentCourse,
  foreignKey: 'courseId',
  otherKey: 'studentId'
})
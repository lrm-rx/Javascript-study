/*
 * @Author: lrm
 * @Date: 2022-11-01 17:47:58
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-01 18:27:49
 * @FilePath: \jest\newStudent.js
 */


export default class NewStudent {
  scoreLevel(num) {
    this.level = num >= 80?'优秀':'良好'
  }

  say() {
    this.score = this.level + '成绩'
  }

  say2() {
    this.score = this.level + '成绩,加油'
  }
}
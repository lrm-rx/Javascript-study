/*
 * @Author: lrm
 * @Date: 2022-11-01 17:54:02
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-01 18:36:59
 * @FilePath: \jest\newStudent.test.js
 */

import NewStudent from "./newStudent";

const ming = new NewStudent()

beforeAll(()=>{
  console.log('在所有测试用例执行之前调用beforeAll')
})

beforeEach(()=>{
  console.log('每个用例执行之前调用beforeEach')
})
test('测试1',()=>{
  ming.scoreLevel(88)
  ming.say()
  console.log('zzz', ming.score) 
  expect(ming.score).toEqual('优秀成绩')
})

test('测试2',()=>{
  ming.scoreLevel(66)
  ming.say2()
  console.log('zzz', ming.score) 
  expect(ming.score).toEqual('良好成绩,加油')
})

afterEach(()=>{
  console.log('每个用例执行之后调用afterEach')
})

afterAll(()=>{
  console.log('在所有测试用例执行完成之后调用beforeAll')
})
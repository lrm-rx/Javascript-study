// const levels = require('./test1.js')
// const {level,level2} = levels
import {level,level2} from './test1'
test('level, 200', ()=>{
  expect(level(300)).toBe('吃大餐')
})

test('level2, 1000', ()=>{
  expect(level2(3000)).toBe('大餐A')
})
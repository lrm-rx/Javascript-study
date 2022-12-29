// 类型断言
export { }

const nums = [1, 2, 3, 4, 5]

const res = nums.find(i => i > 0)

const num1 = res as number

const num2 = <number>res // 在JSX中不能使用
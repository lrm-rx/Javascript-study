
// 匹配器
test('lck', () => {
  expect('lck').toBe('lck')
})

test('toEqual', () => {
  const p = { name: '小明', age: 18 }
  expect(p).toEqual({ name: '小明', age: 18 })
})


test('toBeNull', () => {
  const p = null
  expect(p).toBeNull()
})

test('toBeUndefined', () => {
  const p = undefined
  expect(p).toBeUndefined()
})

test('toBeDefined', () => {
  const p = 1 || ''
  expect(p).toBeDefined()
})

test('toBeTruthy', () => {
  const p = true
  expect(p).toBeTruthy()
})

test('toBeFalsy', () => {
  const p = false
  expect(p).toBeFalsy()
})

test('toBeGreaterThan', () => {
  // 大于
  const num = 20
  expect(num).toBeGreaterThan(10)
})

test('toBeGreaterThan', () => {
  // 小于
  const num = 20
  expect(num).toBeLessThan(10)
})

test('常见断言方法', () => {
  const n = null
  const value = 4
  expect({ a: 1 }).toStrictEqual({ a: 1 })//判断两个对象是否相等
  expect(1).not.toBe(2)//判断不等
  expect({ a: 1, foo: { b: 2 } }).toEqual({ a: 1, foo: { b: 2 } })
  expect(n).toBeNull(); //判断是否为null
  expect(n).toBeUndefined(); //判断是否为undefined
  expect(n).toBeDefined(); //判断结果与toBeUndefined相反
  expect(n).toBeTruthy(); //判断结果为true
  expect(n).toBeFalsy(); //判断结果为false
  expect(value).toBeGreaterThan(3); //大于3
  expect(value).toBeGreaterThanOrEqual(3.5); //大于等于3.5
  expect(value).toBeLessThan(5); //小于5
  expect(value).toBeLessThanOrEqual(4.5); //小于等于4.5
  expect(value).toBeCloseTo(0.3); // 浮点数判断相等
  expect('Christoph').toMatch(/stop/); //正则表达式判断
  expect(['one', 'two']).toContain('one'); //匹配数组
})

// yarn add @babel/core@7.4.5 @babel/preset-env@7.4.5 -D



import { getData,getData1,getData2,getData3 } from "./getData";

// 回调-done()
test('getData异步测试1', (done)=>{
  getData(data=>{
    expect(data).toEqual({
      success: true
    })
    done()
  })
})

// 使用return
test('getData异步测试2', ()=>{
  return getData1().then(res=>{
    expect(res.data).toEqual({
      success: true
    })
  })
})

test('getData异步测试3', ()=>{
  expect.assertions(1) // 断言, 必须执行一次expect
  return getData2().catch(error=>{
    expect(error.toString().indexOf('404') > -1).toBe(true)
  })
})


test('getData异步测试4',async()=>{
  const response = await getData3()
  expect(response.data).toEqual({
    data: {
      success: true
    }
  })
})
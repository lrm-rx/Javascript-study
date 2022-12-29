// 任意类型(弱类型)
export {}

function strngify(value: any) {
  return JSON.stringify(value)
}

strngify('string')

strngify(100)

strngify(true)

let foo: any = 'string'

foo = 100

// foo.bar()

// any类型是不安全的
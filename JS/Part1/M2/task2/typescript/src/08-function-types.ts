// 函数类型
export {}

function fn1(a: number, b: number = 10, ...rest: number[]): string {
  return "fn1"
}

fn1(100, 12)
fn1(100)
fn1(1, 2, 3)

const fn2: (a: number, b: number) => string = function (a: number, b: number): string {
  return 'fn2'
}
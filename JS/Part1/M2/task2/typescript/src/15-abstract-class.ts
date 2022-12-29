// 抽象类
export {}

// abstract 只能继承, 不能通过new创建实例对象
abstract class Animal {
  eat (food: string): void {
    console.log(`呼噜呼噜的吃: ${food}`)
  }
  
  abstract run (distance: number): void
}

class Dog extends Animal {
  run(distance: number): void {
    console.log('四脚爬行', distance)
  }
}

const d = new Dog()
d.eat('鸡腿')
d.run(100)
// 类的访问修饰符

export {} // 确保跟其它示例没有成员冲突

class Person {
  public name: string // = 'init name'
  private age: number // 只能在内部访问
  protected readonly gender: boolean // protected不能在外部访问, 子类可访问  且只读
  
  constructor (name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi (msg: string): void {
    console.log(`I am ${this.name}, ${msg}`)
    console.log(this.age)
  }
}

class Student extends Person {
  private constructor (name: string, age: number) {
    super(name, age)
    console.log(this.gender)
    // console.log(this.age);
  }

  static create (name: string, age: number) {
    return new Student(name, age)
  }
}

const tom = new Person('tom', 18)
console.log(tom.name)
// console.log(tom.age)
// console.log(tom.gender)

const jack = Student.create('jack', 18)
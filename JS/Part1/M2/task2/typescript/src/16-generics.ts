// 泛型
export {}

function createNumberArray(length:number, value: number): number[] {
  return Array<number>(length).fill(value)
}

function createStringArray (length: number, value: string): string[] {
  return Array<string>(length).fill(value)
}

function createArray<T> (length: number, value: T): T[] {
  return Array<T>(length).fill(value)
}

// const res = createNumberArray(3, 100)
// res => [100, 100, 100]

const res = createArray<string>(3, 'foo')

// 实现可迭代接口 (Iterable)

const obj = {
  store: ['foo', 'bar', 'baz'],
  [Symbol.iterator]: function () {
    return {
      next: function () {
        const result = {
          value: self.store[index],
          done: index >= self.store.length
        }
        index++;
        return result;
      }
    }
  }
}

for (const item of obj) {
  console.log('循环体', item);
}
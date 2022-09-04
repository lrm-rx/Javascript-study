Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length <= 1) { return arr; }
        const left = [];
        const right = [];
        const mid = arr[0];
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i] < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i])
            }
        }
        return [...rec(left), mid, ...rec(right)];
    }
    const res = rec(this);
    res.forEach((n, i) => {
        this[i] = n;
    });
}

const arr = [5, 4, 3, 2, 1];
arr.quickSort();



let quickSort = function (arr) {
    if (arr.length <= 1) { return arr; }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
};

const arr1 = [5, 10, 1, 555, 6, 88, 7, 884, 1000, 9];
console.log(quickSort(arr1))



const arrna = ['AA', 'ax', 'ab','zac','zab', 'kb', 'Ka']
let a = arrna.sort((s1, s2) => {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
});
console.log('arrna:', arrna, a)

let items = [
    { name: 'Edward', value: 21 },
    { name: 'Eaward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 },
    { name: 'O', value: 37 }
  ];
  
  const newItems = items.sort(function(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  console.log(newItems)
  
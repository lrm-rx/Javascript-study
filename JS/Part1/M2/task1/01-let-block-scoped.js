// if(true){
//   // var uname = 'ming';
//   let uname = 'ming';
// }
// console.log(uname);

// for (var i = 0; i < 3; i++) {
//   for (var i = 0; i < 3; i++) {
//     console.log(i);
//   }
//   console.log('内层结束i = ', + i);
// }

// for (let i = 0; i < 3; i++) {
//   for (let i = 0; i < 3; i++) {
//     console.log(i);
//   }
//   console.log('内层结束i = ', + i);
// }

// var eles = [{}, {}, {}]
// for (var i = 0; i < eles.length; i++) {
//   eles[i].onclick = function () {
//     console.log(i);
//   }
// }
// eles[2].onclick()

// var eles = [{}, {}, {}]
// for (var i = 0; i < eles.length; i++) {
//   eles[i].onclick = (function (i) {
//     return function() {
//       console.log(i);
//     }
//   })(i)
// }
// eles[2].onclick()

// let eles = [{}, {}, {}]
// for (let i = 0; i < eles.length; i++) {
//   eles[i].onclick = function () {
//     console.log(i);
//   }
// }
// eles[2].onclick()

// for (let i = 0; i < 3; i++) {
//   let i = 'foo'
//   console.log(i);
// }

// let i = 0;
// if(i < 3){
//   let i = 'foo';
//   console.log(i);
// }

// i++
// if(i < 3){
//   let i = 'foo';
//   console.log(i);
// }

// i++
// if(i < 3){
//   let i = 'foo';
//   console.log(i);
// }

// i++
// console.log(i);


let foo = 'uzi';
console.log(foo);
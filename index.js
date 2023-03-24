// const s = 'abc';
// let q = `s is ${s}`;

// function hello(str) {}
// const a = 'asd';
// console.log('🚀 ~ a:', a);

// hello('asd');

// function log(str) {
//   const aaa = '123';

//   /**
//    *
//     TODO: ㅁㄴㅇㅇ
//     FIXME:ㅁㄴㅇㅇㅇ
//   */
// }

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('document is ready');
//   for (let i = 0; i < 5; i = i + 1) {
//     console.log('🚀 ~ i:', i);
//     document.getElementById(`span${i + 1}`).addEventListener('click', () => {
//       console.log(i + 1);
//     });
//   }
// });

// const a = [
//   { name: 'ugo', age: 30 },
//   { name: 'hwang', age: 40 },
//   { name: 'kang', age: 4 },
// ];

// class UArray extends Array {}
// const uarray = new UArray();

// UArray.prototype.findByName = (arr) => {
//   return arr.find((q) => q.name === 'ugo');
// };

// const name = uarray.findByName(a);

// console.log(name);

// uarray.

class A {
  name;
  constructor(name) {
    this.name = name;
  }
}

const a = new A('ugo');

function f1(x, y) {
  console.log(this.name, x, y);
}

f1(1, 2);
// f1.apply(a, [1, 2]);

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

// class A {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
// }

// const a = new A('ugo');

// function f1(x, y) {
//   console.log(this.name, x, y);
// }

// // f1(1, 2);
// // f1.apply(a, [1, 2]);

// f1.bind(a);

// f1(1, 3);
// window는 글로벌 변수 ,함수들 저장됨 글로벌 env는 widow를 참조함

// var name = 1;
// setTimeout(function () {
//   console.log(this.name);
// }, 1000);
// name = 100;
// function a() {
//   // setTimeout(() => {
//   //   console.log(this);//window
//   // }, 1000);
//   setTimeout(function () {
//     console.log(this); //timeout
//   }, 1000);
// }

// a();

// var g1 = 1;
// const c1 = 2;
// g3 = 4;
// function gfn(x) {
//   class A {
//     name;
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   const a = new A('ugo');
//   console.log(a.name);
//   var v1 = 3;
//   const c2 = 4;
//   g1 = 11;
//   function fn(g) {
//     const c2 = 5;
//     console.log(x + v1 + c2 + g + g1);
//     console.log(this);
//   }
//   fn(6);
// }
// gfn(100);

// class Animal {
//   constructor(name) {
//     this.name = name; // 따로 멤버변수를 선언하지 않고 this.변수로 멤버변수 정의
//   }

//   static age = 1; //static 변수 선언
//   static info() {
//     //static 함수 선언
//     console.log('Animal info');
//   }
// }
// class Dog extends Animal {
//   #sound = 'walwal'; //#을 붙히면 private 변수가 된다.
//   constructor(nm, da, col) {
//     super(nm);
//     this.dogAge = da;
//     this.color = col;
//     this.wal = function wal() {
//       console.log(this.#sound);
//     };
//   }
//   //getter 정의
//   get soundq() {
//     return this.#sound;
//   }
//   //setter 정의
//   set soundq(sound) {
//     this.#sound = sound;
//   }
// }
// class Jindo extends Dog {}
// const a = new Animal('human');
// const b = new Animal('monkey');
// const d = new Dog('jindo', 10, 'brown');
// const j = new Jindo('bakgu', 12, 'white');

// Dog.info();
// console.log(d.dogAge);
// console.log(d.color);
// d.soundq = 'wackwack'; //setter 호출
// const dogSound = d.soundq; //getter호출
// console.log(dogSound); //wackwack
// console.log(j.sound);

// const a = 'abc,def';

// const [b, c] = a.split(',');

// console.log(b);
// console.log(c);

// function aq() {
//   return [10, 20];
// }

// const [x, y] = aq();
// console.log(x);
// console.log(y);

// const a = [1, 2, 3];
// const b = a.splice(1);
// console.log(b);

// const a = [1, 'f', [1, 2]];
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

const a = [1, 2, 3];
const c = new Array(1, 2, 3); //[1,2,3]
const b = new Array(1); //[1 empty items]
a.length = 4; //[ 1, 2, 3, <1 empty item> ]

console.log(a);
//

// const s = 'abc';
// let q = `s is ${s}`;

// const moment = require('moment');

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

// const a = [1, 2, 3];
// const c = new Array(1, 2, 3); //[1,2,3]
// const b = new Array(1); //[1 empty items]
// a.length = 4; //[ 1, 2, 3, <1 empty item> ]

// console.log(a);
// //

// const d = new Date();
// console.log(d);
// const dh = d.getHours();
// console.log('🚀 ~ dh:', dh);
// const dm = d.getMinutes();
// console.log('🚀 ~ dm:', dm);
// const ds = d.getSeconds();
// console.log('🚀 ~ ds:', ds);
// let dd = d.getDay();
// console.log('🚀 ~ dd:', dd);
// const dms = d.getMilliseconds();
// console.log('🚀 ~ dms:', dms);
// dd = 0;
// if (!dd % 6) {
//   console.log(d.toLocaleString());
//   console.log('weekend');
// } else {
//   console.log('not weekend');
// }

// const ls = d.toLocaleString('ko-KR');
// console.log('🚀 ~ ls:', ls);

// m = moment();
// const dddd = m.format('dddd');
// const addDay = m.add(2, 'day').format('dddd');
// console.log('🚀 ~ addDay:', addDay);
// console.log('🚀 ~ dddd:', dddd);

// const str = `const str = 'qwe Asd 12 asd';
// const phoneNum = '010-9115-0444';
// const phoneRe = new RegExp(/\d{2,3}-\d{4}-\d{4}/);
// console.log('phoneNum=', phoneRe.test(phoneNum));
// const email = 'stau04@@gmail.com';
// const emailRe = new RegExp(/^[0-9A-Za-z]+@.[-\w\.]/);
// console.log('emailRe', emailRe.test(email));
// const a = str.match(/\D{3,3}\s/gi);
// const rpl = str.replace(/asd/gi, '');
// console.log('🚀 ~ rpl:', rpl);
// console.log(a);`;

// const user = 'userName groupName';
// const userSplit = str.split(' ');
// console.log('🚀 ~ userSplit:', userSplit);
// userSplit.forEach((us) => {
//   let snake = us.replace(/.[A-Z]/m, (m) => `${m[0]}_${m[1].toLowerCase()}`);
//   console.log('🚀 ~ snake:', snake);
// });

// const sb = Symbol();
// console.log('🚀 ~ sb:', sb);

// const Blood_TYPE = Object.freeze({
//   A: Symbol.for('A'),
//   O: Symbol.for('O'),
//   B: Symbol.for('B'),
//   AB: Symbol.for('AB'),
// });
// const keys = Object.keys(Blood_TYPE);
// console.log('🚀 ~ keys:', keys);
// const isF = Object.isFrozen(Blood_TYPE);
// console.log('🚀 ~ isF:', isF);
// Blood_TYPE.A = Symbol();

// console.log('🚀 ~ b:', Blood_TYPE.A);
// const arr = new Array();
// const set = new Set();
// const map = new Map();
// const obj = {
//   [Symbol.iterator]() {
//     return {
//       next() {
//         const value = 3;
//         return { value };
//       },
//     };
//   },
// };
// const isIterable1 = typeof arr[Symbol.iterator] === 'function';
// console.log('🚀 ~ isIterable1:', isIterable1);
// const isIterable2 = typeof set[Symbol.iterator] === 'function';
// console.log('🚀 ~ isIterable2:', isIterable2);
// const isIterable3 = typeof map[Symbol.iterator] === 'function';
// console.log('🚀 ~ isIterable3:', isIterable3);
// const isIterable4 = typeof obj[Symbol.iterator] === 'function';
// console.log('🚀 ~ isIterable4:', isIterable4);
// it = obj[Symbol.iterator]();
// console.log(it.next());

// const arr2 = new Array(1, 2, 3);

// const sum = (args) => {
//   let sum = 0;
//   [...args].reduce((x, y) => {
//     sum = x + y;
//   });
//   return sum;
// };

// console.log('arr2', sum(arr2));
// console.log('...arr2', sum([...arr2]));
// const u = { id: 1, name: 'ugo' };
// const uu = { id: 11, name: 'ugo2' };
// const uuu = new Object({ id: 1, name: 'ugo' });
// const b = { ...u, addr: 'seoul' };
// const bb = { ...b, ...uu };
// console.log('🚀 ~ bb:', bb);
// console.log('🚀 ~ b:', b);
// // const arr = [...uuu];
// console.log('🚀 ~ arr:', arr);

// const a = [1, 2, 3];
// const aa = [...a];
// console.log('🚀 ~ aa:', aa);
// const b = { a: 1, b: [1, 2, 3] };
// const bb = { ...b, b: [...b.b] };
// b.b[0] = 4;
// console.log('🚀 ~ bb:', bb);

// const $ele = document.getElementById('qwe');
// console.log('$ele', $ele);
// console.log(Node.ATTRIBUTE_NODE);
// console.log(Node.DOCUMENT_NODE.toString());

// const debounce = (cb, delay) => {
//   let timer;
//   return (e) => {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(cb, delay, e);
//     console.log(timer);
//   };
// };

// function asd() {
//   const a = 'asd';
//   return function () {
//     console.log(a);
//   };
// }

// const saveChange = debounce(() => {
//   console.log('db');
// }, 500);
// function debounce(func, timeout = 300) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, timeout);
//   };
// }

// document.querySelector('.inp').addEventListener('keydown', (e) => {
//   saveChange();
// });

// const f1 = () => 4;
// const f2 = () => 5;
// const f3 = () => 6;

// const a = Promise.allSettled([f1(), f2(), f3()]).then((r) => {
//   console.log(r);
// });
// a.then();

// const p = new Promise((resolve, reject) => {
//   const a = 4;
//   async function f() {
//     const fr = f();
//     return 5;
//   }
//   if (a === 4) {

//     return resolve(fr + 4);
//   } else {
//     return reject(2);
//   }
// });

// const r1 = p
//   .then((a) => console.log(a))
//   .catch((a) => {
//     console.log(a);
//   })
//   .finally(console.log('fin'));
// const r2 = r1 + 5;
// console.log('🚀 ~ r2:', r2);

// function* f() {
//   yield 1;
//   yield 2;
// }

// let gen = f().next();
// let gen2 = f().next();

// console.log('🚀 ~ gen:', gen);
// console.log('🚀 ~ gen2:', gen2);

// const f1 = () => {
//   let i;
//   for (i = 0; i < 100; i++) {
//     i += i;
//   }
//   return i;
// };
// const f2 = () => {
//   const ff = f1();
//   let i;
//   for (i = 0; i < 100; i++) {
//     i -= i;
//   }
//   return ff + i;
// };
// const f3 = () => {
//   const ff = f2();
//   return ff + 6;
// };

// const c = f3();
// console.log('🚀 ~ c:', c);

const checkSameWord = (ans) => lastWordsArr.find((w) => w === ans);
const isMatch = (ans, ques) => {
  return ans.startsWith(ques[ques.length - 1]) && ans.startsWith !== ''
    ? true
    : false;
};

const players = ['p1', 'p2', 'p3'];
let count = 0;
let turn = players[count];
let ans = '단어입력';
let ques = '';

const lastWordsArr = [];

while (true) {
  ans = prompt(turn + ':' + ques);
  if (checkSameWord(ans)) {
    alert(`${turn}이 말한 ${ans}는 이미 사용된 단어입니다.${turn} loose`);
    break;
  }
  lastWordsArr.push(ans);
  if (count !== 0) {
    if (isMatch(ans, ques)) {
      console.log('ok');
    } else {
      alert(`${ans}는 규칙에 맞지 않습니다. ${turn} loose`);
      console.log('fail');
      break;
    }
  }
  ques = ans;
  count++;
  if (count === 3) {
    count = 0;
  }
  turn = players[count];
}

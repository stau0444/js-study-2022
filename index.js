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

document.addEventListener('DOMContentLoaded', () => {
  console.log('document is ready');
  for (let i = 0; i < 5; i = i + 1) {
    console.log('🚀 ~ i:', i);
    document.getElementById(`span${i + 1}`).addEventListener('click', () => {
      console.log(i + 1);
    });
  }
});

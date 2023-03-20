# Javascript_study_2022

```
***
youtube 시니어코딩님의 javascript 강의를 요약한 내용입니다.
***
```

<!-- prettier-ignore-start -->

- Javascript\_study\_2022
  - [편리한 vscode extension](#편리한-vscode-extension)
  - [web 개발용 extension](#web-개발용-extension)
  - [Javascript용 extension](#javascript용-extension)
  - [ESlint](#eslint)
- 변수와 상수
  - [1.cpu\&memory](#1cpumemory)
  - [2.Declaration과 Definition](#2declaration과-definition)
  - [3.변수(var,let)과 상수(const)](#3변수varlet과-상수const)
  - [4.scope와 존재](#4scope와-존재)
  - [5.호이스팅과 scope chain](#5호이스팅과-scope-chain)
  - [6.데이터 타입 , 변환](#6데이터-타입--변환)
- 함수
  - [1.함수란?](#1함수란?)
  - [2.Declaration과 Definition](#2declaration과-definition)
  - [3.변수(var,let)과 상수(const)](#3변수varlet과-상수const)
  - [4.scope와 존재](#4scope와-존재)
  - [5.호이스팅과 scope chain](#5호이스팅과-scope-chain)
  - [6.데이터 타입 , 변환](#6데이터-타입--변환)
  <!-- prettier-ignore-end -->

## 편리한 vscode extension

- gitlens (git 관리 툴)
- bracket pair (bracket color 설정)
- indent-rainbow
- code spell Checker (코드 스펠링 체크)
- better comments (주석을 편리하게 달 수 있도록 돕는다)
- TODO highlight (todo , fixme 주석 하이라이트 기능)
- code spell Checker
- Auto-Open Markdown Preview (마크다운 프리뷰 제공)
- REST-client (RESTFUL API 호출 클라이언트 가볍게 사용가능)
- cobalt2 ,winter is commit (vscode theme 변경)
- material icon (파일 아이콘 theme)
- advance new file (파일 생성 편리하게 함) setting keyboard shortcut commend + n 으로 변경하여 더 편하게 사용
- file utils (파일 refactor)

## web 개발용 extension

- live sass (sass를 css로 자동으로 live로 변환해준다 , settings.json에 생성경로 지정, mapfile false 설정해 사요)
- open in browser (파일 브라우저에서 열기)
- auto rename tag (태그 열림 닫힘 한번에 바뀜)
- html css supporter (css에 생성한 class 등을 태그에서 자동으로 추천)
- intellisense css (사용된 class는 추천리스트에서 없앤다)
- css peek (html에서 css 정의 보여준다. cmd + click class)
- polacode(코드를 이미지로 뽑아낸다.)

<img width="400" alt="스크린샷 2023-03-19 오전 5 46 55" src="https://user-images.githubusercontent.com/51349774/226138689-ad8a969e-49e5-4220-b47f-42423809dedc.png">

## Javascript용 extension

- prettier (js code를 자동으로 포맷팅해준다 setting에서 format on save , format on paste 체크 , single quote , semi colon 등 검사)
- code snippets (javascript 관련 코드 스닙팻 제공)
- turbo shortcut(log 편리하게 찍음 shift alt c :파일내 로그 전체 주석 u: 주석해제 ,d:로그 삭제)
- quokka (메서드에서 사용되는 변수를 출력해준다 , 설치후 start from current file로 init)

## ESlint

- 코드스타일을 자동으로 잡아준다 ,airbnb의 코드스타일이 많이 사용된다.
- npm install eslint -g
- npm i -D prettier eslint-plugin-prettier eslint-config-prettier
- npx install-peerdeps --dev eslint-config-airbnb-base
- eslint --init (eslint 초기화)

---


# 변수와 상수
## 1.cpu&memory

- cpu는 트랜지스터의 집합이다. 트랜지스터는 전기신호를 통해 1과0을 표현 한다.
- or and xor 세가지 연산으로 모든 연산을 한다.
- 연산에 사용되는 모든 데이터는 메모리에 저장된다.
- 메모리의 최소단위를 cell이라 부르며 cell은 1byte로 8개의 1과0을 담을 수 있다.
- cpu와 메모리의 속도차이로인해 cpu에 cache라는 저장공간이 존재한다.
- java, js와 같은 고수준 언어는 compile과정을 거쳐 vm(virtual machine)에서 사용되는 byte code로 변환되고
- 변환된 byte code는 링크과정을 거쳐 cpu가 사용할 수 있는 기계어(machine language)로 변환된다.

```
//고수준언어(java , js ...)
x = 2 + 3;

▼
▼  변환
▼

//Assembly
PUSH 2 [1] // 2라는 값이 1번 메모리에 저장
PUSH 3 [2] // 3이라는 값을 2번 메모리에 저장
LOAD [1]   // 1번의 값을 가져온다
ADD [2]    // load 한값고 2번 메모리의 값을 더한다
STORE [12] // 12번에 연산된 값을 저장한다
```

---

## 2.Declaration과 Definition

- 선언(Declaration) : JS엔진에 식별자의 존재를 알린다 (메모리에 번지수를 잡아놓는다).
- 정의(Definition) : 선언 후 메모리에 값을 할당(Assign)한다.
- js에서는 선언만하면 undefined가 setting되기 떄문에 선언과 정의가 같다고 할 수 있다.
- 식별자는 변수의 이름을 말하고 글자 , $ , \_ ,unicode 문자로 시작할 수 있다. (예약어는 안됨)
- 리터럴은 값을 만드는 방법을 말한다 숫자 ,문자, boolean , null, undefined ,객체 ,배열 ,함수,정규표현식등이 리터럴로 사용된다.

```
var x = 1;

//x는 식별자(identifier)
//1은 리터럴(literal)

```

---

## 3.변수(var,let)과 상수(const)

- es5이전에서는 var를 사용했고 , es6부터 const,let이 사용됬다.
- var는 함수 scope , let과 const는 block scope를 갖는다.
- const는 상수를 의미하고 한번 할당되면 변경할 수 없다.

---

## 4.scope와 존재

- var는 함수 밖에서 존재하고 const,let은 함수 선언된 블럭 안에서만 존재한다.
- var의 단점은 함수 속에서 모두 접근이 가능하기 떄문에 오해를 일으킬 수 있다.
- scope는 동적측면 , 레벨 측면 두가지 기준으로 구분된다.
- 동적 측면으로는 정적 ,동적 스코프가 있다.
- 레벨 측면으로는 전역/지역 , 함수/블럭 스코프가 있다.
- 변수는 스코프 내에 존재한다.
- 동적 스코프는 실행순서에 따라 변수가 결정된다.
- 정적 스코프는 선언된 순서에 따라 변수가 결정된다.

> lexical scope vs dynamic scope

```js
예시 1)
var x = 1; // 전역변수
console.log('x >>', x);

function printX() {
  console.log('printX> ', x);
}

function main() {
  //여기서 x는 함수 스코프를 갖는다
  var x = 2;
  printX();
}
main(); // 정적 : 1 동적 :2

예시2)

document.addEventListener('DOMContentLoaded', () => {
  console.log('document is ready');
  for (var i = 0; i < 5; i = i + 1) {
    //i가 var로 선언되어 실제 클릭 이벤트가 일어날때 찍히는 값은 6이된다.
    console.log('🚀 ~ i:', i);
    document.getElementById(`span${i + 1}`).addEventListener('click', () => {
      //let으로 선언하면 i는 이 함수 안에서 보호받는다.
      console.log(i + 1);
    });
  }
});
```

> functional scope vs block scope

```js
function fbScope() {
  const t = true;
  // layer 1
  if (t) {
    console.log('inside if block');
    var v = 1;
    const x = 3;
    console.log(v, x); // 1 3
  }
  //x는 block 밖에 존재하기 때문에 undefined가 표시된다.
  //v는 block에서 선언됬지만 함수 스코프를 갖기때문에 number가 찍힘
  //v는 함수스코프이기 때문에 함수내에서 호이스팅이 일어나 layer 1 수준까지 올라간다.
  console.log(typeof v, typeof x); // number undefined
}
//함수 실행
fbScope();
```

---

## 5.호이스팅과 scope chain

- js와 같은 함수형 언어는 다 정적 스코프를 갖는다.
- js에서는 var let const function 모두 호이스팅이 적용된다.
- 각각의 scope에 따라 호이스팅이 이뤄진다.
- scope chain은 가시성(visibility)를 말하며 외부에서는 내부 변수에 접근을 불가하도록 하는것을 말한다.

```js
//위치1
console.log('x1>>', x);
x = 1;
//호이스팅이 일어나기 떄문에 x는 위치1에 선언된 것과 같다.
var x;

//함수도 호이스팅이 일어나기 때문에 실행이 가능하다.
f1();

function f1() {
  //y접근 불가
  console.log(y);
  function f2() {
    var y = 2;
    function f3() {
      //y 접근가능
      console.log(y);
    }
    f3();
  }
  f2();
}
```

---

## 6.데이터 타입 , 변환

> 원시 타입(primitive, immutable) call by value

- 숫자 , 문자열 ,불리언 , Null ,undefined , symbol
- 숫자(double : 8B , int/float: 4B , Infinity, NaN)
- 문자(알파벳 1B , Unicode 3B , Emoticon : 3~6B)
- 문자열 Backtick(Template Literals)

> Object(Mutable) 타입 call by Reference

- Array, Date, RegExp , Map, WeakMap , Set,WeakSet


> undefined 와 null의 차이

- undefined는 메모리에 값을  저장할  셀 주소만 잡아놓는다. 그 셀은 비워져 있을 수도 있고 garbage가 있을 수도 있다.
- null은 메모리에 저장될 셀을 아예 비운다. 직접 비우진 않고 gc 될 수 있도록한다. 

---
# 함수
## 함수선언과 함수 표현식

- 함수 선언문은 호이스팅 대상이 된다.
- 함수도 오브젝트다
- 함수 선언은 static영역에 표현식은 heap에 잡힌다.
- 함수는 엔진에 의해 평가와 실행이 이뤄진다.
- 함수 선언은 소스코드에 대해 평가가 이뤄지지만 함수 표현식은 실행되기 전까지 평가가 이뤄지지 않는다.
- 함수 표현식에서 함수는 실행될때 인스턴스화되어 heap에 잡힌다. 그전까지는 undefined 상태이다.
- new Function()으로 생성된 함수는 클로저가 적용되지 않는다.
- 함수 안에서 arguments라는 변수에 함수호출시 들어오는 인수의 배열이 담겨있다.

```js
//함수 선언
function a(){
  console.log('함수선언');
}
//함수 표현식
const a = function(){
  console.log('표현식')
}
```

## 호이스팅
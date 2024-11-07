// 함수
// 1. 함수 선언하기
// 함수 선언식
hello1(); // 함수 호출 먼저 해도 호이스팅 일어나 정상적으로 작동함

function hello1() {
  console.log("hello1");
}

// 함수 표현식
// 호이스팅 안됨/ 호이스팅 : 함수 선언문이 코드 최상단으로 끌어올려짐
const hello2 = function () {
  console.log("hello2");
};
hello2(); // 함수 호출 방법은 동일

// return
// 함수를 호출한 곳으로 값을 반환 및 종료
function h1() {
  return "hello";
  console.log("world");
  // return 후 함수가 종료되므로 return 아래의 코드는 실행되지 않음
}
console.log(h1());

function h2() {
  return; // undefined
}
console.log(h2());

function h3() {
  console.log("hello");
  return 1;
  return 2; // 실행 안됨
}
console.log(h3());

// 매개변수
// 함수 안에서만 사용하는 변수. 인수를 받음
function sum(x = 0, y = 0) {
  return x + y;
}
console.log(sum(1, 2)); // 3
console.log(sum(5)); // 기본값 미설정 시 5 + undefined = NaN

// 함수의 구조 분해
// 객체 분해
const user = {
  name: "윈터",
  age: 24,
};

function getName({ name, age, email = "이메일이 없습니다." }) {
  // const { name, age } = props;
  console.log(name);
  console.log(`${name}는 ${age}살입니다.`);
  console.log(email);
}
getName(user);

// 배열 분해
const animals = ["dog", "cat", "fox"];
function getSecond([, b = "없음"]) {
  // const arr = ["dog", "cat", "fox"];
  // const [a, b, c] = arr;
  // const [, b] = arr;
  console.log(b);
}
getSecond(animals);

// 나머지 매개변수
function print(...num) {
  // 배열의 형태로 저장됨
  console.log(num);
}
print(1, 2, 3, 4, 5);

// 화살표 함수
// function hello() {}
// hello();

// const hello3 = function () {};
// hello3();

const hello4 = () => {
  console.log("hello4");
};
hello4();

// 화살표 함수의 축약
const a = () => {};
const b = (x) => {};
// 매개변수 1개일 때 괄호 생략 가능(하나 프리티어가 붙여줌..)
const c = (x, y) => {};
// 매개변수가 여러개일 때는 괄호 생략하면 안됨
const d = (x, y) => x + y; // { return x + y }
// return으로 시작할 때는 return과 중괄호 생략 가능
const e = (x, y) => {
  console.log("hello");
  return x + y;
  // return 외에 다른 코드가 있는 경우 중괄호 생략 불가
};
const f = () => ({ name: "윈터" });
// return {객체} 일 때 return, 중괄호 생략 가능하나 소괄호로 감싸야 함
const g = () => [1, 2, 3];
// return [배열] 도 return, 중괄호 생략 가능

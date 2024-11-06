// 1. string (문자열)

const string1 = "hello";
const string2 = "javascript";
const string3 = `world ${string1} ${string2}`;
console.log(string3);
const string4 = "world" + string1 + string2;
console.log(string4);
// 백틱 사용 권장(리터럴 방식)

// 2. number (숫자)
const number1 = 123;
console.log(number1);
console.log(number1 + 1);
console.log(typeof number1);

// 3. boolean (참/거짓)
const boolean1 = true;
const boolean2 = false;

if (boolean1) {
  console.log("참");
}
// if (boolean2) {
//   console.log("참");
// }

// 4. array (배열)
const array1 = [1, 2, "dog"];
console.log(array1);
console.log(array1[0], array1[2]);
console.log(array1.length);
console.log(array1[array1.length - 1]);

// 5. object (객체)
// css 형태 생각하면 댐
const user = {
  name: "코코",
  age: 20,
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(`${user.name}는 ${user.age}살입니다.`);

const userA = {
  name: "겨울",
  age: 2,
};
console.log(userA);
console.log(userA.name, userA.age);
console.log(`${userA.name}이는 ${userA.age}살입니다.`);

const userB = {
  name: "뚜또",
  age: 100,
  parent: userA,
};
console.log(userB);
console.log(userB.parent.name);
console.log(userB["parent"]["name"]);
// 대괄호표기법은 많이 쓰진 않음

// 객체형태를 배열로 저장
const users = [userA, userB];
console.log(users);
console.log(users[0]);
console.log(users[0].name);
console.log(users[0]["name"]);

// 6. function (함수)
// 함수 선언식(기명함수) : function 함수이름(매개변수) {실행할 내용}
function add(a, b) {
  console.log(a + b);
}
add(1, 3); // 함수 실행(call) : 함수이름(인수);

// 함수 표현식(익명함수)
const add2 = function (a, b) {
  console.log(a + b);
};
add2(1, 2); // 실행 방법은 선언식으로 선언했을 때와 같음

// 화살표 함수 (es6+ version에서 사용/ css3, html5, es6가 최신)
const add3 = (a, b) => {
  console.log(a + b);
};
add3(1, 4);

// typeof로 데이터타입 확인 가능 : typeof 123 => number
// 숫자.toFixed(1) : 소수점자리 지정 --ex)소수점1자리까지

// null / undefined 차이
// null : property에 값을 할당하고 싶지 않을 때 넣을 수 있음

// === : 일치 연산자(데이터형태까지 같아야 같다고 판단함)
// == : 동등 연산자(문자 1과 숫자 1도 같다고 판단함), false와 0, true와 1도 같다고 판단

// truthy, falsy
// falsy : false, 0, '', null, undefined, NaN(not a number: 문자+숫자 더한경우 등)

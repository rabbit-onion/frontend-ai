// typescript

let hello: string = "Hello Wolrd!";
hello = "ddd";

console.log(hello);

// ===================================
// 구문

// 변수명: 타입 = 값;
const str: string = "hello";
const num: number = 10;
const bool: boolean = true;
const arr: number[] = [1, 2, 3];
const tuple: [string, number] = ["one", 1];
const obj: { name: string; age: number } = { name: "kim", age: 20 };

// 값을 추론해 타입을 인식하므로 실무에서는 타입을 굳이 명시하지 않기도 함

// ===========================================
// 함수
// function 함수이름(매개변수: 타입): 반환코드의타입 {반환코드}
function hello2(name: string): void {
  console.log(name);
}
hello2("가나디");
// void -> return값이 없는 경우??

function hello3(name: string): string {
  return name;
}
console.log(hello3("고냐니"));
// 반환값도 추론 가능하므로 return 값의 string 타입도 생략할 수 있음

// 함수 표현식
const hello4 = function (age: number): number {
  return age;
};
console.log(hello4(14));

// 화살표 함수
const hello5 = (name: string): string => {
  return `안녕! ${name}`;
};
console.log(hello5("사이다"));

// ============================================
// interface
// 객체의 공통 타입 지정
interface User {
  name: string;
  age: number;
}

const user1: User = { name: "kim", age: 20 };
const user2: User = { name: "jeong", age: 10 };

// ================================================
// 객체 타입
const a: { name: string; age: number } = { name: "kim", age: 20 };
const b: { name: string; age: number } = { name: "jeong", age: 17 };

// interface 를 사용해 객체의 공통 타입 지정
interface Ab {
  name: string;
  age: number;
}

const aa: Ab = { name: "kim", age: 20 };
const bb: Ab = { name: "jeong", age: 17 };

// =========================================================
// 배열 타입
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ["가", "나", "다"];
const arr3: any[] = [1, "가", true];
// any : 모든 타입 가능

// =========================================================
// 객체 배열 타입
interface User {
  name: string;
  age: number;
}

const user: User[] = [
  { name: "김가을", age: 2 },
  { name: "김겨울", age: 3 },
];

// 객체 내부에 객체가 있을 때
interface Address {
  city: string;
  dong: string;
}

interface User3 {
  name: string;
  age?: number;
  address: Address;
}
// ? 표시된 값은 사용하지 않아도 에러 x,
// ? 표시 없이 해당 값이 사용되지 않으면 오류 남

const user3: User3 = {
  name: "코코",
  // age: 6,
  address: {
    city: "Incheon",
    dong: "Dong-gu",
  },
};

// ===========================================================
// 일반 함수
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(1, 2));

// 화살표 함수
const sum2: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
console.log(sum2(10, 5));

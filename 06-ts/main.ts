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

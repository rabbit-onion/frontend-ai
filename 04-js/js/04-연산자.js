// 1. 산술 연산자
// 나누기 연산자 : 나누기한 값의 몫 출력
console.log(10 / 2);

// 나머지 연산자 : 나누기한 값의 나머지값 출력
console.log(10 % 3);
// 보통 6 % 3 = 0 값으로 마지막요소 선택할 때 많이 씀

function isEven(num) {
  console.log(num % 2 === 0);
}
isEven(4); // true
isEven(3); // false

// 2. 할당 연산자
let a = 1;
// a = a + 1;
a += 1; // 윗줄의 코드와 같은 의미임
console.log(a);

// 3. 증감 연산자
let b = 1;
// b++;
// console.log(b++); // 숫자++ : 선출력 후연산
// console.log(b);
console.log(++b); // ++숫자 : 선연산 후출력
// -- 의 경우에도 같음

// 4. 부정 연산자 : !데이터 ==> 데이터의 반대인 boolean형으로 결과 출력
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false
console.log(!!0); // false

// 5. 비교 연산자
const c = 1;
const d = "1";
const e = 2;

// == : 동등 연산자, 데이터형태가 달라도 형변환이 일어나 같다고 판단
console.log(c == d); // true
// === : 일치 연산자, 형변환x, 데이터형태까지 같아야 같다고 판단
console.log(c === d); // false
console.log(c !== d); // true
console.log(c > e); // false
console.log(c <= e); // true

// 6. 논리 연산자
// and 연산자 (&&)
// 조건이 둘 다 참일때만 참
// 빈 배열, 빈 객체, 빈 함수는 참임
const f = true;
const g = true;

if (f && g) {
  console.log("이민 가능함");
}
// && 연산자를 기준으로 가장 먼저 만나는 거짓값(falsy)을 반환
console.log(true && true); //true
console.log(true && false); // false
console.log(1 && 0 && ""); // 0
console.log(1 && 2 && 3); // 모두 참인 경우 마지막값 반환

// or 연산자 (||)
// 둘 중 하나만 참이면 참, 가장 먼저 만나는 참 값을 반환
console.log(true || false); // true
console.log("" || "이메일 없음"); // 이메일 없음
console.log(false || 0 || null); // null : 모두 false면 마지막값 반환

// nullish 병합 연산자 (??)
// null 또는 undefined일 때만 false로 판단, 처음 만나는 참 값을 반환
const h = 0;
console.log(h || 5); // 5
console.log(h ?? 5); // 0
console.log(null ?? 5); // 5
console.log(undefined ?? null); // null

// 7. 삼항 연산자
// 조건 ? 참일 때 : 거짓일 때
console.log(false ? "참" : "거짓"); // 거짓

const i = 10;
if (i > 5) {
  // 조건이 참일 때 실행
  console.log("이민 가능");
} else {
  // 조건이 거짓일 때 실행
  console.log("이민 불가능");
}

console.log(i > 5 ? "이민 가능" : "이민 불가능");

// ex. 고양이 맞는지 확인하는 함수
function isCat(a) {
  console.log(a === "고양이" ? "고양이" : "고양이 아님");
}
isCat("고양이"); // 고양이
isCat("강아지"); // 고양이 아님

// 8. 전개 연산자
// 객체 복사
const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3 };
console.log(obj2);

// 배열 복사
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// 두 배열 합치기
console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6]
console.log([...arr1, ...arr2]); // [1, 2, 3, 4, 5, 6]

// 배열을 함수 인자 전달 시에도 전개 사용 가능
function sum(a, b) {
  console.log(a + b);
}
const numbers = [2, 3];
// sum(2, 3);
// sum(numbers[0], numbers[1]);
sum(...numbers);

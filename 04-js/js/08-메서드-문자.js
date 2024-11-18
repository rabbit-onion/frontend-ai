// 메서드 문자
const str = "hello world";

// length : 문자열의 갯수 반환(띄어쓰기 포함)
console.log(str.length); // 11

// ==========================================================
// includes : 해당 문자열이 존재하는지 확인 - true/false값 반환
console.log(str.includes("hello")); // true
console.log(str.includes("kiki")); // false
console.log(str.includes("Hello")); // false : 대소문자 구분함

// =============================================================
// padStart/padEnd : 문자열이 지정 갯수보다 짧을 때 앞/뒤쪽으로 지정한 문자열로 채움
const str2 = "12345";

console.log(str2.padStart(10, "0")); // 0000012345
console.log(str2.padEnd(10, "0")); // 1234500000
console.log(str2.padEnd(3, "0")); // 12345 : 문자열의 길이가 지정 숫자보다 클 때는 문자열 그대로 반환

// ================================================
// replace(대상 문자열, 바꿀 문자열)
const str3 = "hello winter winter";

console.log(str3.replace("winter", "fall")); // hello fall winter
// 해당되는 첫번째 문자열만 변경함

console.log(str3.replace(/winter/g, "fall")); // hello fall fall
// 해당되는 문자열을 모두 바꿈

console.log(str3); // hello winter winter
// 원본은 수정되지 않고 출력 시에만 대치됨

// slice(a, b) : a부터 b 직전의 문자까지 반환
const str4 = "hello world";
console.log(str4.slice(0, 5)); // hello
// 인덱스 0부터 5전까지(4까지)의 문자열 반환

console.log(str4.slice(6)); // world
// 6부터 그 뒤의 모든 문자열 반환

console.log(str4.slice(-5)); // world
// 뒤에서 5번째부터 그 뒤의 모든 문자열 반환
// 인덱스는 맨 뒤가 -1부터 시작

console.log(str4); // hello world
// 원본은 변경되지 않음

// ============================================================
// split : 해당 문자열을 기준으로 배열로 나눔
const str5 = "Spring, Summer, Fall, Winter";

console.log(str5.split(", ")); // ["Spring", "Summer", "Fall", "Winter"]

// ===============================================================
// toUpperCase/toLowerCase : 대/소문자 변환
console.log(str5.toLowerCase());
console.log(str5.toUpperCase());

// ===========-------------------------------------
// trim : 앞뒤 공백 제거
const str6 = " hello world ";

console.log(str6.trim()); // hello world

// ##################################################
// 숫자 메서드

// =============================================
// toFixed(num) : 지정 숫자만큼 소숫점 자리 표시
const num = 3.1415926535;
console.log(num.toFixed(2)); // 3.14

// =============================================
// toLocalString : 표준 숫자 형식으로 변환(1000 -> 1,000)
const num2 = 10000000;
console.log(num2.toLocaleString() + "원"); // 10,000,000

// ========================================================
// Number.isInteger(숫자) : 해당 숫자가 정수인지 확인 - true/false 반환
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(3.14)); // false

// =============================================
// Number.isNaN() : 해당 데이터가 NaN인지 확인 - true/false 반환
console.log(Number.isNaN(1)); // false
console.log(Number.isNaN(NaN)); // true

// ===========================================
// Math.abs() : 숫자의 절대값 반환
console.log(Math.abs(-10)); // 10
console.log(Math.abs("-10")); // 10
// 문자로 입력해도 숫자로 반환

// ==============================================
// 랜덤 메서드 : Math.random()
// 0~1 사이의 난수 반환
console.log(Math.random());

// 특정 범위의 랜덤 정수 반환 함수
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(1, 10));

// ==============================================
// Math.round : 소수점 반올림한 정수 반환

console.log(Math.round(10.49));

// ##################################################
// 날짜 메서드 : 월, 요일은 0부터 시작(일요일 0)

// 현재 시간 출력
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

// 시간 설정(연, 월(0부터11), 일, 시, 분, 초)
const now2 = new Date(2024, 4, 5, 12, 30, 30);
console.log(now2);

// ###################################################
// 배열 메서드

const arr = [1, 2, 3];

// arr.length : 배열의 길이 반환
console.log(arr.length); // 3

// arr.at(n) : 특정 위치의 값 반환
console.log(arr[0]); // 1
// 0번째 값 반환
console.log(arr.at(0)); // 1
// 뒤에서 첫번째 값 반환
console.log(arr.at(-1)); // 3

console.log(arr[arr.length - 1]); // 3

// 1보다 큰 수 새로운 배열로 반환
console.log(arr.filter((item) => item > 1));

const users = [
  { name: "홍길동", age: 36 },
  { name: "고길동", age: 12 },
  { name: "둘리", age: 6 },
];

// 배열이름.filter((item) => {return 조건})
const children = users.filter((item) => item.age < 8);
console.log(children);

// 고길동 찾기
// 배열이름.find((item)=>{return 조건})
// item = { name: "고길동", age: 36 }
const 고길동 = users.find((item) => {
  return item.name === "고길동";
});
console.log(고길동.name);

// 배열이름.forEach((item) => {실행문})
const list = ["list1", "list2", "list3"];
arr.forEach((item) => {
  console.log(item);
});

// 구조 분해 할당
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식

// 배열의 구조 분해
const arr = [1, 2, 3];
// console.log(arr[0], arr[1], arr[2]); // 1 2 3
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
const [a, b, c] = arr;
console.log(a, b, c);
// const [, b, c] = arr;
// a값을 쓰지 않아도 a자리를 비우면 처음부터 순서대로 할당되므로 빈칸,으로 구분해줘야함

// 재할당
let x = 0;
let y = 0;
const arr1 = [1, 2];
[x, y] = arr1;
console.log(x, y); // 1 2

// 나머지 할당
const arr2 = [1, 2, 3, 4, 5];
const [d, ...rest] = arr2;

console.log(d, rest); // 1 [2, 3, 4, 5]

// ====================================================================
// 객체의 구조 분해
const mini = {
  w: 100,
  // h: 200,
  bg: "red",
};
// const { bg, w, h } = mini;
// 객체는 이름으로 구분해 순서 상관없이 이름만 property명과 똑같이 넣어줘도 됨

const { bg, w: width, h = 100 } = mini;
// 변수이름: 새 변수이름 / 변수를 받아서 새 변수이름으로 사용, 이후 새 변수이름으로만 사용 가능
// 변수이름 = 값 : 값이 전달되지 않았을 때 지정한 값으로 설정

// console.log(mini.w, mini.h, mini.bg);
console.log(width, h, bg);

// ===================================================================
// 선택적 체이닝 : 남용x, 꼭 필요할 때만 쓰기
const user = null;
// console.log(user.name); // 해당 정보가 없으므로 에러
console.log(user?.name); // 해당 값이 없어도 에러가 나지 않고 undefined로 반환

const user1 = {
  name: "Mike",
  age: 30,
};
const user2 = {
  name: "Mija",
};
// console.log(user2?.age); // 근데 얘는 왜 ?안해도 되지..?

function printAge(user) {
  console.log(user?.age || "나이 정보 없음");
}
printAge(user1); // 30
printAge(user2); // undefined

// ==================================================================
// 조건문
// if문
// if (조건) {
//   // 조건이 참일 때 실행
// } else if (조건2) {
//   // 조건2가 참일 때 실행
// } else {
//   // 조건이 거짓일 때 실행
// }
function isPositive(num) {
  console.log(num);
  if (num > 0) {
    console.log("양수입니다.");
  } else if (num < 0) {
    console.log("음수입니다.");
  } else {
    console.log("0입니다.");
  }
}

isPositive(5);
isPositive(-2);
isPositive(0);

// switch문
// switch (조건) {
//   case 값1:
//     // 값1일 때 실행
//     break;
//   case 값2:
//     return 값2일때실행;
//   default:
//     // 해당하는 값이 없을 때 실행
//     break;
// }
function header(type) {
  switch (type) {
    case "type1":
      return "타입1 header 출력";
    case "type2":
      return "타입2 header 출력";
    default:
      return "타입3 header 출력";
  }
}

console.log(header("type1"));
console.log(header("type2"));
console.log(header("type3"));
console.log(header("type999"));

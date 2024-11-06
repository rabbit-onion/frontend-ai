// var은 요즘 안씀, let이나 const 쓰기
// var-변수 재선언 가능(만든 변수 없애고 새로 만듦)
// var a = 1, var a = 2 가능
// let, const- 변수 재선언 불가능
// let a = 1, let a = 2 선언 불가

// 변수 선언
var a = 1;
a = 2;

let b = "2";
b = 3;

const c = true;
// 재할당 안댐
// c = false;

const d = c;

const listItem = 5;

console.log(a, b, c, d);

const g = 1;
function test() {
  const e = 2;
  console.log(g, e);
}
// console.log(g, e);
// e는 함수 안쪽에서만 사용 가능(지역변수)
// 함수 밖에서 선언된 함수는 어디서나 사용 가능(전역변수)

test();

// 변수는 호이스팅(선언 전에 참조할 수 있는 기능.함수에서 유효)이 안되므로 순서 지켜쓰기

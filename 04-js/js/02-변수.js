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
// e는 함수 안쪽에서만 사용 가능

test();

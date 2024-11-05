// 1. string (문자열)

const string1 = "hello";
const string2 = "javascript";
const string3 = `world ${string1} ${string2}`;
console.log(string3);
const string4 = "world" + string1 + string2;
console.log(string4);
// 백틱 사용 권장~~~~~

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
const user = {
  name: "코코",
  age: 20,
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(`${user.name}는 ${user.age}살입니다.`);

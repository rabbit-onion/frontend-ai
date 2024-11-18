// 클래스 함수
// 리터럴 객체

// const animals = ["lion", "cat", "fox"];

// 자바스크립트에서는 배열도 객체의 한 종류임

// 생성자 함수
// : (배열의 형태로?)객체를 생성함
// const 배열이름 = new Array(contents)
const animals = new Array("lion", "cat", "fox");

console.log(animals);

// 배열이름.length : 배열의 길이 반환
console.log(animals.length);

console.log(animals[0]);

// 배열이름.includes("문자열")
// 배열에 해당 문자열이 포함되어 있으면 true, 없으면 false를 반환
console.log(animals.includes("lion"));

// ==================================================================
// 커피숍에서 파는 메뉴 출력 자동화

// 생성자 함수
// new Array(1, 2, 3)
const starbucks = new Array("아메리카노", "카페라떼", "카푸치노");

// 메소드 만드는 방법
// 생성자 함수.prototype.메소드명 = function() {}
Array.prototype.menu = function () {
  console.log(this); // this = Array
};

// 전체 메뉴 출력
starbucks.menu();

const mega = ["메가리카노", "메가라떼", "메가치노"];
mega.menu();

// 메소드 재활용
const ame = {
  name: "아메리카노",
  price: "3500",

  // 객체에 포함된 함수도 메소드라고 함
  orderMenu: function () {
    console.log(`${this.name}는 ${this.price}원 입니다.`);
  },
};

const latte = {
  name: "라떼",
  price: "4000",

  // : function 생략 가능
  // orderMenu() {
  //   console.log(`${this.name}는 ${this.price}원 입니다.`);
  // },
};

ame.orderMenu();
// latte.orderMenu();
ame.orderMenu.call(latte);

// 생성자 함수를 이용한 메뉴판 만들기
// 생성자함수는 대문자로 시작
function OrderMenu(name, price) {
  this.name = name;
  this.price = price;
}

OrderMenu.prototype.printMenu = function () {
  console.log(`${this.name}는 ${this.price}원 입니다.`);
};

const ame2 = new OrderMenu("아메리카노", 3500);
const latte2 = new OrderMenu("카페라떼", 4000);

ame2.printMenu();
latte2.printMenu();

console.log(ame2);

// 클래스 문법
// class OrderCoffee {
// 생성자 함수
// constructor(name, price) {
//   this.name = name;
//   this.price = price;
// }

// 메소드
//   printMenu() {
//     console.log(`${this.name}는 ${this.price}원 입니다. 뿌뿌`);
//   }

//   making() {
//     console.log(`${this.name}를 만들고 있습니다.`);
//   }

//   made() {
//     console.log(`${this.name}가 완성되었습니다.`);
//   }
// }

// const ame3 = new OrderCoffee("아메리카노", 3500);
// const latte3 = new OrderCoffee("카페라떼", 4000);

// ame3.printMenu();
// ame3.making();
// ame3.made();

// latte3.printMenu();
// latte3.making();
// latte3.made();

// 클래스 함수
class OrderCoffee {
  // 생성자 함수 (객체를 생성)
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // 메소드
  order() {
    console.log(`${this.name}는 ${this.price}원 입니다.`);
  }

  // 메소드2
  making() {
    console.log(`${this.name}를 만드는 중 . . .`);
  }

  // 메소드3
  made() {
    console.log(`${this.name}가 완성되었습니다.`);
  }
}

const orderAme = new OrderCoffee("아메리카노", 3500);

// new OrderCoffee("아메리카노", 3500).order();
// new OrderCoffee("아메리카노", 3500).making();
// new OrderCoffee("아메리카노", 3500).made();
orderAme.order();
orderAme.making();
orderAme.made();

const orderLatte = new OrderCoffee("라떼", 4000);

orderLatte.order();
orderLatte.making();
orderLatte.made();

// 클래스 상속
class SpecialCoffee extends OrderCoffee {
  constructor(name, price, character, season) {
    super(name, price);
    this.character = character;
    this.season = season;
  }

  // 메소드
  order() {
    console.log(`${this.character} ${this.name}는 ${this.price + 1500}원 입니다.`);
  }

  // 메소드2
  limited() {
    console.log(`${this.character} ${this.name}는 ${this.season} 한정판매입니다.`);
  }
}

const minionsCoffee = new SpecialCoffee("아메리카노", 3500, "미니언즈", "11월");

minionsCoffee.order();
minionsCoffee.limited();

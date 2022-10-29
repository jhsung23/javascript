// var x = 0;
// var y = 0;
// var result = 0;

// x = 1;
// y = 2;
// result = x + y;

// x = 3;
// y = 4;
// result = x + y;

// x = 5;
// y = 6;
// result = x + y;

// function add(x, y) {
//   return x + y;
// }

// var result = 0;

// result = add(1, 2);
// result = add(3, 4);
// result = add(5, 6);

// var f = function add(x, y) {
//   return x + y;
// };

// function add(x, y) {
//   return x + y;
// }

// var add = function (x, y) {
//   return x + y;
// };

// var add = new Function("x", "y", "return x+y");

// var add = (x, y) => x + y;

// function add(x, y) {
//   return x + y;
// }

// console.dir(add);
// console.log(add);

// console.log(add(2, 5));

// function foo() {
//   console.log("foo");
// }
// foo();

// (function bar() {
//   console.log("bar");
//   bar();
// });
// bar();

// var add = function foo(x, y) {
//   return x + y;
// };

// console.log(add(2, 5));

// console.log(foo(2, 5));

// console.dir(add);
// console.dir(sub);

// console.dir(add);
// console.dir(sub);

// function add(x, y) {
//   return x + y;
// }

// var sub = function (x, y) {
//   return x + y;
// };

// x = 10;

// 함수 선언 전에 호출
console.log(declaration); // [Function: declaration]
console.log(expression); // undefined

// 함수 선언문 -> 런타임 이전 함수 객체까지 생성됨
function declaration(x, y) {
  return x + y;
}

// 함수 표현식 -> 런타임에 function ~ 이후 평가됨
var expression = function (x, y) {
  return x + y;
};

// 함수 선언 후에 호출
console.log(declaration); // [Function: declaration]
console.log(expression); // [Function: expression]

// 변수 호이스팅
console.log(num); // undefined

var num = 10;

console.log(num); // 10

var add = new Function("x", "y", "return x+y");

console.log(add(2, 5));

var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();

console.log(add1(1, 2));

var add2 = (function () {
  var a = 10;
  return new Function("x", "y", "x+y+a");
})();

// console.log(add2(1, 2));

// const add = (x, y) => x + y;
// console.log(add(2, 5));

function addd(x, y) {
  console.log(arguments);
  // Arguments(3) [2, 5, 10, callee: f, Symbol(Symbol.iterator): f]

  return x + y;
}

addd(2, 5, 10);

function add(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;

  return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());

function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());

$.ajax({
  method: "POST",
  url: "/user",
  data: { id: 1, name: "Lee" },
  cache: false,
});

function multiply(x, y) {
  return x * y;
}

var result = multiply(3, 5);
console.log(result);

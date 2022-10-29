// var var1 = 1;

// if (true) {
//   var var2 = 2;
//   if (true) {
//     var var3 = 3;
//   }
// }

// function foo() {
//   var var4 = 4;

//   function bar() {
//     var var5 = 5;
//   }
// }

// console.log(var1); // 1
// console.log(var2); // 2
// console.log(var3); // 3
// console.log(var4); // ReferenceError: var4 is not defined
// console.log(var5); // ReferenceError: var5 is not defined

// var x = "global";

// function foo() {
//   var x = "local";
//   console.log(x);
// }

// foo();

// console.log(x);

// function foo() {
//   var x = 1; // var는 같은 스코프 내에서 중복 선언을 허용한다.
//   var x = 2; // 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
//   console.log(x);
// }

// foo(); // 2

// function bar() {
//   let x = 1;
//   let x = 2; // let은 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// }

// bar(); // SyntaxError: Identifier 'x' has already been declared

// function foo() {
//   console.log("global function foo");
// }

// function bar() {
//   function foo() {
//     console.log("local function foo");
//   }
//   foo(); // 1번 위치
// }

// bar();

// var x = 1;

// if (true) {
//   var x = 10;
// }

// console.log(x);

// var i = 10;

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

// var x = 1;

// function foo() {
//   var x = 10;
//   bar();
// }

// function bar() {
//   console.log(x);
// }

// foo();
// bar();

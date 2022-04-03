//example07-01
//산술 연산자
5*4 // 20

//문자열 연결 연산자
'My name is '+'Lee' // My name is Lee

//할당 연산자
color='red'

//비교 연산자
3>5 // false

//논리 연산자
true && false // false

//타입 연산자
typeof 'Hi' // string

//example07-06
var x=true;
console.log(+x); //1
console.log(x); //true

var x=false;
console.log(+x); //0
console.log(x); //false

var x='hello';
console.log(+x); //NaN -> 문자열을 숫자로 타입 변환 할 수 없음!!
console.log(x); //hello

//example07-07
var x=true;
console.log(-x); //-1
console.log(x); //true

var x='hello';
console.log(-x); //NaN -> 문자열을 숫자로 타입 변환 할 수 없음!!
console.log(x); //hello

//example07-08
'1'+2; // 12
1+'2'; // 12

1+2; // 3

1+true; // 2 -> true는 1로 타입 변환된다.
1+false; // 1 -> false는 0으로 타입 변환된다.
1+null; // 1 -> null은 0으로 타입 변환된다.
// 위의 세 가지 경우는 암묵적 타입 변환 또는 타입 강제 변환 이라고 한다.

+undefined; // NaN -> undefined는 숫자로 타입 변환되지 않는다.
1+undefined; // NaN

//example07-12
5==5; // true
5=='5'; // true -> 암묵적 타입 변환을 통해 타입 일치시키고 비교한 결과!!

//example07-14
5===5; // true
5==='5'; // false
NaN===NaN; // false -> 주의!!

//example07-16
//NaN은 자신과 일치하지 않는 유일한 값
//NaN인지 조사하려면 빌트인 함수 Number.isNaN 을 사용한다.
Number.isNaN(NaN); // true
Number.isNaN(10); // false
Number.isNaN(1+undefined); // true

//example07-17
//숫자 0의 경우(자바스크립트에는 양의 0과 음의 0이 있음)
0 == -0 // true
0 === -0 // true

//example07-18
-0 === +0; // true
Object.is(-0, +0); // false

NaN === NaN; // false
Object.is(NaN, NaN); // true

//example07-21
var x=10;

var result= x%2 ? '홀수' : '짝수';
console.log(result); // 짝수

//example07-29
var x,y,z;
x=1, y=2, z=3; // 3

//example07-30
10*2+3; // 23
10*(2+3); // 50

//example07-31
typeof '' // string
typeof 1 // number
typeof NaN // number
typeof true // boolean
typeof undefined // undefined
typeof Symbol() // symbol
typeof null // object
typeof [] // object
typeof {} // object
typeof new Date() // object
typeof /test/gi // object
typeof function(){} // object

//example07-32
var foo=null;

typeof foo===null; // false -> object와 null을 비교하기 때문에
foo===null; // true

//example07-33
typeof undeclared; // undefined

//example07-37
2 * 5 ** 2; // 50 -> ** 먼저 계산한다.
-(5 ** 2); // -25
(-5) ** 2; // 25

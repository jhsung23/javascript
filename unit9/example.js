//example09-01
var x=10;

var str=x.toString();
console.log(typeof str, str); // string 10
console.log(typeof x, x); // number 10

//example09-02
var x=10;

var str=x+'';
console.log(typeof str, str); // string 10
console.log(typeof x, x); // number 10

//example09-03
//피연산자가 모두 문자열 타입이어야 하는 문맥
'10'+2 // '102'

//피연산자가 모두 숫자 타입이어야 하는 문맥
5*'10' // 50

//피연산자 또는 표현식이 boolean 타입이어야 하는 문맥
!0 // true
if(1) { /*...*/ }

//example09-06
//숫자 타입
0+''; // '0'
-0+''; // '-0'
1+''; // '1'
-1+''; // '-1'
NaN+''; // 'NaN'
Infinity+''; // 'Infinity'
-Infinity+''; // '-Infinity'

//boolean 타입
true+''; // 'true'
false+''; // 'false'

//null 타입
null+''; // 'null'

//undefined 타입
undefined+''; // 'undefined'

//symbol 타입
(Symbol())+''; // TypeError: Cannot convert a Symbol value to a string

//객체 타입
({})+''; // '[object Object]'
Math+''; // '[object Math]'
[]+''; // ''
[10, 20]+''; // '10,20'
(function(){})+''; // 'function(){}'
Array+''; // 'function Array() { [native code] }'

//example09-07
1-'1' // 0
1*'10' // 10
1/'one' // NaN

//example09-08
'1'>0 // true

//example09-09
//문자열
+'' // 0
+'0' // 0
+'1' // 1
+'string' // NaN

//boolean
+true // 1
+false // 0

//null
+null // 0

//undefined
+undefined // NaN

//Symbol
+Symbol() // TypeError: Cannot convert a Symbol value to a number

//객체 타입
+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function() {}) // NaN

//example09-11
if ('') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');
// -> 2 4

//example09-13
//전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
	return !v;
}

//전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v) {
	return !!v;
}

//example09-14
//String 생성자 함수를 new 연산자 없이 호출하는 방법
//숫자->문자열
String(1); // '1'
String(NaN); // 'NaN'
String(Infinity); // 'Infinity'
//boolean->문자열
String(true); // 'true'
String(false); // 'false'

//Object.prototype.toString 메서드를 사용하는 방법
//숫자->문자열
(1).toString(); // '1'
(NaN).toString(); // 'NaN'
(Infinity).toString(); // 'Infinity'
//boolean->문자열
(true).toString(); // 'true'
(false).toString(); // 'false'

//문자열 연결 연산자를 이용하는 방법
//숫자->문자열
1+''; // '1'
NaN+''; // 'NaN'
Infinity+''; // 'Infinity'
//boolean->문자열
true+''; // 'true'
false+''; // 'false'

//example09-15
//Number 생성자 함수를 new 연산자 없이 호출하는 방법
//문자열->숫자
Number('0'); // 0
Number('-1'); // -1
Number('10.53'); //10.53
//boolean->숫자
Number(true); // 1
Number(false); // 0

//parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
//문자열->숫자
parseInt('0'); // 0
parseInt('-1'); // -1
parseFloat('10.53'); // 10.53

//+ 단항 산술 연산자를 이용하는 방법
//문자열->숫자
+'0'; // 0
+'-1'; // -1
+'10.53'; // 10.53
//boolean->숫자
+true; // 1
+false; // 0

//* 산술 연산자를 이용하는 방법
//문자열->숫자
'0'*1; // 0
'-1'*1; // -1
'10.53'*1; // 10.53
//boolean->숫자
true*1; // 1
false*1; // 0

//example09-16
//Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
//문자열->boolean
Boolean('x'); // true
Boolean(''); // false
Boolean('false'); //true
//숫자->boolean
Boolean(0); // false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true
//null->boolean
Boolean(null); // false
//undefined->boolean
Boolean(undefined); // false
//객체->boolean
Boolean({}); // true
Boolean([]); // true

//! 부정 논리 연산자를 두 번 사용하는 방법
//문자열->boolean
!!'x'; // true
!!''; // false
!!'false'; // true
//숫자->boolean
!!0; // false
!!1; // true
!!NaN; // false
!!Infinity; // true
//null->boolean
!!null; // false
//undefined->boolean
!!undefined; // false
//객체->boolean
!!{}; // true
!![]; // true

//example09-17
'Cat' && 'Dog' // 'Dog'

//example09-18
'Cat' || 'Dog' // 'Cat'

//example09-19
//논리합(||) 연산자
'Cat' || 'Dog' // 'Cat'
false || 'Dog' // 'Dog'
'Cat' || false // 'Cat'

//논리곱(&&) 연산자
'Cat' && 'Dog' // 'Dog'
false && 'Dog' // false
'Cat' && false // false

//example09-20
var done=true;
var message='';

//주어진 조건이 true일 때 - if문 ver.
if(done) message='완료';
//주어진 조건이 true일 때 - 단축평가 ver.
message=done&&'완료';

console.log(messsage); // 완료

//example09-21
var done=false;
var message='';

//주어진 조건이 false일 때 - if문 ver.
if(!done) message='미완료';
//주어진 조건이 true일 때 - 단축평가 ver.
message=done||'미완료';

console.log(messsage); // 미완료

//example09-23
var elem=null;
var value=elem.value; //TypeError: Cannot read property 'value' of null

//example09-24
var elem=null;
var value=elem&&elem.value; // null

//example09-25
//단축 평가 사용
function getStringLength(str){
	str=str||'';
	return str.length;
}

getStringLength(); // 0
getStringLength('hi'); // 2

//매개변수의 기본값 설정
function getStringLength(str=''){
	str=str||'';
	return str.length;
}

getStringLength(); // 0
getStringLength('hi'); // 2

//example09-26
var elem=null;

var value=elem?.value;
console.log(value); // undefined

//example09-28
var str='';

var length=str?.length;
console.log(length); // 0

//example09-30
var foo=null ?? 'default string';
console.log(foo); // 'default string'

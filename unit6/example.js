//ex06-01
var integer=10;
var double=10.2;
var negative=-10;

//ex06-02
var binary=0b01000001;
var octal=0o101;
var hex=0x41;

console.log(integer);
console.log(double);
console.log(negative);
console.log(binary);
console.log(octal);
console.log(hex);

//ex06-06
var string;
string='문자열';
string="문자열";
string=`문자열`;

string='작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string="큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

//ex06-12
var first='jihyun';
var last='Sung';

console.log('My name is '+first+' '+last+'.');

//ex06-13
var first='jihyun';
var last='Sung';

console.log(`My name is ${first} ${last}.`);

//ex06-14
console.log(`1+2=${1+2}`);

//ex06-20
var key=Symbol('key');
console.log(typeof key); //symbol

var obj={};

obj[key]='value';
console.log(obj[key]); //value
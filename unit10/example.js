//example10-01
var person={
	name:'Lee',
	sayHello:function(){
		console.log('Hello! My name is ${this.name}.');
	}
};

console.log(typeof person); //object
console.log(person); // {name: "Lee", sayHello: f}

//example10-02
var empty={}; // 빈 객체
console.log(typeof empty); // object

//example10-03
var person={
	//프로퍼티 키는 name, 프로퍼티 값은 'Lee'
	name:'Lee',
	//프로퍼티 키는 age, 프로퍼티 값은 20
	age:20,
};

//example10-04
var person={
	firstName:'Ji-hyun', // 식별자 네이밍 규칙 준수
	'last-name':'Sung', // 식별자 네이밍 규칙 준수 않음
};

console.log(person); // {firstName: "Ji-hyun", last-name: "Sung"}

//example10-05
var person={
	firstName:'Ji-hyun',
	//last-name:'Sung', // SyntaxError: Unexpected token -
};

//example10-06
var obj={};
var key='hello';

// ES5: 프로퍼티 키 동적 생성
obj[key]='world';
// ES6: 계산된 프로퍼티 이름
// var obj={ [key]:'world' };

console.log(obj); // {hello: "world"}

//example10-07
var foo={
	'':'',
};
console.log(foo); // {"": ""}

//example10-08
var foo={
	0:1,
	1:2,
	2:3,
};
console.log(foo); // {0: 1, 1: 2, 2: 3}

//example10-09
var foo={
	var: '',
	function: '',
};

//example10-10
var foo={
	name:'Lee',
	name:'Kim',
};
console.log(foo) // {name: "Kim"}

//example10-11
var circle={
	radius:5, // 프로퍼티
	getDiameter: function(){ // method
		return 2 * this.radius; // this는 circle
	}
};
console.log(circle.getDiameter()); // 10

//example10-12
var person={
	name:'Lee',
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); // Lee

//example10-13
var person={
	name:'Lee',
};
console.log(person[name]); // ReferenceError: name is not defined

//example10-14
var person={
	name:'Lee',
};
console.log(person.age); // undefined

//example10-15
var person={
	'last-name':'Lee',
	1:10
};

//person.'last-name'; // SyntaxError: Unexpected string
//person.last-name; // 브라우저 환경: NaN
									// Node.js 환경: ReferenceError: name is not defined
//person[last-name]; // ReferenceError: last is not defined
person['last-name']; // Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 대괄호 표기법 사용 필(따옴표 생략 가능)
//person.1; // SyntaxError: Unexpected number
//person.'1'; // SyntaxError: Unexpected number
person[1]; // 10 -> person[1] -> person['1']
person['1']; // 10

//example10-16
var person={
	name:'Lee',
};

person.name='Kim';
console.log(person); // {name: "Kim")

//example10-17
var person={
	name:'Lee',
};

person.age=20; // person에는 age 프로퍼티가 존재하지 않는 상태 -> 동적 할당됨
console.log(person); // {name: "Lee", age: 20}

//example10-18
var person={
	name:'Lee',
};

// age 프로퍼티 동적 생성
person.age=20;

// 존재하는 프로퍼티 삭제 -> 가능
delete person.age;

// 존재하지 않는 프로퍼티 삭제 -> 무시됨
delete person.address;

console.log(person); // {name: "Lee"}

//example10-19
// ES5
var x=1, y=2;
var obj={
	x:x,
	y:y,
};

console.log(obj); // {x: 1, y: 2}

//example10-20
// ES6
let x=1, y=2;

// 프로퍼티 축약 표현
const obj={x,y};
console.log(obj); // {x: 1, y: 2}

//example10-21
var prefix='prop';
var i=0;

var obj={};

obj[prefix + '-' + ++i]=i;
obj[prefix + '-' + ++i]=i;
obj[prefix + '-' + ++i]=i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

//example10-22
const prefix='prop';
let i=0;

const obj={
	[`${prefix}-${++i}`]: i,
	[`${prefix}-${++i}`]: i,
	[`${prefix}-${++i}`]: i,
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

//example10-23
//ES5
var obj={
	name:'Lee',
	sayHi:function(){
		console.log('Hi! '+ this.name);
	}
};

obj.sayHi(); // Hi! Lee

//example10-24
//ES6
const obj={
	name:'Lee',
	//메서드 축약 표현
	sayHi(){
		console.log('Hi! '+this.name);
	}
};

obj.sayHi(); // Hi! Lee

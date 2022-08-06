// const o = {};

// o.a = 1;
// console.log(o);

// var score = 80;
// var copy = score;

// console.log(score); // 80
// console.log(copy); // 80

// score = 100;

// console.log(score); // 100
// console.log(copy); // ?

// const o = { x: { y: 1 } };

// const c1 = { ...o };
// console.log(c1 === o);
// console.log(c1.x === o.x);

// const _ = require("lodash");

// const c2 = _.cloneDeep(o);
// console.log(c2 === o);
// console.log(c2.x === o.x);

// console.log(c1.x);
// console.log(o.x);
// console.log(c2.x);

// const v = 1;

// const c1 = v;
// console.log(c1 === v);

// const o = { x: 1 };

// const c2 = o;
// console.log(c2 === o);

// var person = {
//   name: "Lee",
// };

// var copy = person;

// console.log(copy === person);

// copy.name = "Kim";
// person.address = "Seoul";

// console.log(person);
// console.log(copy);

var person1 = {
  name: "Lee",
};

var person2 = {
  name: "Lee",
};

console.log(person1 === person2);
console.log(person1.name === person2.name);

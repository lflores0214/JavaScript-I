// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => {
    console.log("function was invoked!")
};
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunction = (parameter) => {
    return parameter;
};

console.log(anotherFunction("example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(2,4));
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (num1, num2) => {
    return num1 - num2;
}
console.log(subtract(7,3))
// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
exampleArray = [1,2,3,4];

const triple = exampleArray.map((num) => {
    return num * 3;
});
console.log(triple)
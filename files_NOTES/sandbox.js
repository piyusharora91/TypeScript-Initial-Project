"use strict";
let character = "luigi";
let age = 30;
let isBlackBelt = false;
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((input) => {
    console.log(input);
});
character = "mario";
age = 30;
isBlackBelt = true;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(20));
let names = ["mario", "luigi", "yoshi"];
names.push("toad");
let numbers = [10, 20, 30, 40, 50, 60];
numbers.push(25);
let mixed = ["ken", 4, "chun li", 8, 9, false];
mixed.push("kaiju");
mixed.push(20);
mixed[0] = 22;
let ninja = {
    name: "mario",
    belt: "yellow",
    age: 30,
};
ninja.age = 40;
ninja.name = "luigi";
let character1;
let age1;
let isLoggedIn;
age1 = 25;
isLoggedIn = true;
character1 = "Luigi";
let ninjas;
ninjas = ["20", "99"];
ninjas.push("mario");
let mixed1 = [];
mixed1.push("hello");
mixed1.push(99);
console.log(mixed1);
let uid;
let ninjaOne;
ninjaOne = {
    name: "yoshi",
    age: 35,
};
let ninjaTwo;
ninjaTwo = {
    name: "vako",
    age: 35,
    beltColour: "white",
};
let age2 = 25;
age2 = true;
age2 = "hello";
age2 = {
    name: "luigi",
};
age2 = {
    name: "mario",
};
console.log(age2);
let greet = () => {
    console.log("Hello world");
};
let greet1;
greet1 = () => {
    console.log("Hello Again");
};
const add = (a, b) => {
    console.log(a + b);
};
add(5, 10);
const product = (a, b, c = 20) => {
    console.log(a * b);
    console.log(c);
};
product(8, 10, 90);
const subtract = (a, b) => {
    return a - b;
};
let result = subtract(90, 10);
console.log(result);
const logDetails = (uid, item) => {
    console.log(`${item} has a value of ${uid}`);
};
const greetings = (user) => {
    console.log(`${user.name} says hello`);
};
const greetingsAgain = (user) => {
    console.log(`${user.name} says hello`);
};
let hello;
hello = (name, message) => {
    console.log(`${name} says ${message}`);
};
let calc;
calc = (num1, num2, action) => {
    let result;
    switch (action) {
        case "add": {
            result = num1 + num2;
            break;
        }
        case "subtract": {
            result = num1 - num2;
            break;
        }
        case "multiply": {
            result = num1 * num2;
            break;
        }
        case "division": {
            result = num1 / num2;
            break;
        }
        default: {
            result = num1 + num2;
            break;
        }
    }
    return result;
};
let logDetailsAgain;
logDetailsAgain = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};
logDetailsAgain({
    name: "Piyush",
    age: 25,
});

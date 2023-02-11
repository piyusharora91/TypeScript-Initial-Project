//INFER TYPES
//---------------------------------------------
let character = "luigi";
let age = 30;
let isBlackBelt = false;

// console.log(character);

const inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((input) => {
  console.log(input);
});

character = "mario";
age = 30;
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(20));

//ARRAYS
//-----------------------
let names = ["mario", "luigi", "yoshi"];

names.push("toad");
// names.push(23);  these 2 gives error cuz number addition to array of strings
// names[0]= 90;

let numbers = [10, 20, 30, 40, 50, 60];

numbers.push(25);
// numbers.push("shaun"); these 2 gives error cuz string addition to array of numbers
// numbers[1] = "shaun";

let mixed = ["ken", 4, "chun li", 8, 9, false];
mixed.push("kaiju");
mixed.push(20);
mixed[0] = 22;

//OBJECTS
//-----------------------

let ninja = {
  name: "mario",
  belt: "yellow",
  age: 30,
};

ninja.age = 40;
ninja.name = "luigi";
// ninja.age = "thirty";
// ninja.skills = ["defence", "grappling"];     cannot add more properties to onject once defined

//Explicit TYPES
//---------------------------------------------
let character1: string;
let age1: number;
let isLoggedIn: boolean;

age1 = 25;
isLoggedIn = true;
character1 = "Luigi";

//ARRAYS
//-----------------------
let ninjas: string[];

ninjas = ["20", "99"];
ninjas.push("mario");

//Union TYPES
//-----------------------
let mixed1: (string | number)[] = [];
mixed1.push("hello");
mixed1.push(99);
console.log(mixed1);

let uid: string | number;

//OBJECTS
//-----------------------
let ninjaOne: Object;
ninjaOne = {
  name: "yoshi",
  age: 35,
};

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = {
  name: "vako",
  age: 35,
  beltColour: "white",
};

//ANY TYPE
let age2: any = 25;
age2 = true;
age2 = "hello";
age2 = {
  name: "luigi",
};

age2 = {
  name: "mario",
};

console.log(age2);

//Function TYPES
//---------------------------------------------
let greet = () => {
  console.log("Hello world");
};

// greet = "hello";

let greet1: Function;
greet1 = () => {
  console.log("Hello Again");
};

const add = (a: number, b: number) => {
  console.log(a + b);
};
add(5, 10);

const product = (a: number, b: number, c: number | string = 20) => {
  console.log(a * b);
  console.log(c);
};
product(8, 10, 90);

const subtract = (a: number, b: number) => {
  return a - b;
};
let result = subtract(90, 10);
console.log(result);
// result = "hello";   When the output is returned from fn the return type is inferred from the output to the target variable, hence reassigning any variable of that type will produce error

// TYPE Aliases
//---------------------------------------------
type StringOrNum = string | number;
type objWithName = {
  name: string;
  uid: StringOrNum;
};

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a value of ${uid}`);
};

const greetings = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

const greetingsAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// Function SIGNATURES
//---------------------------------------------

//exm1
let hello: (a: string, b: string) => void;

hello = (name: string, message: string) => {
  console.log(`${name} says ${message}`);
};

let calc: (a: number, b: number, c: string) => number;

//exm2
calc = (num1: number, num2: number, action: string) => {
  let result: number;
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

//exm3
type person = { name: string; age: number };

let logDetailsAgain: (obj: person) => void;

logDetailsAgain = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`);
};

logDetailsAgain({
  name: "Piyush",
  age: 25,
});

//---------------------------------------------
// GENERICS - reusable blocks of code that can be used with
//                    different types

// EXAMPLE/TYPE 1
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({
  name: "Yoshi",
  age: 40,
  isAdult: true,
});

let docTwo = addUID({
  name: "Yoshi",
  age: 40,
});

// let docTwo = addUID('Mario');   this gives error

console.log(docOne, docTwo);

// ___________________________

// ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

// GENERICS EXAMPLE/TYPE 2

interface Resource<T> {
  uid: number;
  resourcename: number;
  data: T;
}

const docThree: Resource<string> = {
  uid: 1,
  resourcename: ResourceType.PERSON,
  data: "Shaun",
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourcename: ResourceType.BOOK,
  data: ["test", "milk", "money"],
};

//---------------------------------------------
// TUPLES
// purpose of tuple is to set the defined position of the
//            types in an array/object

let tup: [string, number, boolean] = ["ryu", 25, true];
// tup[0] = 90;
// tup[1]= false;
// tup[2]= 'gibberish';

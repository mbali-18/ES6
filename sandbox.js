// 1. Let & Const
let name = "Mbali";   // Can change later
const age = 22;       // Can't change

// 2. Template Literals
console.log(`Hello, ${name}! You are ${age} years old.`);

// 3. Arrow Function (ES6)
const greet = (name) => {
  return `Hi, ${name}! Welcome to the JavaScript world!`;
};

console.log(greet("Bestie"));

// 4. Destructuring (Object)
const person = { firstName: "Mbali", lastName: "Ncube", country: "South Africa" };
const { firstName, lastName, country } = person;
console.log(`${firstName} ${lastName} lives in ${country}.`);

// 5. Classes
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    return `${this.name} is a ${this.type}.`;
  }
}

const dog = new Animal("Bobby", "Dog");
const cat = new Animal("Whiskers", "Cat");

console.log(dog.introduce());  // Bobby is a Dog.
console.log(cat.introduce());  // Whiskers is a Cat.

// 6. Spread Operator
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6]

// 7. Default Parameter Value (ES6)
const welcome = (name = "Guest") => {
  console.log(`Welcome, ${name}!`);
};

welcome();             // Welcome, Guest!
welcome("Mbali");     // Welcome, Mbali!

// 8. Promises (ES6)
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise was successful!");
  } else {
    reject("Something went wrong!");
  }
});

myPromise
  .then((message) => console.log(message))  // Promise was successful!
  .catch((error) => console.log(error));

// 9. Using let & const with Loops
for (let i = 0; i < 5; i++) {
  console.log(`Counting: ${i}`);
}

// 10. Final Line
console.log("That's a wrap for ES6 features! 🎉");

// Async/Await (Easier way to handle Promises)
const fetchAsyncData = async () => {
  try {
    let result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

fetchAsyncData();

// Optional Chaining (Avoid Errors on Undefined Values)
const userInfo = {
  name: "Mbali",
  details: {
    age: 22,
    location: "Cape Town"
  }
};

console.log(userInfo.details?.age); // 22
console.log(userInfo.contact?.phone); // undefined (No error)

// Nullish Coalescing (Handle Null or Undefined)
const input = null;
const output = input ?? "Default Value";
console.log(output); // "Default Value"

// Enhanced Object Literals
const brand = "Nike";
const shoes = {
  brand,
  type: "Sneakers",
  price: 1200
};
console.log(shoes);

// Symbol (Unique Identifiers)
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false (Each symbol is unique)

// WeakSet (Holds Weak References)
const weakSet = new WeakSet();
let obj1 = { name: "Object1" };
weakSet.add(obj1);
console.log(weakSet);

// WeakMap (Keys Must Be Objects)
const weakMap = new WeakMap();
let obj2 = { name: "Object2" };
weakMap.set(obj2, "Value");
console.log(weakMap.get(obj2));

// Array.find() (Find the First Match)
const number = [10, 20, 30, 40, 50];
const foundNumber = numbers.find(num => num > 25);
console.log(foundNumber); // 30

// Array.some() (Check If Any Value Matches Condition)
const hasLargeNumber = number.some(num => num > 40);
console.log(hasLargeNumber); // true

// Array.every() (Check If All Values Match Condition)
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// Array.includes() (Check If a Value Exists)
console.log(numbers.includes(20)); // true

// String.includes() (Check If a Substring Exists)
const sentence = "JavaScript is powerful!";
console.log(sentence.includes("JavaScript")); // true

// String.startsWith() / endsWith()
console.log(sentence.startsWith("Java")); // true
console.log(sentence.endsWith("!")); // true

// Object.entries() (Convert Object to Array)
const persons = { name: "Mbuso", age: 25 };
console.log(Object.entries(persons)); 

// Object.keys() / Object.values()
console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["Mbuso", 25]

// Set Timeout as Promise
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const asyncWait = async () => {
  console.log("Wait starts...");
  await wait(2000);
  console.log("Wait over!");
};
asyncWait();

// Rest and Spread in Function Arguments
const showNames = (first, second, ...others) => {
  console.log(`First: ${first}, Second: ${second}, Others: ${others}`);
};

showNames("Alice", "Bob", "Charlie", "David");

// Generator Functions
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Final Console Log to Wrap Up
console.log("That's a wrap for ES6 features!");

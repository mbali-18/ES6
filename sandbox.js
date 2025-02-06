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

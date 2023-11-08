// CW 1
// type Person = {
//   name: string;
//   age: number;
//   job: string;
//   sayHi(this: Person): void;
// };
// const manager: Person = {
//   name: "John",
//   age: 27,
//   job: "Software Engineer",
//   sayHi: sayHowdy,
// };
// const intern: Person = {
//   name: "Ben",
//   age: 21,
//   job: "Software Engineer Intern",
//   sayHi: sayHowdy,
// };
// function sayHowdy(this: Person) {
//   console.log(`Hello, my name is  ${this.name}`);
// }

// : colon

// CW 2 // we avoid short hand notations

// let x = 5;
// let y = { x };
// console.log(y); //  {x : 5}

// function sum(arr: number[]): number {
//   return 1;
// }

// const foo = { sum };

// console.log(foo.sum);
// console.log(foo.sum([1, 2, 3]));

// CW 3

////write a for loop to print out the values of the properties according to the property names in the
// propertyOrder array. You must use the properties array to access the values. You cannot directly
// write console.log(numbers.one) …

const numbers: { [key: string]: number } = {
  one: 1,
  two: 22,
  three: 333,
  four: 444,
};
const propertyOrder = ["one", "four", "three", "two"];

for (const key of propertyOrder) {
  console.log(numbers[key]);
}

// using in
for (const key in numbers) {
  console.log(numbers[key]);
}

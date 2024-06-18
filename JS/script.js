
var firstName = 'Nadav'; //string
var lastName = 'Glikshtern'
var age = 33; // Number
var names = ['John', 'Ann', 'Bob', 'Frank', 'Jane', 'Jimmy', 'Billy', 'Julie', 'Will']//Array

//Comparison Operators - Return a boolean based on the result of youur comparison.
// console.log(age > 30);
// console.log(age < 30);
// console.log(age == 30);
// console.log(age == '33') // Double equals checks only value
// console.log(age === 33); //Triple equals checks both value and type

// console.log(age >= 33);
// console.log(age <= 30);

// console.log(age != 33)
// console.log(age !== 33)

// Falsey Values
// 0, null, undefined, '',NaN, false,  

// Logical Operators - Return a value on either the left side or the right side of the operator
// Which value is equated is based on truth (truthy vs falsey)
console.log(0 || null || '' || -5|| undefined);//if anyone of these is true, then perform some action

console.log(1 && age && 100 && true); // Will stop at first false or last value in the chain

console.log(!'');
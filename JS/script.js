// // function myFirstFunc(){
// //     console.log('function has been called');


// // myFirstFunc();

// // function add(num1, num2){
// //     console.log(num1 + num2)

// // }

// // add(5, 10);

// // add(30, 58)

// function printValues (num, name, boolean, another){
//     console.log(another);
// }

// printValues (10, 'Allen', false);

// function printNames(names){
//     for (const name of names) {
//         console.log(name);
//     }


// }

// printNames (['Bob','Jimmy','Julie'])

// printNames ('Jake', 'Frank', 'Katie')



/*
Create a fucntion that takes 3 arguments
-The first and second argument will be a number
-The third argument will be a mathematical operator (+,-,*,/)

Example: If the operator is a '+' then you will add the two numbers together and console log the sum

*/

// CAll your function 4 times with different numbers and operators to confirm that it is working correctly

// Function calculate (num1, num2, operator) {

//     if (operator === '+'){
//         console.log(num1 + num2);
//     }

//     else if (operator === '-') {
//         console.log(num1 - num2);
//     }

//     else if (operator === '*' ){
//         console.log(num1 * num2);
//     }

//     else if (operator === '/'){
//         console.log(num1 / num2);
//     }

// }

// calculate(10,20, '+');

function calculate(num1, num2, operator){
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case "*":
            return num1 * num2;
            
        case '/':
            return num1 / num2;
        default:
            console.log('You must provide a valid operator')

    }

}

const sum = calculate (10,20, '+')
console.log(sum)

// 

function add(num1, num2){
    return 'another'

}

const answer = add()

console.log (answer)




//Falsey Values
//0, null, undefined,'',NaN


var firstName = 'Nadav'; //string
var lastName = 'Glikshtern'
var age = 18; // Number
var names = ['John', 'Ann', 'Bob', 'Frank', 'Jane', 'Jimmy', 'Billy', 'Julie', 'Will']//Array
var users = ['Bob', 99, 'Ann', 35,'Billy', 45]
var oldEnough = age >= 21; //true

// If Conditionals - Trigger if the VALUE you pass into the parantheses is a truthy value

//Conditionals statments can only take ONE value

if(firstName && lastName){
    console.log('Received your full name!');
} else if (!firstName) {
    console.log('You must provide your first name!')
} 
else if (!lastName)  {
    console.log('You must provide you last name')
}
else  {
    console.log('You must provide you full name')
}

if (oldEnough) {
    console.log ('Congrats come in!')
// Web API - Browser Toolset that we can access from within our JS
alert ('Welcome ' + firstName)
}

else { console.log ('Get outta here kid!');
alert ('No Chance...')
}
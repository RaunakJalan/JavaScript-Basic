//var, let & const

//var: Global variable. let:local variable. scope till parantheses

/*



*/


// var learning = "Javascript";
// console.log(learning);



// let days99 = 99;

// // gives error -> let days99 = 100;

// console.log(days99);

// const name="Juan";
// // gives error -> const name;
// // gives error -> name="changing_value";
// console.log(typeof name);



//Strings:
console.log("\n-----------------STRINGS---------------------\n")
const learning = "Learning JavaScript is Great!";
const email = "email@gmail.com";

let output;

//length
output = learning.length;
console.log(output);

//concat
output=learning.concat(" ","and fun");
console.log(output);

//uppercase
output = learning.toUpperCase();
console.log(output);

//lowercase
output = learning.toLowerCase();
console.log(output);

//Indexof
output = learning.indexOf('JavaScript');
console.log(output);
output = learning.indexOf('PHP');
console.log(output);

//check if @ is in email or not
output = email.indexOf('@');

if(output>0){
	console.log("Valid Email");
}
else{
	console.log("Invalid Email");
}

//substring
output = learning.substring(4,10); //gives character from 4 to 10
console.log(output);

//substring from end
output = learning.substring(learning.length-6); //get last 6 character from end
console.log(output);

//slicing
output = learning.slice(0,10);
console.log(output);

//slicing from back
output = learning.slice(-6);
console.log(output);

//Split
output = learning.split(' ');    //' ' is delimeter
console.log(output);

//Replace
output = learning.replace('JavaScript','Modern JS');
console.log(output);

//includes: return true if given word is present else false
output = learning.includes('JavaScript');
console.log(output);
output = learning.includes('PHP');
console.log(output);

//repeat: repeats string n times;
let n = 4;
let text="Hello!"
output = text.repeat(n);
console.log(output);



//----------------------------------------------------------
//NUMBERS:

console.log("\n-----------------NUMBERS---------------------\n")

const number1 = 30,
	  number2 = 20,
	  number3 = -3;

//addition
result = number1+number2;
console.log(result);

//subtraction
result = number1-number2;
console.log(result);

//multiply
result = number1*number2;
console.log(result);

//Divide
result = number1/number2;
console.log(result);

//Modulo
result = number1%number2;
console.log(result);

//pi
result = Math.PI;
console.log(result);

//round
result = Math.round(2.4);
console.log(result);

//up or down
result = Math.ceil(2.2);
console.log(result);
result = Math.floor(2.7);
console.log(result);

//square root
result = Math.sqrt(144);
console.log(result);

//abs
result = Math.abs(number3);
console.log(result);

//pow
result = Math.pow(8,3);
console.log(result);

//get min or max from list
result = Math.min(10,8,2,3,4,1,6,5,1,3,-1);
console.log(result);
result = Math.max(10,8,2,3,4,1,6,5,1,3,-1);
console.log(result);



//----------------------------------------------------------
//Conditional Operators:

console.log("\n-----------------Conditional Operators---------------------\n")

console.log(1>2);
console.log(1<2);

console.log('a'>'b');
console.log('a'<'b');
console.log('A'>'a');
 
 console.log(2==2);
 console.log(2=='2'); //true only value
 console.log(2==='2');//false value + type

console.log(2!=3);

console.log(null==undefined);  //true
console.log(null === undefined); //false


//----------------------------------------------------------
//String to int:

console.log("\n-----------------String to Int---------------------\n")
const numb1 = '50',
	  numb2 = 10,
	  numb3 = 'Nine';

console.log(numb1 + numb2);//5010

console.log(Number(numb1)+numb2); // 60
console.log(parseInt(numb1)+numb2); //60

console.log(Number(numb3));//NaN : not a number


console.log(numb1-numb2); //40 because - is not used with string but + is



let number;
number = parseInt('100.20');//100
console.log(number);
number = parseFloat('100.20');//100.20
console.log(number);

//TO fixed number of decimal places(only works on numbers) default: 0
let val1 = '918356183.1020';

console.log(Number(val1).toFixed(2)); //91835183.10


//----------------------------------------------------------
//Number to String:

console.log("\n-----------------Number to String---------------------\n")

number = 90210;
output = String(number);
console.log(output.length);
output = String([1,2,3,4]) //1,2,3,4

//to string : works with objects not with numbers
output = [1,2,3].toString();


//----------------------------------------------------------
//Template String:


const product1 = 'Pizza';
const price1 = 30;
const product2 = 'Hamburger';
const price2 = 40;

// Old Method
let html;
html  = '<ul>'+
        '<li>Item: ' + product1 + '</li>' +
        '<li>Price: $ ' + price1 + '</li>' +
        '<li>Item: ' + product2 + '</li>' +
        '<li>Price: $ ' + price2 + '</li>' +
        '<li>Total: $' + (price1 + price2) + '</li>';
        '</ul>';

// Template Strings

html = `
    <ul>
        <li>Item: ${product1}</li>
        <li>Price: ${price1}</li>
        <li>Item: ${product2}</li>
        <li>Price: ${price2}  </li>
        <li>Total: ${total(price1, price2)}</li>
    </ul>
`;

function total(param1, param2) {
    return param1 + param2;
}

// HTML to inject the code

let app = document.querySelector('#app');
app.innerHTML = html ;


//----------------------------------------------------------
//Array:

// Array is a variable that can hold more than one value at the time
// Usually arrays hold related data.

// Creating an array
const numbers = [10,20,30,40,50];
console.log(numbers);

// Array of Months
const months = new Array('January', 'February', 'March', 'April', 'May', 'June');
console.log(months);

// Array with mixed values and data types!
const mixedArray = ["Hello", 10, true, "Yes", null];
console.log(mixedArray);

// Array methods
// Check the length in an array
console.log(months.length);

// Check if is an array
console.log(Array.isArray(months));

let name = 'Juan';
console.log(Array.isArray(name));

// Access any element in the array
console.log(months[0]);
console.log(months[3]);

// Change Values in the array
months[3] = 'December';
console.log(months);

// Find any element in the array
console.log(months.indexOf('December'));

// Add any element in the end of the array
months.push('Noviembre');

// Add element at the beginning of the array
months.unshift('Mes 0');

// Remove element from the end
months.pop();

// Remove element from the beggining
months.shift();

// Remove from specific position
// Splice takes 2 parameters, first one is the position,
// second one, how many elements you want to remove
months.splice(0,2);

// Reverse
months.reverse();
console.log(months);

// Concatenate two arrays in JavaScript
const array1 = [1,2,3];
const array2 = [9,8,7];
console.log(array1.concat(array2));

// order an array
let fruits = ['Banana', 'Apple', 'Strawberry', 'Orange', 'WaterMelon'];

fruits.sort();
console.log(fruits);

// Order numbers
const arrayNumbers = [1,3,100,4,6,7,3,2,14,67];

// Order from lower to greater
arrayNumbers.sort(function(x, y) {
    return x - y;
});

// Order from greater to lower
arrayNumbers.sort(function(x, y) {
    return y - x;
});

console.log(arrayNumbers);


//----------------------------------------------------------
//Objects:

// In JavaScript an Object is similar to an array in a lot of ways
// Objects have properties attached to them
// THis properties are defined by you and you access them with a dot

// Create an Object

const person = {
    name: 'Juan',
    lastName: 'De la torre',
    job: 'Web Developer',
    email: 'mail@mail.com'
}

console.log(person);
console.log(person.name);
console.log(person.job);

// Another way but not really common
console.log( person[name] );

// An Object can hold any data type
const person = {
    name: 'Juan',
    lastName: 'De la torre',
    job: 'Web Developer',
    email: 'mail@mail.com'
    age : 20,
    favoriteMusic: ['Trance', 'Rock', 'Grunge'],
    living: {
        city: 'Guadalajara',
        country: 'Mexico'
    },
    birthYear: function() {
        return new Date().getFullYear() - this.age;
    }
}

// Access each element
console.log(person);
console.log(person.name);
console.log(person.favoriteMusic);
console.log(person.living);
console.log(person['living']['city']);

// An Object can contain also functions

birthYear: function() {
    return new Date().getFullYear() - this.age;
}

// Access the function
console.log( person.birthYear() );

// Array of Objects
let cars = [
    {model: 'Mustang', engine: 6.0},
    {model: 'Camaro', engine: 6.1},
    {model: 'Challenger', engine: 6.1},
];

// Iterate in the array of objects

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i].model);
}







function func(){
	console.log("innerHTML")
	document.getElementById("para").innerHTML = "learning";
}





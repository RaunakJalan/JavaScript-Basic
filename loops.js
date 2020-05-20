// a for loop is used to run a code or statement until a
// condition is met

// For loop consist on 3 parts.
// Initial value, condition, and the increment
for(let i = 0; i < 10; i++) {
    console.log(`Number:  ${i} `);
}

// READ A VALUE
for(let i = 0; i < 10; i++) {
    if(i == 2) {
        console.log('Yes! 2!');
        // test with and without continue;
        continue;
    }
    console.log(`Number:  ${i} `);
}

// Break the for Loop
for(let i = 0; i < 10; i++) {
    if(i == 2) {
        console.log('Yes! 2!');
        break;
    }
    console.log(`Number:  ${i} `);
}

// Odd or even number
for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(`${i} is even `);
    } else {
        console.log(` ${i} is ODD `);
    }
}

// For loop for a Shopping cart
let shoppingCart = ['Product 1', 'Product 2', 'Product 3'];
// Access each value manually
// shoppingCart[0];
// shoppingCart[1];
// shoppingCart[2];

for(let i = 0; i < 3 ; i++ ){
    console.log(`Product: ${shoppingCart[i]}`);
}

// Use shoppingCart.length






//WHILE and Do-WHILE

console.log("\nWHILE and Do while\n")

let i = 0;

while(i < 10) {
    console.log(`Number: ${i}`);
    i++;
}

// Looping an array with While.
//const shoppingCart = ['Product 1', 'Product 2', 'Product 3'];

i = 0;

while(i < shoppingCart.length ) {
    console.log(`Product: ${shoppingCart[i]}`);
    i++;
}


// Do While will run at least 1 time, doesn't really matter if the cndition is meth or not

i = 0; // Try with 1000
do {
    console.log(`Number: ${i}`)
    i++;
} while( i < 10);



//FOR EACH and MAP

console.log("\nFOR EACH and MAP\n")

// Loop an array with for

let todoList = ['Homework', 'Food', 'Project', 'Learn JS'];
for(i = 0; i < todoList.length; i++) {
    console.log(todoList[i] );
}

// loop an array with foreach
todoList.forEach(function(assignment, index) {
    console.log(`${index} : ${assignment}`);
});

// Loop with MAP
shoppingCart = [
    {id: 1, product: 'Book' },
    {id: 2, product: 'Shirt'},
    {id: 3, product: 'Album'}
];

const productName = shoppingCart.map(function(shoppingCart) {
    return shoppingCart.product;
});
// This will extract just the product name in a new array.
console.log(productName);

// Iterators in ES6
let myCar = {
    model: 'Camaro',
    engine: '6.0',
    yeah: 1969,
    make: 'Chevrolet'
}

for(let key in myCar) {
    console.log(`${key}: ${myCar[key]}`);
}
    







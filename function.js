//Function:

//Declaration

// function helloVisitor(firstname="Visitor",lastname='XYZ'){

// 	console.log(`Hello ${firstname} ${lastname} & Welcome to our website`);
// }


function helloVisitor(firstname,lastname){

	if(typeof firstname == 'undefined'){
		firstname = 'Visitor';
	}
	if(typeof lastname == 'undefined'){
		lastname = 'XYZ';
	}

	console.log(`Hello ${firstname} ${lastname} & Welcome to our website`);
}


//a function must be called
helloVisitor("Barac","Obama");
helloVisitor("Barac");
helloVisitor()


function addition(number1,number2){
	return number1+number2;
}
let result = addition(1,2);
console.log(result);

// Function expressions
const sum = function(a = 5, b = 2) {
    return a + b;
};

console.log(sum(4, 8));
console.log(sum(14, 18));
console.log(sum(24, 28));
console.log(sum());


//  FUnctions that are invoked inmediately (IIFEs)
// immediately-invoked function expression

(function() {
    console.log('IIFES!!');
})();

// Passing arguments to functions

(function(technology) {
    console.log('Learning ' + technology);
})('JavaScript');

// Property Methods (a function inside an object is a method)

const musicPlayer = {
    play: function(id) {
        console.log(`Playing song with the ID: ${id}`);
    },
    pause: function() {
        console.log('paused....');
    }
}
musicPlayer.play(30);
musicPlayer.pause();


// Methods can be outside (but variable name should match)
musicPlayer.remove = function(id) {
    console.log(`Remove from my playlist: ${id}`)
}
musicPlayer.remove(20);


// Basically you can create your own functions, but remember
// JavaScript has  set of functions also.

console.log();
alert();
prompt();
confirm();


// Declear A Function

// function greet(){
//     console.log('Hello EveryOne!!');
//     console.log('I am Fine!!');
//     console.log('Hello EveryOne!!');
// }

// // Calling A Function
// greet();

// Declaring a Function 

function greet(name){
    console.log('Hello!!! My name Is', name)
}

// greet('Anant Jalil');
// greet('Hero Alom');

function sum(num1, num2){
    const sum = num1 + num2;
    // console.log(sum)
}
sum(5,3)

function addTwoNumber(num1, num2){
    const sum = num1 + num2 ;
    return sum;
}

const total = addTwoNumber(12, 13);
console.log(total)
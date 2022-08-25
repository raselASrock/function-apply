/* Check odd or even with no return

function evenOdd(number){
    if(number % 2 === 0){
        console.log('This number is an even number!!!')
    }
    else{
        console.log('This number is an Odd number!!!')
    }
}
evenOdd (55);
evenOdd (56);

*/

/* Check odd or even number with return */

function evenOdd(number){
    if(number % 2 == 0){
        return 'It is even NUmber';
    }
    else{
        return 'It is odd Number';
    }
}
console.log(evenOdd(5));
console.log(evenOdd(20));

// function areaOfCircle(r){
//     const pie = Math.PI;
//     const area = pie * r * r ;
//     return area;

// }
// const result = areaOfCircle(3);
// console.log(result.toFixed(2));


// function areaOfCircle(r){
//     const pie = Math.PI;
//     const area = pie * r * r ;
//     return area.toFixed(2);

// }
// console.log(areaOfCircle(7));

// function feetToInch(feet){
//     const inchValue = 12 * feet ;
//     return inchValue; 
// }

// console.log(feetToInch(1.5));

// function discountCalc(totalPrice){
//     if(totalPrice > 5000){
//         const discountPrice = totalPrice * (20/100) ;
//         const payAmount = totalPrice - discountPrice;
//         return payAmount;

//     }
//     else if(totalPrice >= 3000){
//         const discountPrice = totalPrice * (15/100);
//         const payAmount = totalPrice - discountPrice;
//         return payAmount;
//     }
//     else if(totalPrice >= 1000){
//         const discountPrice = totalPrice * (10/100);
//         const payAmount = totalPrice - discountPrice;
//         return payAmount;
//     }
//     else{
//         console.log("You can't get any discount");
//     }
// }

// console.log(discountCalc(5000));

// function isLeapYear (year){
//     if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
//         return true;
//     }
//     else{
//         return false
//     }
// }

// const result = isLeapYear(1954);
// console.log(result);

// function factorial(number){
//     let result = 1;
//     let i = number;
//     while( i >= 1){
//         result = result * i;
//         i--
//     }
//     return result;
// }

// console.log(factorial(5));

// function factorial(number){
//     let result = 1;
//     let i = 1;
//     while( i <= number){
//         result = result * i;
//         i++ ;
//     }
//     return result;
// }

// console.log(factorial(5));

function addEvenSum(arr){
    let evenSum = 0;
    let oddSum = 0;
    for( let i=0; i < arr.length; i++){
        // console.log(arr[i])
        if(arr[i] % 2 == 0){
            // console.log(arr[i]);
            evenSum = evenSum + arr[i];
        }
        else{
            // console.log(arr[i]);
            oddSum = oddSum + arr[i];
        }
    }
    // console.log("Even sum:", evenSum , "Odd Sum:", oddSum);
    return {evenSum, oddSum}
}

const arr = [1,2,3,4,5,6,7];
console.log(addEvenSum(arr))

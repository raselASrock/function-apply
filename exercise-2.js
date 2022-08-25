/* Find Largest One with no return
function findLargest(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);
    }
    else if(num2 > num1 && num2 > num3){
        console.log(num2)
    }
    else{
        console.log(num3)
    }
}

findLargest(15,35,20)
*/

/* Find Largest One with retur */

function largest(a,b,c){
    if(a > b && a > c){
        return a;
    }
    else if(b >a && b > c){
        return b;
    }
    else{
        return c;
    }
}
console.log(largest(8,5,13));

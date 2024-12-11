
/* write a program to find lowest and highest digit and take numbers from user input?*/

code:

let num = prompt("Enter the number : ");
let max = 0;
let min = num[0];
for (let i = 0; i < num.length; i++) {
    (num[i] > max) ? (max = num[i]) : (max = max);
    (num[i] < min) ? (min = num[i]) : (min = min);
}

console.log("highest digit of given number is ", max);
console.log("lowest digit of given number is ", min);
console.log("sum of lowest and highest number is", Number(min) + Number(max));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


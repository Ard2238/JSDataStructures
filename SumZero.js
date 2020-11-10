const prompt = require('prompt-sync')();

let num1 = Math.floor(Math.random()*1000)
let num2 = Math.floor(Math.random()*1000)
let num3 = -(num1 + num2)

let numArr = new Array()
numArr.push(num1)
numArr.push(num2)
numArr.push(num3)

let total = 0;
function sum(num){ total += num}
numArr.forEach(sum)
console.log("Sum of " + num1 + ", " + num2 + ", " + num3 + ":  " + total)
const prompt = require('prompt-sync')();

let num1 = prompt("Enter the starting value of the range (0-100):  ")
let num2 = prompt("Enter the ending value of the range (0-100):  ")

num1 = parseInt(num1)
num2 = parseInt(num2)
let arr = new Array()

if(num1 > num2){
    console.log("Invalid Range")
    return
}
else{
    for(let i = num1; i <= num2; i++){
        let temp = i.toString();
        temp = temp.split("")
        if(temp[0] == temp[1])
            arr.push(i)
    }
}

console.log("Numbers with repeated digits are:  " + arr.toString())
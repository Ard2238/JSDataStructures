let numArr = new Array();

for(let num = 0; num < 10; num++){
    let currentNum = Math.floor(Math.random()*900) + 100
    numArr.push(currentNum)
}

let min = numArr[0]
let max = numArr[0]

for(let num = 1; num < numArr.length; num++){
    if(numArr[num] < min)
        min = numArr[num]
    if(numArr[num] > max)
        max = numArr[num]
}

console.log("Given Array:  " + numArr.toString())
console.log("Minimum: " + min + "\nMaximum: " + max) 
let numArr = new Array();

for(let num = 0; num < 10; num++){
    let currentNum = Math.floor(Math.random()*900) + 100
    numArr.push(currentNum)
}

console.log("Given Array:  " + numArr)
numArr.sort();
console.log("Sorted Array:  " + numArr.toString() + "\nMinimum:  " + numArr[0] + "\nMaximum:  " + numArr[numArr.length -1])
let die_Map = new Map()

for(let i = 1; i < 7; i++){
    die_Map.set(i.toString(), 0)
}

while(!checkValues()){
    let roll = Math.floor(Math.random() * 6) + 1
    for(let [key,value] of die_Map){
        if(key == roll){
            die_Map.set(key, die_Map.get(key) + 1)
        }
    }
}

let min_key = "1"
let max_key = "1"
let min_val = die_Map.get("1")
let max_val = die_Map.get("1")
for(let [key,value] of die_Map){
    console.log("key: " + key + "  value:  " + value)
    if(value < min_val){
        min_val = value
        min_key = key
    }
    if(value > max_val){
        max_val = value
        max_key = key   
    } 
}

console.log("Number with max count:  " + max_key)
console.log("Number with min count:  " + min_key)


function checkValues(){
    for(let value of die_Map.values()){
        if(value == 10){
            return true;
        }
    }
    return false;
}



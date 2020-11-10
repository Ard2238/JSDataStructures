let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
                "October", "November", "December"];

let name = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                "S", "T", "U", "V", "W", "X", "Y", "Z"]

let birthday_map = new Map()    

//generating individuals with their birthdays
for(let i = 0; i < 50; i++){
    let individual = "USER" + i
    let random = Math.floor(Math.random() * 12)
    birthday_map.set(individual, months[random])
}

//fetching birthdays by same month
for(let i = 0; i < months.length; i++){
    console.log("Birthdays in " + months[i] + " :  ")
    for(let [key,value] of birthday_map.entries()){
        if(value == months[i])
            console.log(key)
    }
}




//count the words
let b = "friday is a funday and today is the friday"
let numberOfdDay = 0
let position = b.indexOf("day")
while (position !== -1){
    numberOfdDay++
    position = b.indexOf("day",position+1)
}
console.log("Number of day in a string b is: "+numberOfdDay)
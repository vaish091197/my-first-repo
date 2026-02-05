//To Uppercase
let fruits = "melon"
console.log("Fruit in Uppercase :"+fruits.toUpperCase())

//To Lowercase
let flower = "LILY"
console.log("Flower in Lowercase :"+flower.toLowerCase())

//CharAt
//indexof
let animal = "lion"
console.log("Animal character at :"+animal.charAt(2))
console.log("Animal index of letter :"+animal.indexOf("o"))

//substring
let language = "English"
console.log("substring of letter :"+language.substring(0,3))

//replace method
let poet = "Hardy"
console.log("name replace to :"+poet.replace("Hardy","Wordsworth"))

//Split method
let park = "playing"
console.log("split of playing :"+park.split("",4))

//concatenate two strings with template literals
let day = "sunday"
let activity = "relaxing"
console.log(`${day} is for ${activity}`)
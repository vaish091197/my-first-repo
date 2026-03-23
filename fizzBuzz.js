/*
1. Create a variable num
2. Use if…else if.. else to print:
	- Divisible by both 3 and 5 -> “FizzBuzz”
	- Divisible by 3 only -> “Fizz”
	- Divisible by 5 only -> “Buzz”
	- Otherwise -> print the number itself

Tip: Check divisible by both first, before checking individually
 */


let num = 19
if(num % 3 == 0 && num % 5 == 0){
    console.log("Print FizzBuzz")
}else if(num % 3 == 0){
   console.log("Print Fizz")
}else if(num % 5 ==0){
    console.log("Print Buzz")
}else{
    console.log("Print the num: ",num)
}


/*
1. Create a function calculator(a,b,operator)
2. Use if….else to handle:
-> “+” - add
->“-“ -subtract
->“*” - multiply
->“/“ -divide
3. If operator is invalid, return “Invalid operator”
4. Call the function with different operators and print results.

*/
function calculator(a, b, operator) {
    if (operator == '+') {
        return(a+b)
    } else if (operator == '-') {
        return(a-b)
    } else if (operator == '*') {
        return(a*b)
    } else if (operator == '/') {
        return(a/b)
    } else {
        return('Invalid operator')
    }
       
}
/*
console.log(calculator(11,22,'+'))
console.log(calculator(22,11,'-'))
console.log(calculator(11,22,'*'))
console.log(calculator(10,2,'/'))
console.log(calculator(11,22,'('))
*/

let sum = calculator(11,22,'+')
console.log("sum: "+sum)
let subtract = calculator(22,11,'-')
console.log("sub: "+subtract)
let multiply = calculator(11,11,'*')
console.log("multiply: "+multiply)
let divide =calculator(10,2,'/')
console.log("Division: "+divide)
let Invalidoperator = calculator(11,22,'(')
console.log("Invalid Operator: "+Invalidoperator)
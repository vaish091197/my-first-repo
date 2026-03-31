/*
Function Scoped and Block Scoped Variables

1. Create a function scopeCheck().
2. Use: var for a function-scoped variable
3. Let and const for block scoped variables
4. Print the variables inside and outside the block
5. Show which variables can be accessed.

*/

function scopeCheck() {
    if (true){
        var a = 'summer'
        let b = 'winter'
        const c = 'autumn'
    }
console.log("Function scoped variable: " +a)
console.log("Block scoped variable: " +b)
console.log("Another block scoped variable: " +c)
}
scopeCheck()
/*

Movie Entry Checker

1. Create 3 variables: age, hasTicket, withParent
2. Set sample values - for example: age = 14, hasTicket = true, withParent = true
3. Use AND(&&): Allow entry if the person is 18+ and has a ticket
4. Use OR(||): Allow entry if the person is under 18 but with a parent
5. Print “Entry Allowed” or ”Entry Denied”
*/

let age = 14
let hasTicket = true
let withParent = true

if ((age >= 18 && hasTicket) || (age <= 18 || withParent)) {
   console.log("Entry Allowed")
} else {
   console.log("Entry Denied")
}

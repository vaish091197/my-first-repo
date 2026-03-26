/*
Leap Year Checker

1. Create a function isLeapYear(year)
2. Use condition: -Leap year if divisible by 4 and not by 100, or divisible by 400
3. Return “Leap Year” or “Not a Leap Year”.
4. Test with different years.

*/


function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return ("Leap Year")
    } else {
        return ("Not a Leap Year")
    }
}
console.log(isLeapYear(2001))
console.log(isLeapYear(2024))

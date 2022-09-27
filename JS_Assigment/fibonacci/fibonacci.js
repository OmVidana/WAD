/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
function fibonacci() {
    "use strict";
    var n = parseInt(document.getElementById("numFibo").value);
    var val = f(n);
    document.getElementById("fibonacciLbl").innerHTML = val;
}

function f(n) {
    var value;
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } 
    else {

        if (n <= 1) {
            value = n;
        }
        else {
            value = f(n-1) + f(n-2);
        }
        memo[n] = value;
    }

    return value;
}
// console.log(f(15));

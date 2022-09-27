/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
function fibonacci() {
    "use strict";
    var n = document.getElementById("numFibo").value;
    var val = f(n);
    document.getElementById("fibonacciLbl").textContent = val;
}

function f(n) {

    var value;
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        memo = [0, 1];
        for (let i = 2; i <= n; i++) {
            memo[i] = memo[i - 2] + memo[i - 1];
          }
        value = memo[n];
    }

    return value;
}
console.log(f(15));

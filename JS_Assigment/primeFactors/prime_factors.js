/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/
var primeFactors = function() {
    var inputValue = document.getElementById("numberCheck").value;
    document.getElementById("factors").innerHTML = getPrimeFactors(inputValue).join(' ')
    console.log(getPrimeFactors(inputValue).toString())
};

var getPrimeFactors = function(n) {
    "use strict";
    var sequence = [];
    for(var i = 2; i <= n; i++) {
        if(n % i === 0) {
            sequence.push(i) 
            n /= i
        }
    }   
    return sequence;
};
// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
// console.log(getPrimeFactors(30030))


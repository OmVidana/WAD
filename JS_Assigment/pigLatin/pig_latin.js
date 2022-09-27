/*
Pig Latin
*/

function igpayAtinlay() {
    "use strict";
    var returnArray = [],
    str = document.getElementById('pigL').value,
    wordArray = str.split(' ');

    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var beginning = word.charAt(0);

        if (/[aeiouAEIOU]/.test(beginning)) {
            returnArray.push(word += 'way');
            continue;
        }

        for (var ii = 1; ii < word.length; ii++) {
            if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
                break;
            } else {
                beginning += word.charAt(ii);
            }
        }

        returnArray.push(word.substr(beginning.length) + beginning + 'ay');
    }
    var res = returnArray.join(' ');
    console.log(res)
    document.getElementById("pigDisplay").innerHTML = res;
    return res;
}
// console.log(igpayAtinlay("pizza")); // "izzapay"
// console.log(igpayAtinlay("apple")); // "appleway"
// console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"
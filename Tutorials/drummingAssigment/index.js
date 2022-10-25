const drumsParts = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumsParts; i++) {
    // document.querySelectorAll(".drum")[i].addEventListener("click", actions());
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let drumPart = this.innerHTML;
        soundPress(drumPart);
        drumPartAnimation(drumPart);
    });
}

document.addEventListener("keypress", function(event) {
    soundPress(event.key);
    drumPartAnimation(event.key);
});

// function actions() {
//     let drumPart = this.innerHTML;
//     soundPress(drumPart);
//     drumPartAnimation(drumPart);
// }

function soundPress(drumPart) {
    switch (drumPart) {
        case "w":
            let wTom = new Audio("sounds/tom-1.mp3");
            wTom.play();
            break;
        case "a":
            let aTom = new Audio("sounds/tom-2.mp3");
            aTom.play();
            break;
        case "s":
            let sTom = new Audio("sounds/tom-3.mp3");
            sTom.play();
            break;
        case "d":
            let dTom = new Audio("sounds/tom-4.mp3");
            dTom.play();
            break;
        case "j":
            let jSnare = new Audio("sounds/snare.mp3");
            jSnare.play();
            break;
        case "k":
            let kCrash = new Audio("sounds/crash.mp3");
            kCrash.play();
            break;
        case "l":
            let lKick = new Audio("sounds/kick-bass.mp3");
            lKick.play();
            break;
    }
}



function drumPartAnimation(drumPart) {
    let actualDrumPart = document.querySelector("." + drumPart);
    actualDrumPart.classList.add("pressed");
    setTimeout(function() {
        actualDrumPart.classList.remove("pressed");
    }, 100);
}


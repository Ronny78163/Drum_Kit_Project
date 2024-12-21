
var numberOfButtons = document.querySelectorAll(".drum").length;

//This code iterates through the buttons and check which one has been clicked. and then it will trigger the function
for(i = 0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//This code checks if which buttons has been pressed
document.addEventListener("keypress", function(event){  // we added the key press into the entire document
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key){

    switch(key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        default: console.log(buttonInnerHTML);
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100) //this function will run and revert back the function after 1 sec
}
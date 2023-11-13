var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

     });

}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {
    
    switch(key) {
        case "w":
            var Udukkai = new Audio("sounds/Udukkai.wav");
            Udukkai.play();
            break;
        
         case "a":
            var Thavil = new Audio("sounds/THAPPU_PARAI_RIMSHOT_ONE SHOT_03.wav");
            Thavil.play();
            break;

        case "s":
            var Thappu1 = new Audio("sounds/THAPPU_PARAI_RIMSHOT_ONE SHOT_02.wav");
            Thappu1.play();
            break;

        case "d":
            var Thappu2 = new Audio("sounds/THAPPU_PARAI_RIMSHOT_ONE SHOT_01.wav");
            Thappu2.play();
            break;

        case "j":
            var Thappu3 = new Audio("sounds/THAPPU_PARAI_KICK_ONE SHOT_01.wav");
            Thappu3.play();
            break;

        case "k":
            var Perc = new Audio("sounds/THAPPU_PARAI_HITS_ONE SHOT_01.wav");
            Perc.play();
            break;

        case "l":
            var Perc2 = new Audio("sounds/THAPPU_PARAI_FLAM_ONE SHOT_01.wav");
            Perc2.play();
            break;

        default:
            console.log(key);
    }
}



function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("."+ currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
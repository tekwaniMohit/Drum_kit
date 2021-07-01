// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){                                                             //  For getting access to one button.
//     alert("I got clicked");
// }                                        

// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked");
// });

var numberOfDrumButtons = document.querySelectorAll(".drum").length;                // to figure out the number of buttons.

for(var i = 0; i<numberOfDrumButtons; i++){                                        // For Getting access to every button.

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    this.style.color = "white";

   

    


    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML){

      case "w":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();        
        break;

      case "a":{
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();        
        break;
      }
      case "s":{
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();       
        break; 
      }
      case "d":{
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();        
        break;
      }
      case "j":{
        var snare = new Audio('sounds/snare.mp3');
        snare.play();   
        break;     
      }
      case "k":{
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;        
      }
      case "l":{
        var crash = new Audio('sounds/crash.mp3');
        crash.play();  
        break;      
      }
      default:{
        console.log(buttonInnerHTML);
      }

    }                                   

});



}




   
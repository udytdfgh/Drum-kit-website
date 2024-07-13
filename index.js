    var AllOfTheBotton=document.querySelectorAll(".drum").length;//* We use ".drum" class to take only the seven buttons.

    for( var i=0;i<AllOfTheBotton;i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){;
   
    var button=this.innerHTML;// "this" keyword is used in determining the identity of the object
       Sound(button);
       animation(button);
    }) }                       

   
   
    document.addEventListener("keypress",function(event){
        Sound(event.key);
        animation(event.key);
    
        
    })
    //* this fucntion is used to put sound in our website.
    function Sound(event){
    switch(event){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare=new Audio("sounds/snare.mp3")
            snare.play();
            break;
        
        default: console.log(button);
    }   }
    
   //* this fucntion is used to implement animationin our website.
   function animation(currentKey){
    var new_button=document.querySelector("." + currentKey);
    new_button.classList.add("pressed");
   
   
    setTimeout(function() {
    new_button.classList.remove("pressed");
  },90);
}


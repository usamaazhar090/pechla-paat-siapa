var a = 0
while (a < document.querySelectorAll('.drum').length) {
    document.querySelectorAll('.drum')[a].addEventListener('click',function()  {
        var button1 = this.innerHTML;
        makesound(button1);
        button2(button1)   
    })  
    a++
}
document.addEventListener('keydown', function (event) {
    makesound(event.key);
    button2(event.key); 
});

function makesound(key) {
    if (key == 'w') {
        var crash = new Audio('sounds/crash.mp3');
        crash.play();    
    }
    else if (key == 'a') {
        var kickbass = new Audio('sounds/kick-bass.mp3');
        kickbass.play();
    }
    else if (key == 's') {
        var snare = new Audio('sounds/snare.mp3');
        snare.play();    
    }
    else if (key == 'd') {
        var tom1 = new Audio('sounds/tom-1.mp3'); 
        tom1.play();
    }
    else if (key == 'j') {
        var tom2 = new Audio('sounds/tom-2.mp3'); 
        tom2.play();
        classes(x);
    }
    else if (key == 'k') {
        var tom3 = new Audio('sounds/tom-3.mp3'); 
        tom3.play();
    }
    else if (key == 'l') {
        var tom4 = new Audio('sounds/tom-4.mp3'); 
        tom4.play();
    }
    else {
        
    }
}
function button2(classed) {
    var selectedtune = document.querySelector('.'+ classed);
    selectedtune.classList.add('pressed');
    setTimeout(() => {
       selectedtune.classList.remove('pressed') 
    }, 100);
}
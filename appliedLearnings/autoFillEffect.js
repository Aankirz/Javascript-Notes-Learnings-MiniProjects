// When you are scrolling you need to check whether skillSection is VISIBLE or not.
/* 1. Handle scroll event on window
   2. Check that skills section is visible or not.
   3. Start animation on every skill -> incr. skill from 0 to skill level
   4. Store skill level -> HTML with the help of data attribute  */

var progressBar=document.querySelectorAll('.skill-progress > div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBars(){
    //if we want things to remain in block scope always use let.
    for(let bar of progressBar){
       bar.style.width=0+'%';
    }
}

initialiseBars(); // so making them 0 since want to run an animation to fill them.

function fillBar(){
     for(let bar of progressBar){
        //we should use lwt : since we want the data to bind to get into one iteration.
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';

        },5)
     }
}

function checkScroll(){
    // You have to check whether it's visible or not.
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone=true;
        //To check
        console.log('skills section visible');
    }
}

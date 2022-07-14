// JS Code starts when dynamicity or behaviour is needed in that static html or css code

// Step 1: Access the static part of document You want to add dynamicity in

var navMenuAnchorTags=document.querySelectorAll('.navMenu a');

// It's better to print at every step for developer :- "USE CONSOLE.LOG TIME TO TIME"

//So now after acc. it get's collected as Array, Now to act on each and every elm we use for loop
var interval;
for(var i=0;i<navMenuAnchorTags.length;i++){
    //add type effect on var.addEL(type,list~fun)
    navMenuAnchorTags[i].addEventListener('click',function(event){
        // collect event parameter
        event.preventDefault();
        //now we want to collect the sec each a tag would have moved to
    var targetSectionID=this.textContent.trim().toLowerCase();
    var targetSection=document.getElementById(targetSectionID); //main work adding #toText
    /* Trick: we have already set namesof ID's like: #about ~ name of sec:- About so using this text lowering it trimming any space*/
    //now to get coordinates

    // so for passing arguments u could also do this.
    interval=setInterval(function(){
      scrollVertically(targetSection);
    },50)
    //  interval=setInterval(scrollVertically,50,targetSection)// so u need to provide arguments like this.
    // so doing scrollVertically(targetSection) is wrong , bec then setInterval will always use the result(~ abc & abc() both are different)
    })
}

// Now making smooth scroll as feature.
function scrollVertically(targetSection){
  // so we need to provide target section here.
  var targetSectionCoordinates=targetSection.getBoundingClientRect();
      if(targetSectionCoordinates.top<=0){
        // since we need interval here we need to make it a global scope.
        clearInterval(interval);
        return;
      }
      window.scrollBy(0,50);
}
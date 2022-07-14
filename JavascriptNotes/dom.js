//                               DOM Events in JS
var element;
element=document.getElementById("id1");

element=document.getElementsByTagName("tag1");
// returns a list of elements having same tagname in an ARRAY Format. "live"

/*Now to access CSS Elements: */
element=document.querySelector("selectorName");
element=document.querySelector("input.email");
// returns first inpot element having class email.
// But to return ALL
element=document.querySelectorAll("div.note");
// NodeList of 'div' elements having class 'note'.

//                              Events in JS
var submitButton=document.getElementsById("submit");

submitButton.addEventListener("click",function(){
    alert("hello");
})
submitButton.onclick=function(){}


// SCROLL
window.scrollTo(0,200);
window.scrollBy(0,200);
window.pageXOffset;
/* To- to move, By- To move stepwise, offset-to know location */

//               SMOOTH SCROLL
var currPos=0
var targetPos=1500

var scroll=setTimeout(function(){
    if(currPos>=targetPos){
        clearInterval(scroll);
        return;
    }
    currPos+=50;
    window.scrollBy(0,50)

},50)
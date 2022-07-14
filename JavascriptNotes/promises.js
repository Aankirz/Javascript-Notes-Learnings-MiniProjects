var promise=new Promise((resolve,reject)=>{
    // resolve("Yay, promise fullfilled");
    // reject("sorry 404");

});

//promise has two states after pending resolve/reject
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled" for resolve
// [[PromiseState]]: "rejected"

// but now this promise is used for "then and catch fns"
//if promise is found to be resolved-> then
// so using/accessing the data we recieved after an api call.
promise
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
    console.log('error',error);
})

// But if promise get's rejected

//       USING CALLBACKS
// A fn calling another fn.

function greet(name,func2){
    console.log('hi' ,(name));
    func2();
}
function askQ(){
    console.log('How are You');
}
greet('John',askQ);
// Here askQ becomes callBack

// Event Loop
// pref order-> call stack>microtask queue>task queue

// imp. ex.: 
const promise1 = new Promise((resolve,reject) => { setTimeout(() => { resolve('a') }) })

const promise2 = new Promise((resolve,reject) => { resolve('b') })

const promise3 = new Promise((resolve,reject) => { setTimeout(() => { resolve('c') },10) })

Promise.all([promise1,promise2,promise3]) .then((msg) => { console.log(msg) })

// (3) ['a', 'b', 'c']


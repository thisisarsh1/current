let userseq =[];
let gameseq =[];

let gamestart=false;
let level = 0;

document.addEventListener("keypress",function(){
   if (gamestart == false){
    gamestart = true;
    levelUp();
    
   } 
})
function levelUp (){
    level++;
    let h2 = document.querySelector("h2");
    h2.innerText = (`Level - ${level}`);
    flash();
}
function flash(col){
    let col = document.querySelectorAll(".button");
    col.classList.add("flash")
    setTimeout(function(){
        col.classList.remove("flash")
    }, 1000)
}

let btnr = document.querySelector("#red")
btnr.addEventListener("click",function(){
    console.log("Click ho gaya bhai red!")
})
let btnb = document.querySelector("#blue")
btnb.addEventListener("click",function(){
    console.log("Click ho gaya bhai blue!")
})
let btng = document.querySelector("#green")
btng.addEventListener("click",function(){
    console.log("Click ho gaya bhai green!")
})
let btny = document.querySelector("#yellow")
btny.addEventListener("click",function(){
    console.log("Click ho gaya bhai yellow!")
})
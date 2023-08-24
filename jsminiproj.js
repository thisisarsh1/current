let userseq =[];
let gameseq =[];
let btns = [red,yellow,blue,green]
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
    let randin = Math.floor(Math.random)*3
    let randcol = btns[randin];
    let randbtn = document.querySelector(`#${randcol}`);
    flash(randbtn);

}
function flash(button){
        button.classList.add("flash")
        setTimeout(function(){
        button.classList.remove("flash")
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
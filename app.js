let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h = document.querySelector("h1")
    let r = rand();
    h. innerText=r ;
    let div = document.querySelector("div");
    div.style.backgroundColor = r;
    console.log("colour updated")


});
function rand (){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let colour= (`rgb ${red} ,${blue} ,${green}`)
    return colour
}

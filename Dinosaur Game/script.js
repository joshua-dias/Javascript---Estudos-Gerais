var dino = document.getElementById("dino");
var block = document.getElementById("pedra");
function pular(){
    if(dino.classList != "animate"){
        dino.classList.add("animate");
    };
    setTimeout(function(){
        dino.classList.remove("animate")
    }, 500); 
}
var checkDead = setInterval(
function(){   
    var dinoTop =
    parseInt(window.getComputedStyle(dino).
    getPropertyValue("top"));
    var pedraLeft =
    parseInt(window.getComputedStyle(pedra).
    getPropertyValue("left"));
    if(pedraLeft<20 && pedraLeft>0 && dinoTop>=130) {
        pedra.style.animation = "none";
        pedra.style.display = "none"
        alert("Você perdeu.");
    }
},10);

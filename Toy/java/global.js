window.addEventListener("keydown", function() {
  document.getElementById("Merry").innerHTML += "*<br>";
});
 

var a=40,b=8,c=13,o="<div style='font-family:monospace;text-align:center;color:#094'>",
w=1,x=0,y="|#|<br>";for(i=1;i<a;i++){
    for(j=0;j<w;j++){
        x%c==0?o+="<span style='color:#D00'>O</span>":o+="+";x++;
    }i%b==0?w-=4:w+=2;o+="<br>";}
    
document.write(o+"<span style='color:#640'>"+y+y+y+"</span></div>");



function clickPosition(e) {
  const target = document.getElementById("clickEffect"),
    a = 40; 

  (e.button === 0) && (
    target.style.transform = `translate(${e.clientX - a}px, ${e.clientY - a}px)`,
    target.classList.contains("effect")
    ? (
      clearTimeout(removeTimeOut),
      target.classList.remove("effect"),
      void target.offsetWidth,
      target.classList.add("effect"),
      removeEffect()
    )
    : (
      target.classList.add("effect"),
      removeEffect()
    )
  )
}

function removeEffect() {
  removeTimeOut = setTimeout(function () {
    document.getElementById("clickEffect").classList.remove("effect")
  }, 500) 
}

document.addEventListener("mousedown", clickPosition)



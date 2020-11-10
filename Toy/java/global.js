window.addEventListener("keydown", function() {
  document.getElementById("Merry").innerHTML += "*<br>";
});
 

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



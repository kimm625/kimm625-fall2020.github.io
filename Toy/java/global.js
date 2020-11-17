var text = document.getElementById("text");

var a = 40,
  b = 8,
  c = 13,
  o =
    "<div style='font-family:monospace;text-align:center;color:#094' id='tree'>",
  w = 1,
  x = 0,
  y = "|#|<br>";
for (i = 1; i < a; i++) {
  for (j = 0; j < w; j++) {
    x % c == 0 ? (o += "<span style='color:#D00' class='light'>O</span>") : (o += "+");
    x++;
  }
  i % b == 0 ? (w -= 4) : (w += 2);
  o += "<br>";
}

document.write(o + "<span style='color:#640'>" + y + y + y + "</span></div>");
var tree = document.getElementById("tree");
var treeHeight = tree.offsetHeight;
var lineCount = 0;
var x2 = 0;
var w2 = 1;

function mykeydown() {
  // If not backspace
  if (event.keyCode != 8) {
    tree.style.visibility = "hidden";
    var b = 8,
      c = 13,
      y = "|#|";
    tree.style.visibility = "visible";
    tree.style.height = treeHeight;
    var line = "";
    if (lineCount == 0) {
      tree.innerHTML = "";
      clearTimeout(clean);
    } else if (lineCount < 40) {
      for (j = 0; j < w2; j++) {
        line += x2 % c == 0 ? "<span style='color:#D00' class='light'>O</span>" : "+";
        x2++;
      }
      lineCount % b == 0 ? (w2 -= 4) : (w2 += 2);
      tree.innerHTML += line + "<br>";
    } else if (lineCount < 43) {
      tree.innerHTML += "<span style='color:#640'>" + y + "</span><br>";
    }
    lineCount++;
    if (lineCount === 43) {
      light();
    }
  }
}

// Color Change
var array=["red","yellow","white"];
var cnt=0;
var test=document.getElementsByClassName("light");
var clean = '';
function light() {
  for (var i = 0; i < test.length; i++) {
    if (cnt == 3) cnt = 0;
    test[i].style.color = array[cnt++];
  }
  clean=setTimeout("light()", 800);
}
// Click Event
function clickPosition(e) {
  
  const target = document.getElementById("clickEffect"),
    a = 40;
  (lineCount = 0), (x2 = 0), (w2 = 1);
  tree.style.visibility = "hidden";
  tree.style.height = treeHeight;
  tree.innerHTML = "";

  e.button === 0 &&
    ((target.style.transform = `translate(${e.clientX - a}px, ${
      e.clientY - a
    }px)`),
    target.classList.contains("effect")
      ? (clearTimeout(removeTimeOut),
        target.classList.remove("effect"),
        void target.offsetWidth,
        target.classList.add("effect"),
        removeEffect())
      : (target.classList.add("effect"), removeEffect()));
}

function removeEffect() {
  removeTimeOut = setTimeout(function () {
    document.getElementById("clickEffect").classList.remove("effect");
  }, 900);
}

document.addEventListener("mousedown", clickPosition);
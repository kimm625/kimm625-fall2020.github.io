
// If you use a <button> tag you can query the button directly. Otherwise, you can use a CSS class on the element you click, and querySelector that class.
var button = document.querySelector('button');
var container = document.querySelector('#container');
button.addEventListener('click', function(event) {
  console.log(event, event.target);
  var newItem = document.createElement('div');
  newItem.classList.add('new-content');
  newItem.innerHTML = '<strong>Hello</strong>';
  container.appendChild(newItem);
});


let bubbles = document.querySelectorAll('.bubble');

// place our bubbles randomly
bubbles.forEach(function (bubble) {
  bubble.style.left = (100 * Math.random()) + '%';
  bubble.style.top = (100 * Math.random()) + '%';
  bubble.style.right = (100 * Math.random()) + '%';
});
container.addEventListener('click', function (event) {
  if (event.target.classList.contains('bubble')) {
    event.target.remove();
  }
});

document.querySelectorAll('bubble')
var count=0;
function bubble_onclick (){
  count++;
  alert("You erased"+count)
};

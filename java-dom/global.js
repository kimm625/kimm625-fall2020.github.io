
// If you use a <button> tag you can query the button directly. Otherwise, you can use a CSS class on the element you click, and querySelector that class.
var button = document.querySelector('make');
var container = document.querySelector('#container');
button.addEventListener('click', function(event) {
  console.log(event, event.target);
  var newItem = document.createElement('div');
  newItem.classList.add('new-content');
  newItem.innerHTML = '.stars';
  container.appendChild(newItem);
});

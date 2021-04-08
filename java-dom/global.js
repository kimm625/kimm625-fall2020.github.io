let container = document.querySelector('#container')
let button = document.querySelector('.make')
let count = document.querySelector('#count')
let swatch1 = document.querySelector('#color1')
let swatch2 = document.querySelector('#color2')
let swatch3 = document.querySelector('#color3')
let remove = document.querySelector('.remove')

button.addEventListener('click',function(){
   let stars = document.createElement('div');
   stars.classList.add('stars');
   stars.style.left=(100*Math.random()) + '%';
   stars.style.top=(100*Math.random()) + '%';
   stars.innerHTML='<div></div>';
   container.appendChild(stars);

   let images = container.querySelectorAll('.stars');
   let amount = images.length;
   count.innerHTML = amount;
   if (count.length > 0) {
    counterText += 'stars added';
  }
});

container.addEventListener ('click',function(event){
    if(event.target.classList == 'stars'){
        event.target.remove();
        let stars= container.querySelectorAll('.stars');
        let amount = stars.length;
        count.innerHTML = amount;
  
}});

swatch1.addEventListener ('click',function(){
    let color1 = document.querySelector('#color1').style.backgroundColor;
    let stars = document.querySelectorAll('.stars');
    stars.forEach(function(stars){
        stars.style.backgroundColor = 'greenyellow';
    })
});

swatch2.addEventListener ('click',function(){
    let color2 = document.querySelector('#color2').style.backgroundColor;
    let stars = document.querySelectorAll('.stars');
    stars.forEach(function(stars){
      stars.style.backgroundColor = '#00FFFF';
    })
});

swatch3.addEventListener ('click',function(){
    let color3 = document.querySelector('#color3').style.backgroundColor;
    let stars = document.querySelectorAll('.stars');
    stars.forEach(function(stars){
      stars.style.backgroundColor = '#FF5AD9';
    })
});

remove.addEventListener ('click',function(){
  var stars = document.querySelectorAll(".stars");	//제거하고자 하는 엘리먼트
  stars.forEach(function(star){
      star.remove();
    })
});
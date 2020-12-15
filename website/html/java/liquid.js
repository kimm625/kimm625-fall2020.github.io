var text = document.getElementsByClassName("text");

$(window).load(function() {
  $('.item').display = "";  
  $('.item').fadeIn('slow', function() {
       // 애니메이션 끝난 뒤 실행할 코드 넣기
  });
});

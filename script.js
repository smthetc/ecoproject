$(document).ready(function () {
  $('.sidenav').sidenav();
});

// $('.carousel.carousel-slider').carousel({
//   fullWidth: true
// });
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});
$(document).ready(function () {
  $('.parallax').parallax();
});
$(document).ready(function(){
  $('.materialboxed').materialbox();
});
$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});

$( document ).ready(function() {
  $("#button").click(
  function(){
    sendAjaxForm('results', 'ecorep', 'action.php');
    return false; 
  }
);
});

function sendAjaxForm(results, ecorep, url) {
  $.ajax({
      url:     url, //url страницы
      type:     "POST", //метод отправки
      dataType: "html", //формат данных
      data: $("#"+ecorep).serialize()
 });
}
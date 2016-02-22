$(document).ready(function() {
	console.log("Script included!");

$( "ul li" ).click(function() {
  $( this ).fadeOut( 1000, function() {
    $( this ).remove();
  });
});

$("p").click(function() {
 $( this ).wrap("<strike>");
});

$("img").click(function(){
    $( this ).hide();

});

});
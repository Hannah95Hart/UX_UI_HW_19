console.log("Your index.js file is loaded correctly!");

$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
 
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});

$( "#resume" ).click(function() {
  alert( "My Resume Would Go Here If I could Figure out How to link it." );
});

clicked = true;
$('#projectThree').ready(function(){
    $("button").click(function(){
        if(clicked){
            $(this).css('background-color', '#8C6658');
            clicked  = false;
        } else {
            $(this).css('background-color', '#373738');
            clicked  = true;
        }   
    });
});
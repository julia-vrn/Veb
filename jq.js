$(document).ready(function() {
  alert("Tere tulemast vormile!" + "<br>"+ "jQuery elemendid: aletbox, nimi väli, checkboxes, nupp Loe andmed");
});

$(document).ready(function() {
  $("input[type='checkbox']").change(function() {
    if ($(this).is(":checked")) {
      $(this)
        .parent()
        .addClass("redBackground");
        console.log("checked");
    } else {
      $(this)
        .parent()
        .removeClass("redBackground");
    }
  });
});


$(function(){
  $('.viga').hide(); //peidame veateate
  $('.submit').click(function(event){ //käivitame funktsiooni
    var data=$('.infokast').val(); 
    var len=data.length; 

    $('input.infokast:text').css('border','solid 1px red');
   
    //sisu pikkuse kontroll
    if(len < 1){
      $('.viga').show(); 
      event.preventDefault(); 
    } else {
      $('.viga').hide(); 
    }
  });
});
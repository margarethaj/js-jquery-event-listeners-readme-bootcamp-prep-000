//define functions here

function getIt(){
  alert('Hey!');
}

function frameIt(){
  $('img').addClass('tasty');
}

function pressIt(){
  alert('you press G');
}

$(document).ready(function(){

// call functions here
  $('p').on('click', function(){
    getIt();
  });

  $('img').on('load', function(){
    frameIt();
  });

  $('#typing').on('keydown', function(e){
    if(e.which == 71){
      pressIt();
    }
  });

});

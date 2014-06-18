$(document).ready(function() {

    $('li.a, #twit, #linked, #email').mouseenter(function(){
        
        $(this).fadeTo('fast', 1);
        
        });
        
    $('li.a, #twit, #linked, #email').mouseleave(function (){
        
        $(this).fadeTo('fast', 0.75);
        
        });
	        
    $('#twitter').draggable();


    $('#twitter').mousedown(function(){

    $('#clickme > p').remove();
    $('#clickme').css("font-size", '30px');
    $('#clickme').append('<div>Ahhhh, don\'t let go!!</div>');


    });

    $('#twitter').mouseup(function(){

    $('#twitter').effect("explode", {pieces: 20 }, 700);

});

    $('#menu').accordion();


    
    $('#button').mouseenter(function(){
        
        $('#button').fadeTo('fast', 1);
        
        });
        
    $('#button').mouseleave(function (){
        
        $('#button').fadeTo('fast', 0.5);
        
        });

    $('input').focus(function() {

    	$(this).css('outline-color', '#0099FF');

    });

    $('button').click(function() {
        $('.vanish').fadeOut('slow');
    });
 
    $('#add').click(function() {
        
        var toAdd = $('input[name=checkListItem]').val();
        
        $('.list').append('<div class="item">' + toAdd + '</div>');
        
        });
        
    $(document).on('click', '.item', function() {
        
        $(this).remove();
        
        });

    $('li.a').hover(
    function(){
    $(this).addClass('active');
    },
    function(){
    $(this).removeClass('active');    
    });

    $('#wake').mousedown(function() {

        $('#wake').animate({left: '-=700px'}, 700);

    });

    $('#wake').mouseup(function() {

        $('#wake').animate({left: '+=1400px'}, 700);
         $('#wake').animate({left: '-=700px'}, 700);


    });
   
    });
    

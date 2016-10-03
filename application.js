
$(document).ready(function(){

    buildPad(16);
	$('td').on('mouseenter',function(){
		$(this).addClass('paint');
	});

	$('.reset').on('click',function(){
	    
	    $('td').removeClass('paint');
	    
	    var sps=prompt("How many squares per side?",16);
	    
	    $('table').empty();
        
        buildPad(sps);
	   	
	   	$('td').on('mouseenter',function(){
		   $(this).addClass('paint');
	    });
	});
	$('.colorPen').on('click',function(){
        $('td').on('mouseenter',function(){
        	$(this).css({'background-color': randomColor});
        });
	});
	
	$('.gradient').on('click',function(){

		var tracker=0;
		$('td').on('mouseenter',function(){
            if(tracker>=10){
            	tracker=0;
            }
            var c=10*tracker;
            $(this).css({'background-color': 'rgb('+c+'%,'+c+'%,'+c+'%)'});
            tracker++;
			
		});
	});
	$('.other').on('click',function(){
		var chosenColor= prompt("Type the color you would like(e.g. blue):", 'purple');
	    $('td').on('mouseenter',function(){
        	$(this).css({'background-color': chosenColor});
        });
	});

});
function buildPad(numSquares){
	for (var i = 0; i < numSquares; i++) {
		$('table').append('<tr></tr');
		for (var x = 0; x < numSquares; x++) {
			$('table').find('tr').last().append('<td></td>');
		}
	}
}
function randomColor(){
	var letters='0123456789ABCDEF';
    var color='#';
    for(var i=0;i<6;i++){
    	color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}


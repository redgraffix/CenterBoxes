//place entire page in container called - .container//
//then label the content  you want centered inside of the container-  .centerbox//


function centerContentBoxes(){  

$(".centerbox").each(function(){	
			 
		var contentMarginWidth=($(window).width()/2)-($(this).width()/2);
		if (contentMarginWidth<0){contentMarginWidth=20}; 
		var contentMarginHeight=($(window).height()/ 2)-($(this).height()/2);
		if (contentMarginHeight<0){contentMarginHeight=20};
		$(this).css({
			"margin":+contentMarginHeight+"px "+contentMarginWidth+"px"
			});
			});
			
	$(".centerbox").css({"float":"left"
		});
	
	$(".container").css({
		'width': + $(window).width() + 'px',
		'height': +  $(window).height() + 'px',
		'padding-bottom':'500px',
		}); 
};
$(window).resize(function() {centerContentBoxes();});
$(document, window).ready(function() {centerContentBoxes();});

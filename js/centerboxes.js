/*
 *  centerboxes
 *  Copyright (c) 2013 Jason Rodgers
 *  jquery plugin to center content within browser window 
 *  Licensed under the MIT license
 *
 */

function centerContentBoxes(){ 
	//size the outer container to be the browser window size
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();	
	$(".container").css({'min-height': + windowHeight + 'px','width': + windowWidth + 'px'});
	$(".centerbox").css('margin','0px auto'); 
	//put the content in the center of that container now
	$(".centerbox").each(function(){	
		var thisHeight = $(this).outerHeight(); 
		var contentPaddingHeight=Math.floor(((windowHeight - thisHeight)/2));
		if (contentPaddingHeight <= 10){contentMarginHeight = 10;};
		$(this).parent().css({'padding-top':+contentPaddingHeight+'px'})
		});	 
	};
	
$(window).resize(function() {centerContentBoxes();});
$(document, window).ready(function() {centerContentBoxes();});

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
	$(".container").each(function(){	
	$(this).css({'min-height': + windowHeight + 'px','width': + windowWidth + 'px'}).prepend("<div style='height:1px;width:1px'>&nbsp;</div>"); 
	});
	//put the content in the center of that container now
	$(".centerbox").each(function(){	
		var thisHeight = $(this).height(); 
		var contentMarginHeight=Math.floor(((windowHeight - thisHeight)/2));
		if (contentMarginHeight <= 0){contentMarginHeight = 10;};
		$(this).css({"margin":+contentMarginHeight+"px auto"});
		});	 
	};
	
$(window).resize(function() {centerContentBoxes();});
$(document, window).ready(function() {centerContentBoxes();});

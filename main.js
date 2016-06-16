$(document).ready(function(){

  	$("#play").on('click', function(){
	  	resolveAndPlayURL();  	
	});

	$("#pause").on('click', function(){
	  stream.pause();
	});

	 // $("#pause").on('click', function(){

	 //  	if (!paused) {
	 //  		stream.pause();
	 //  		paused = true;
	 //  	} else {
	 //  		stream.play();
	 //  		paused = false;
	 //  	}
	 //  });

	  $("#forward").on('click', function(){
	  	if (counter != (urls.length-1) ){
	  		counter ++;
	  		resolveAndPlayURL();
	  	}
	  });

	  $("#back").on('click', function(){
	  	if (counter != 0){
	  		counter --;
	  		resolveAndPlayURL();
	  	}
	  });

});
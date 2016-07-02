// $(function(){ 
	console.log("initialized");
    SC.initialize({
    client_id: "672dd37d370de6fc46011a19cd62660d",
    });
    
    var stream = new Audio();
    var paused = false;

    var counter = 0;
    var urls = ["https://soundcloud.com/samsin111/thug-juice","https://soundcloud.com/weirdinside/breathing-as-we-know-ep-out-211-vinyl-pre-order-211", "https://soundcloud.com/quietluke/blue-day-3"];
	
	SC.get("https://api.soundcloud.com/resolve/?url=" + urls[counter], {limit: 1}, function(result){
	    var xhr = new XMLHttpRequest();

	    client_id = '?client_id=d4ab52d80ed2e7790c3a243495b30093';
		xhr.open('GET', result.uri + client_id);
		xhr.onload = function(){
	  		var track = JSON.parse(xhr.responseText);
	  		stream.src = track.stream_url + client_id;
	  		stream.play();
		}; 
		xhr.send()
    });
    // function resolveAndPlayURL() {
    //   SC.get("https://api.soundcloud.com/resolve/?url=" + urls[counter], {limit: 1}, function(result){

    //       var xhr = new XMLHttpRequest();

    //       client_id = '?client_id=d4ab52d80ed2e7790c3a243495b30093';
    // 	  xhr.open('GET', result.uri + client_id);
    // 	  xhr.onload = function(){
    //   		var track = JSON.parse(xhr.responseText);
    //   		stream.src = track.stream_url + client_id;
    //   		stream.play();
    // 	  }; 
    // 	  xhr.send()
    //   });
    // }


    // $("#play").on('click', function(){
    //     resolveAndPlayURL();    
    // });

    // $("#pause").on('click', function(){
    //   stream.pause();
    // });

    //  // $("#pause").on('click', function(){

    //  //   if (!paused) {
    //  //     stream.pause();
    //  //     paused = true;
    //  //   } else {
    //  //     stream.play();
    //  //     paused = false;
    //  //   }
    //  //  });

    // $("#forward").on('click', function(){
    //   if (counter != (urls.length-1) ){
    //     counter ++;
    //     resolveAndPlayURL();
    //   }
    // });

    // $("#back").on('click', function(){
    //   if (counter != 0){
    //     counter --;
    //     resolveAndPlayURL();
    //   }
    // });
// });
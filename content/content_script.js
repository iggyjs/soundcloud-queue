
SC.initialize({
	client_id: "672dd37d370de6fc46011a19cd62660d",
});
console.log("initialized");
var paused;
var stream = new Audio();	

// while(!stream.ended){
// 	checkSong();
// }

var counter = 0;
var urls = ["https://soundcloud.com/samsin111/thug-juice","https://soundcloud.com/weirdinside/breathing-as-we-know-ep-out-211-vinyl-pre-order-211", "https://soundcloud.com/quietluke/blue-day-3"];

function nextSong(){
	console.log("song ended");
}

function resolveAndPlayUrl(){
	if(!paused){
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
			paused = false;

		});
	} else {
		stream.play()
		paused = false;
	}
}

function checkSong(){
	if(stream.ended)
		nextSong();
	else
		console.log("song playing")
}

function pauseStream(){
	if (!paused){
		stream.pause();
		paused = true;
	} 
}

function pushSong(url){
	urls.push(url);
	console.log(urls);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.command == "play") {
      resolveAndPlayUrl();
      sendResponse({commandResponse: "playing"});
    } else if (request.command == "pause"){
      pauseStream(paused);
      sendResponse({commandResponse: "paused"});
    }
    else if (request.command == "addSong"){
    	pushSong(request.url);
    	sendResponse({commandResponse: "song added"});
    } else if (request.command == "check"){
    	checkSong();
    }
});



// console.log('called');
// $.get(chrome.extension.getURL('templates/notification.html'), function(data) {
//     var div = $("div");
//     div.append(data);
// });
// //

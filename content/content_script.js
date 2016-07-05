
SC.initialize({
	client_id: "672dd37d370de6fc46011a19cd62660d",
});
console.log("initialized");
var paused;
var stream = new Audio();		
var counter = 0;
var songs = [
	{"url":"https://soundcloud.com/samsin111/thug-juice", "name": "Thug Juice", "artist": "samsin"},
	{"url": "https://soundcloud.com/weirdinside/breathing-as-we-know-ep-out-211-vinyl-pre-order-211", "name":"breathing", "artist":"weirdinside"},
	{"url": "https://soundcloud.com/quietluke/blue-day-3", "name":"Blue Day", "artist": "Quiet Luke"}
];

function songsGetter(){
	return songs;
}


function nextSong(){
	console.log("next song called");
	if (counter != (songs.length-1) ){
      counter ++;
      resolveAndPlayUrl();
  	}
}

function previousSong(){
	console.log("previous song called");
	if (counter != 0){
        counter --;
        resolveAndPlayUrl();
    }
}

function resolveAndPlayUrl(){
	if(!paused){
		SC.get("https://api.soundcloud.com/resolve/?url=" + songs[counter].url, {limit: 1}, function(result){
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

var port = chrome.runtime.connect({name: "extensionRequests"});
port.onMessage.addListener(function(req) {
  if (req.command == "getSongs"){
  	var songs = songsGetter();
    port.postMessage({songs: songs});
  }
});




chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.command == "play") {
      resolveAndPlayUrl();
      sendResponse({commandResponse: "playing"});
    } else if (request.command == "pause"){
      pauseStream(paused);
      sendResponse({commandResponse: "paused"});
    }  else if (request.command == "nextSong"){
      nextSong();
      sendResponse({commandResponse: "next song command processed"});
    } else if (request.command == "previousSong"){
      previousSong();
      sendResponse({commandResponse: "previous song command processed"});
    } else if (request.command == "addSong"){
    	pushSong(request.url);
    	sendResponse({commandResponse: "song added"});
    } else if (request.command == "check"){
    	if(stream.ended){
			nextSong();
			sendResponse({commandResponse: "nextCalled	"});
		} else {
			console.log("song playing");
			sendResponse({commandResponse: "stillPlaying"});
		}
    } else if (request.command == "getSongs"){
    	// var songs = songsGetter();
    	console.log("getSongs called")
    	sendResponse({songs: songs});
    }

});

// $.get(chrome.extension.getURL('templates/notification.html'), function(data) {
//     // var div = $(".sc-button-group");
//     var div = document.getElementsByClassName("sc-button-group");
//     console.log(div);
//     // div.append(data);
// });
//

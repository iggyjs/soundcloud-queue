$(function(){
	returnAllSongs();

	$("#play").on('click', function(){

		chrome.extension.sendMessage({command: "play"}, function(response) {
		    console.log(response.commandResponse);
		});
		chrome.alarms.create("myAlarm", {delayInMinutes: 0, periodInMinutes: 0.0166} );

	});

	$("#pause").on('click', function(){
		chrome.extension.sendMessage({command: "pause"}, function(response) {
			console.log(response.commandResponse);
		});
		chrome.alarms.clearAll();
	});

	// $("#addSongButton").on('click', function(){

	// 	var passedUrl = $("#addSongInput").val();
	// 	chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
	// 	  chrome.tabs.sendMessage(tabs[0].id, {command: "addSong", url:passedUrl }, function(response) {
	// 	    console.log(response.commandResponse);
	// 	  });
	// 	});
	// 	// clear input value
	// 	$("#addSongInput").val('');
	// });

	$("#forward").on('click', function(){
		chrome.extension.sendMessage({command: "nextSong"}, function(response) {
			console.log(response.commandResponse);
		});
    });
    $("#back").on('click', function(){
      chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
		  chrome.extension.sendMessage({command: "previousSong"}, function(response) {
		    console.log(response.commandResponse);
		  });
	  });
    });
});


function returnAllSongs(){
	chrome.extension.sendMessage({command: "getSongs"}, function(response) {
		var songs = response.songs;
    	var queue = new Vue({
    		el: "#queue",
    		data: {
    			songs: songs
    		}
    	})
  	});
}

function testFn(){
    // chrome.extension.sendMessage({command: "play"},
    // function (response) {
    // 	console.log(response);
    // });
}
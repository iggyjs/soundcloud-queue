$(function(){
	console.log("creating alarm:")
	chrome.alarms.create("myAlarm", {delayInMinutes: 0, periodInMinutes: 0.0166} );
	$("#play").on('click', function(){
		chrome.tabs.query({url: "http://example.com/"}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {command: "play"}, function(response) {
		    console.log(response.commandResponse);
		  });
		});
	});
	$("#pause").on('click', function(){
		chrome.tabs.query({url: "http://example.com/"}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {command: "pause"}, function(response) {
		    console.log(response.commandResponse);
		  });
		});
	});
	$("#addSongButton").on('click', function(){
		console.log("updated");
		//send message to content script
		var passedUrl = $("#addSongInput").val();
		chrome.tabs.query({url: "http://example.com/"}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {command: "addSong", url:passedUrl }, function(response) {
		    console.log(response.commandResponse);
		  });
		});
		// clear input value
		$("#addSongInput").val('');
	});
});

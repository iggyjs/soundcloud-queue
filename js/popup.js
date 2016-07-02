$(function(){
	new Vue({
	  el: '#app',
	  data: {
	    message: 'Hello Vue.js!'
	  }
	})

	$("#play").on('click', function(){
		chrome.tabs.query({url: "http://example.com/"}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {command: "play"}, function(response) {
		    console.log(response.commandResponse);
		  });
		});
		console.log("creating alarm:")
		chrome.alarms.create("myAlarm", {delayInMinutes: 0, periodInMinutes: 0.0166} );
	});
	$("#pause").on('click', function(){
		chrome.tabs.query({url: "http://example.com/"}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {command: "pause"}, function(response) {
		    console.log(response.commandResponse);
		  });
		});
		chrome.alarms.clearAll();
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
	 $("#forward").on('click', function(){
      	chrome.tabs.query({url: "http://example.com/"}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {command: "nextSong"}, function(response) {
		    console.log(response.commandResponse);
		  });
		});
    });

    $("#back").on('click', function(){
      chrome.tabs.query({url: "http://example.com/"}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {command: "previousSong"}, function(response) {
		    console.log(response.commandResponse);
		  });
	  });
    });
});

$(function(){
	$("#play").on('click', function(){
		chrome.tabs.query({url: "http://example.com/"}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {command: "play"}, function(response) {
		    console.log("response:");
		    console.log(response);
		  });
		});
	});
});
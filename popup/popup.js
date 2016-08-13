$(function(){

	var queue = new Vue({
    		el: "#queue",
    		data: {
    			songs: []
    		},
    		methods: {
    			play: function(){
    				console.log("called");
    				chrome.extension.sendMessage({command: "play"}, function(response) {
					    console.log(response.commandResponse);
					});
					chrome.alarms.create("myAlarm", {delayInMinutes: 0, periodInMinutes: 0.0166} );
    			},
    			pause: function(){
    				chrome.extension.sendMessage({command: "pause"}, function(response) {
						console.log(response.commandResponse);
					});
					chrome.alarms.clearAll();
    			},
    			next: function(){
    				chrome.extension.sendMessage({command: "nextSong"}, function(response) {
						console.log(response.commandResponse);
					});
    			},
    			prev: function(){
    				chrome.extension.sendMessage({command: "previousSong"}, function(response) {
						console.log(response.commandResponse);
					});
    			},
    			addSong: function(){
    				var passedUrl = $("#addSongInput").val();
    				var vueInstance = this;
    				chrome.extension.sendMessage({command: "addSong", url:passedUrl }, function(response) {
    					if(response.songs){
    						var songToAddIndex = (response.songs.length - 1);
    						vueInstance.$data.songs.push(response.songs[songToAddIndex]);
    					}
		    			
		  			});
    			}
    		}
	})
	returnAllSongs(queue);



		
		// chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
		
		// });
		// // clear input value
		// $("#addSongInput").val('');

});


function returnAllSongs(vueInstance){
	chrome.extension.sendMessage({command: "getSongs"}, function(response) {
		var songs = response.songs;
		vueInstance.$data.songs = songs;
  	});
}
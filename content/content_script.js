// // TODO: Add buttons to soundcloud.com
var buttons = document.getElementsByClassName("sound__soundActions");
var globalScrollCounter = 0;

function QueueFunctionExtension(){
	alert("wokring");
}

window.onload = function (){
	window.onscroll = function(ev) {
	    if ((window.innerHeight + window.scrollY + 500) >= document.body.offsetHeight) {
	        setTimeout(checkForMoreButtons, 3500);
	    }
	};

	var ButtonComponent = Vue.extend({
	  template: '<button>{{buttonText}}</button >'
	})
	
	for(var i=0; i<buttons.length; i++){

		var button = new ButtonComponent({
		  data: {
		    buttonText: 'Add'
		  },
		  methods: {
		  	handleClick: function(){
		  		var songBanner = $(this.$el).parent().parent().parent()[0];
				var artwork = $($(songBanner).find("span.sc-artwork")[0]).css("background-image");
		        artwork = artwork.replace('url(','').replace(')','').replace(/\"/gi, "");
		        var songName = $(songBanner).find("a.soundTitle__title")[0].innerText;
		        var artistName = $(songBanner).find("div.soundTitle__secondary")[0].innerText;
		        var songLink = $(songBanner).find("a.soundTitle__title")[0].href;

		        if (songLink.indexOf("/sets/") == -1){
			        var payload = {
			        	name: songName,
			        	artist: artistName,
			        	link: songLink,
			        	artwork: artwork
			        }

			        chrome.runtime.sendMessage({command: "addSongContentScript", song: payload}, function(response){
			        	console.warn("======== response =======");
			        	console.log(response);
			        });
			    }
			    else {
			    	alert("We don't do sets ... yet!");
			    }
		  	}
		  }
		})

		var p = "<div v-on:click='handleClick' class='mount-point" + globalScrollCounter + " button-component-queue'></div>"

		buttons[i].insertAdjacentHTML('afterend', p);
		button.$mount('.mount-point' + globalScrollCounter);
		globalScrollCounter++;

	}	

}

function checkForMoreButtons(){
	var ButtonComponent = Vue.extend({
	  template: '<button>{{buttonText}}</button >'
	})

	var b = document.getElementsByClassName("sound__soundActions"); 

	for(var i=globalScrollCounter; i<buttons.length; i++){

		var button = new ButtonComponent({
		  data: {
		    buttonText: 'Add'
		  },
		  methods: {
		  	handleClick: function(){
		  		var songBanner = $(this.$el).parent().parent().parent()[0];
				var artwork = $($(songBanner).find("span.sc-artwork")[0]).css("background-image");
		        artwork = artwork.replace('url(','').replace(')','').replace(/\"/gi, "");
		        var songName = $(songBanner).find("a.soundTitle__title")[0].innerText;
		        var artistName = $(songBanner).find("div.soundTitle__secondary")[0].innerText;
		        var songLink = $(songBanner).find("a.soundTitle__title")[0].href;

		        if (songLink.indexOf("/sets/") == -1){
			        var payload = {
			        	name: songName,
			        	artist: artistName,
			        	link: songLink,
			        	artwork: artwork
			        }

			        chrome.runtime.sendMessage({command: "addSongContentScript", song: payload}, function(response){
			        	console.warn("======== response =======");
			        	console.log(response);
			        });
			    }
			    else {
			    	alert("We don't do sets ... yet!");
			    }
		  	}
		  }

		})

		var p = "<div v-on:click='handleClick' class='mount-point" + globalScrollCounter + " button-component-queue'></div>"

		buttons[i].insertAdjacentHTML('afterend', p);
		button.$mount('.mount-point' + globalScrollCounter);
		globalScrollCounter++;
	}	
}



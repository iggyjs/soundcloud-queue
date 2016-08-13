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
	  template: '<button>{{buttonText}}</button >',
	  methods: {
		  	handleClickTest: function(){
				var songBanner = $(this.$el).parent().parent().parent()[0];
				var artwork = $($(songBanner).find("span.sc-artwork")[0]).css("background-image");
		        artwork = artwork.replace('url(','').replace(')','').replace(/\"/gi, "");
		        console.log(artwork);
		  	}
		  }

	})
	
	for(var i=0; i<buttons.length; i++){

		var button = new ButtonComponent({
		  data: {
		    buttonText: 'Add'
		  }
		})

		var p = "<div v-on:click='handleClickTest' class='mount-point" + globalScrollCounter + " button-component-queue'></div>"

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

	console.log(globalScrollCounter);	

	for(var i=globalScrollCounter; i<buttons.length; i++){

		var button = new ButtonComponent({
		  data: {
		    buttonText: 'test'
		  },
		  methods: {
		  	handleClickTest: function(){
		  		console.log(this);
		  	}
		  }

		})

		var p = "<div v-on:click='handleClickTest' class='mount-point" + globalScrollCounter + " button-component-queue'></div>"

		buttons[i].insertAdjacentHTML('afterend', p);
		button.$mount('.mount-point' + globalScrollCounter);
		globalScrollCounter++;
	}	
}



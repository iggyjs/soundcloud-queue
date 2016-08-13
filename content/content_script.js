// // TODO: Add buttons to soundcloud.com
var buttons = document.getElementsByClassName("soundActions");


function QueueFunctionExtension(){
	alert("wokring");
}

window.onload = function (){
	var ButtonComponent = Vue.extend({
	  template: '<button>{{buttonText}}</button >'
	})


	counter = 0;
	
	for(var i=0; i<buttons.length; i++){	
		var button = new ButtonComponent({
		  data: {
		    buttonText: 'test'
		  },
		  methods: {
		  	handleClickTest: function(){
		  		alert('working');
		  	}
		  }

		})

		var p = "<div v-on:click='handleClickTest' class='mount-point" + counter + " button-component-queue'></div>"

		buttons[i].insertAdjacentHTML('afterend', p);
		button.$mount('.mount-point' + counter);
		counter++;

	}	


	
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setTimeout(checkForMoreButtons, 2000);
    }
};

function checkForMoreButtons(){
	var b = document.getElementsByClassName("sc-button-group");
	console.log(buttons);
}



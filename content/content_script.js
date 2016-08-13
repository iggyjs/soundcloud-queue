// // TODO: Add buttons to soundcloud.com
var buttons = document.getElementsByClassName("sc-button-group");

window.onload = function (){
	var p = "<button>hacked</button>"
	console.log(p);
	for(var i=0; i<buttons.length; i++){	
		buttons[i].insertAdjacentHTML('afterend', p);
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
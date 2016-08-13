// // TODO: Add buttons to soundcloud.com

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setTimeout(checkForMoreButtons, 2000);
    }
};

function checkForMoreButtons(){
	var b = document.getElementsByClassName("sc-button-group");
	console.log(b.length);
}
function big() {
	var src = event.target.getAttribute('src');
	var popup = document.getElementById("popupScene");
	popup.style.visibility = "visible";
	var img = document.createElement("IMG");
	img.src = src;
	img.id = "bigImg";
	
	popup.appendChild(img);
}

function small() {
	var popup = document.getElementById("popupScene");
	var img = document.getElementById("bigImg");
	popup.style.visibility = "hidden";
	popup.removeChild(img);
}
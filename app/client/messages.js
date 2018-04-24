var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		// Typical action to be performed when the document is ready:
		let response = JSON.parse(xhttp.responseText);
		document.getElementById("demo").innerHTML = response.messages.join(',<br>');
	}
};
xhttp.open("GET", "messages.json", true);
xhttp.send();
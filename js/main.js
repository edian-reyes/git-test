function Animals(spe, fullName) {
	this.species = spe;
	this.name = fullName;
	this.action = function() {
		var div    = document.querySelector("#info");
		info.innerHTML += "<p>This " + this.species + " name is " + this.name + "</p>";
	}
}

var dog = new Animals("dog", "Cuddy");

var btn = document.querySelector("#btn");
btn.addEventListener("click", whenClicked);

function whenClicked(){
	dog.action();
}
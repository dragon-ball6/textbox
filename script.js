let txt = document.getElementById("content");
let onload = (function() {
	// to make the text entered in previously appear. accesses localStorage.
	txt.innerHTML = localStorage.txt_c;
})();
function appear() {
	
}
function saved() {
	window.localStorage.txt_c = txt.value;
}
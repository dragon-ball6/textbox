let txt = document.getElementById("content");
let notice = document.getElementById("success");
let save_btn = document.getElementById("save");
let onload = (function() {
	// to make the text entered in previously appear. accesses localStorage.
	txt.innerHTML = localStorage.txt_c;
})();
// notice when you save your note
function appear() {
	notice.style.display = "block";
	save_btn.disabled = true;
}
function hide() {
	notice.style.display = "none";
	save_btn.disabled = false;
}
// when save button is clicked
function saved() {
	window.localStorage.txt_c = txt.value;
	appear();
	setTimeout(hide, 3000);
}
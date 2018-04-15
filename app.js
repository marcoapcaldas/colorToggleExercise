var body = document.querySelector("body");
var buttonClickMe = document.querySelector("button");
buttonClickMe.addEventListener("click", function(){
	body.classList.toggle("orangeBackground");
});
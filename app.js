var pics = [
	"images/batman.jpg",
	"images/car.jpg",
	"images/horse.jpg",
	"images/picture.jpg",
	"images/pool.jpg"
];

var btn = document.querySelector("button");
var img =document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 5){
		counter = 0;
	}
	img.src = pics[counter];

	counter += 1;
});

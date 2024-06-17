const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let index=0
let ClickFlecheGauche = document.querySelector(".arrow_left");
ClickFlecheGauche.addEventListener("click" , () => {

	index--;
	console.log(index);
	if (index<0) {
		index=slides.length-1;}
		img.src=`./assets/images/slideshow/.image`;
    console.log("eventlistener fleche gauche ok ")});

let ClickFlecheDroite = document.querySelector(".arrow_right");
ClickFlecheDroite.addEventListener("click", () => {
	
	index++;
	console.log(index);
  if (index>0) {
		index=slides.length+1;}
	
img.src = `./assets/images/slideshow/.image`;
console.log("eventlistener fleche droite ok")});








console.log(slides);
let SlidesNumber = slides.length;
for (i=0; i < SlidesNumber; i ++) {	
	console.log(`tableau : ${slides[i]}`);
	console.log(`valeur de i : ${i}`);
	console.log(`propriété image ${slides[i].image}`);
	// équivalent de console.log('propriété image '+slides[i].image);
	console.log(`propriété tagline ${slides[i].tagLine}`);
	
	
	}



	//variables et const//
  const img = document.querySelector(".banner-img");
  const textone = document.querySelector(" #banner p ");
  const texttwo = document.querySelector(" #banner span ");
	let dots = document.querySelector(".dots");
	console.log(dots);
	



function DisplayDots() {
	for (let i = 0 ; i < slides.length; i++){
		const dot = document.createElement("div");
		dot.classList.add("dot");
    dots.appendChild(dot);
		//etape suivante//
//si on se trouve sur index alors classe= dots_elector//
//boucle for: if i==? dot.classList.add("dot_selector")//
//ce qui peut donner: if i==*page actuelle* ; dot.classList.add("dot_selector")//

		if (i==index){
			dot.classList.add("dot_selected")
		}

}

}

DisplayDots();










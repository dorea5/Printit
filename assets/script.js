const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let NbSlide = slides.length;


const img = document.querySelector("#banner img");
const text = document.querySelector(" #banner p ");
let dots = document.querySelector(".dots");
console.log(dots);



let index = 0


//GAUCHE//
let ClickFlecheGauche = document.querySelector(".arrow_left");
ClickFlecheGauche.addEventListener("click", () => {

	index--;
	console.log(index);

	if (index < 0) {
		index = NbSlide - 1;
	}

	img.src = `./assets/images/slideshow/${slides[index].image}`;
	text.innerHTML = `./assets/images/slideshow/${slides[index].tagLine}`;
	console.log("eventlistener fleche gauche ok ")
});



//DROITE//
let ClickFlecheDroite = document.querySelector(".arrow_right");
ClickFlecheDroite.addEventListener("click", () => {
  const dotslist = document.querySelectorAll(".dots .dot");
	dotslist[index].classList.remove("dot_selected");
	index++;
	console.log(index);


	if (index > NbSlide - 1) {
		index = 0
	}

  img.src = `./assets/images/slideshow/${slides[index].image}`;
	text.innerHTML = `./assets/images/slideshow/${slides[index].tagLine}`;
	console.log("eventlistener fleche droite ok")
});




console.log(slides);



for (i = 0; i < NbSlide; i++) {
	console.log(`tableau : ${slides[i]}`);
	console.log(`valeur de i : ${i}`);
	console.log(`propriété image ${slides[i].image}`);
	// équivalent de console.log('propriété image '+slides[i].image);
	console.log(`propriété tagline ${slides[i].tagLine}`);


}



function DisplayDots() {
	for (let i = 0; i < NbSlide; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		//etape suivante//
		//si on se trouve sur index alors classe= dots_elector//
		//boucle for: if i==? dot.classList.add("dot_selector")//
		//ce qui peut donner: if i==*page actuelle* ; dot.classList.add("dot_selector")//

		if (i == index) {
			dot.classList.add("dot_selected")
		}

	}

}

DisplayDots();










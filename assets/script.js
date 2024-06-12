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



let ClickFlecheGauche = document.getElementById("flechegauche");
ClickFlecheGauche.addEventListener("click" , () => 
{ console.log("eventlistener fleche gauche ok ")});

let ClickFlecheDroite = document.getElementById("flechedroite");
ClickFlecheDroite.addEventListener("click", () =>
{console.log("eventlistener fleche droite ok")});


console.log(slides);
let SlidesNumber = slides.length;
for (i=0; i < SlidesNumber; i ++) {	
	console.log(`tableau : ${slides[i]}`);
	console.log(`valeur de i : ${i}`);
	console.log(`propriété image ${slides[i].image}`);
	// équivalent de console.log('propriété image '+slides[i].image);
	console.log(`propriété tagline ${slides[i].tagLine}`);
	
	
	}


	let dots = document.querySelector(".dots");
	console.log(dots);

function DisplayDots() {
	for (let i = 0 ; i < slides.length; i++){
		const dot = document.createElement("div");
		dot.classList.add("dot");
    dots.appendChild(dot);

}

}

DisplayDots();

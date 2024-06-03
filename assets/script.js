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


class Carousel {

	/**
	 * 
	 * @param {HTMLElement} element 
	 * @param {Object} options 
	 * @param {Object} options.slidesToScroll Nombre d'éléments à faire défiler
	 * @param {Object} options.slidesVisible  Nombre d'éléments visibles dans un slide
	 */

constructor (element, options = {}){
	this.element=element
	this.options = Object.assign({}, {

		slidesToScroll:1,
		slidesVisible:1
	},options)
	this.children = [].slice.call(element.children)
	

	let root = this.createDivWithClass('carousel')
	this.Container = this.createDivWithClass('carousel__container')
	root.appendChild(this.Container)

	this.element.appendChild(root)
	this.children.forEach((child)=>
		{let item = this.createDivWithClass('carousel__item')
	
	item.style.width=((100/this.options.slidesVisible)/ratio)+ "%"
	item.appendChild(child)
		
		
			this.Container.appendChild(item)
	})


}

setStyle (){
let ratio = this.children.length / this.options.slidesVisible

this.Container.style.width
 = (ratio*100)+"%"

/**
 * 
 * @param {string} className 
 * @returns {HTMLElement}
 */

createDivWithClass (className) {
	let div = document.createElement('div')
	div.setAttribute('class', 'className')
	return div

}
}

document.addEventListener('DOMContentLoaded', function() {

new Carousel(document.querySelector('#carousel1'), {
	slidesToScroll:1,
	slidesVisible: 1
})
})
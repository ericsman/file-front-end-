// Select element function
const selectElement = function (element) {
	return document.querySelector(element);

};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListenner('clik', function (){
	body.classList.toggle('open');
});
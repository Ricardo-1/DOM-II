// Your code goes here

// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 

// 	* [X] `mouseover`
// 	* [X] `mouseout`
// 	* [X] `mousedown`
// 	* [X] `mouseup`
// 	* [X] `click`
// 	* [X] `dblclick`
// 	* [X] `auxclick`
//  * [X] `copy`
//  * [X] `cut`
// 	* [X] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`

//NAV LINK EVENTS
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(link => link.addEventListener('mousedown', function () {
    link.style.filter = 'blur(3px)';
}))
navLink.forEach(link => link.addEventListener('mouseup', function () {
    link.style.filter = 'blur(0px)';
}))

//PREVENTDEFAULT
navLink.forEach(link => link.addEventListener('click', function (e) {
    e.preventDefault();
}))

//IMAGES EVENTS
const image = document.querySelectorAll("img");
 image.forEach(pic => pic.addEventListener('mouseover', function () {
     pic.style.filter = 'grayscale(100%)';
 }))
 image.forEach(pic => pic.addEventListener('mouseout', function () {
     pic.style.filter = 'grayscale(0%)';
 }))
image.forEach(pic => pic.addEventListener('click', function () {
    pic.style.filter = 'blur(10px)';
}))
//PARAGRAPH EVENTS
const paragraph = document.querySelectorAll('p');
paragraph.forEach(par => par.addEventListener('auxclick', function () {
    par.style.filter = 'blur(10px)';
}))
paragraph.forEach(par => par.addEventListener('copy', function () {
    alert('NO COPYING');
}))

paragraph.forEach(par => par.addEventListener('cut', function () {
    alert('NO CUTTING');
}))



//BUTTON EVENTS
const button = document.querySelectorAll('.btn');
button.forEach(btn => btn.addEventListener('click', function() {
    btn.style.filter = 'blur(10px)';
}))
button.forEach(btn => btn.addEventListener('dblclick', function() {
    btn.style.backgroundColor = 'purple';
}))

//KEY EVENTS
const world = document.querySelector('body');
world.addEventListener('keydown', function () {
    alert('Your Hitting Keys!');
})


//STOP PROPAGATION

const home = document.querySelector('.intro');
home.addEventListener('click', function() {
    home.style.backgroundColor = 'red';
})

const parag = document.querySelector('.parag');
parag.addEventListener('click', function(e) {
    parag.style.backgroundColor = "blue";
    e.stopPropagation();
})

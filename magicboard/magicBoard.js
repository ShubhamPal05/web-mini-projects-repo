// var boxes =  document.querySelectorAll('.box');

// console.log(boxes);

// var random = (n) => {
//     return Math.floor(Math.random()*n);
// }

// var mouseIn = (box) => {
//     box.style.backgroundColor = `rgb( ${random(255)}, ${random(255)}, ${random(255)})`;
// }

// var mouseOut = (box) => {
//     setTimeout(() => {
//         box.style.backgroundColor = 'rgb(39, 39, 39)';
//     }, 1000);
// }

// for (const box of boxes) {  // ERROR: here var instead of const will not work because after the loob ends variable 'box' will have value of last one from 'boxes' (! box variable is not dead yet ) 
//     box.addEventListener('mouseover', () => {
//         mouseIn(box);
//         mouseOut(box);
//     });
// }

const container = document.getElementsByClassName('container');
console.log(container);

var box = document.createElement('div');
box.classList.add('box');

for( var i=0; i<506; i++){
    container[0].appendChild(box.cloneNode(true)); // ERROR: you cann't append one child again and again. Instead you can clone and then append it again.
}

var boxes =document.querySelectorAll('.box');

var random = (n) => {
    return Math.floor(Math.random()*n);
}

var mouseIn = (box) => {
    box.style.backgroundColor = `rgb( ${random(255)}, ${random(255)}, ${random(255)})`;
}

var mouseOut = (box) => {
    setTimeout(() => {
        box.style.backgroundColor = 'rgb(39, 39, 39)';
    }, 1000);
}

for (const box of boxes) {  // ERROR: here var instead of const will not work because after the loop ends variable 'box' will have value of last one from 'boxes' (! box variable is not dead yet ) 
    box.addEventListener('mouseover', () => {
        mouseIn(box);
        mouseOut(box);
    });
}
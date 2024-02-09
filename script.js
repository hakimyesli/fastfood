let bars = document.querySelector('.bars');
let close = document.querySelector('.close');
let header = document.querySelector('header')
function open(){
    header.classList.toggle('open')
}

bars.addEventListener('click',open);
close.addEventListener('click',open);
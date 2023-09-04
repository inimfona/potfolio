
var typed = new Typed('.autotyped', {
    strings: [" Inimfon udofia.", "a web developer."],
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
  images = new Array;
images[0] = "img/exboy1.png";
images[1] = "img/exboy3.png";
images[2] = "img/exboy2.png";


setInterval( function() {
    changeImage()
}, 5000);

x = 0;

function changeImage() {
    document.querySelector('.boytype').src = images[x];

    if ( x < 2) {
        x += 1;
    } else if ( x = 3) {
        x = 0;
    }
}
let handburger =document.querySelector('.handburger')
handburger.addEventListener('click',()=>{
    handburger.classList.toggle('active');
    
})
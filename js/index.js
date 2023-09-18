
var typed = new Typed('.autotyped', {
    strings: [" Inimfon udofia.", "a web developer."],
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });

let progress=document.querySelector('#progress')
let html =document.querySelector('html')
function scroll(){
    let screenHeight =window.innerHeight
    let scrolly = (window.innerHeight)
    let maxscreenhheight=html.scrollHeight
    console.log(screenHeight,scrolly)
    let howmuchuserscroll=screenHeight+scrollY
    let progres= (howmuchuserscroll / maxscreenhheight)*100
    progress.value=progres
}
scroll()
window.addEventListener('scroll',scroll)
var slide = 0;
mostraSlide();

function mostraSlide() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("indicador");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slide++;
    if (slide > slides.length) {slide = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide-1].style.display = "block";  
    dots[slide-1].className += " active";
    setTimeout(mostraSlide, 4500); // Change image every 2 seconds
}

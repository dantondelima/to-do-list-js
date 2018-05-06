var slideIndice = 0;
mostraSlide();

function mostraSlide() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var indices = document.getElementsByClassName("indice");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndice++;
    if (slideIndice > slides.length) { slideIndice = 1 }
    for (i = 0; i < indices.length; i++) {
        indices[i].className = indices[i].className.replace(" visivel", "");
    }
    slides[slideIndice - 1].style.display = "block";
    indices[slideIndice - 1].className += " visivel";
    setTimeout(mostraSlide, 3000); // Change image every 2 seconds
}
let menuVisible = false
// funcion que oculta y muestra el menu
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    // oculta el menu una ves selecciona una opcion
    document.getElementById("nav").classList="";
    menuVisible = false
}
// funcion que aplica las animaciones del las haibilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let haibilidades = document.getElementsByClassName("progreso");
        haibilidades[0].classList.add("javascript")
        haibilidades[1].classList.add("htmlcss")
        haibilidades[2].classList.add("git")
        haibilidades[3].classList.add("react")
        haibilidades[4].classList.add("node")
        haibilidades[5].classList.add("Comunicacion")
        haibilidades[6].classList.add("Trabajo")
        haibilidades[7].classList.add("Creatividad")
        haibilidades[8].classList.add("Dedicacion")
        haibilidades[9].classList.add("Diciplina")
        
    }
}

// deteto el escroling para aplicar la animacion de barra de abilidades
window.onscroll = function(){
    efectoHabilidades();
}
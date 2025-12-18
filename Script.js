


const SCROLL_SENSITIVITY = 5; 

window.onscroll = function() {
    handleScrollDirection();
};

function handleScrollDirection() {
    const headerContainer = document.getElementsByClassName("HeaderContainer")[0];
    const VHaPX = window.innerHeight * (4 / 100);
    const imageElement1 = document.getElementById("Facebook");
    const imageElement2 = document.getElementById("Instagram");
    const imageElement3 = document.getElementById("TripAdvisor");
    
    const currentScrollTop = document.documentElement.scrollTop;

    
    
    if(currentScrollTop < VHaPX){
        headerContainer.classList.remove("scrolled");
        imageElement1.src = "ASSETS/Facebook_Logo_Secondary.png"
        imageElement2.src = "ASSETS/Instagram_Glyph_White.png"
       
        
    }else{
        headerContainer.classList.add("scrolled");
        imageElement1.src = " ASSETS/facebookblack.png"
        imageElement2.src = "ASSETS/Instagram_Glyph_Black.png"
        
    }
    
    
}
// Script.js

// 1. Seleccionamos los elementos del DOM
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".HeaderNavigationContainer");

// 2. Agregamos el evento 'click' al icono hamburguesa
hamburger.addEventListener("click", () => {
    // Alternar la clase 'active' en el botón (para la animación de X)
    hamburger.classList.toggle("active");
    // Alternar la clase 'active' en el menú (para que baje/aparezca)
    navMenu.classList.toggle("active");
});

// 3. (Opcional) Cerrar el menú cuando se hace clic en un enlace
document.querySelectorAll(".HeaderNavigationText").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
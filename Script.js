


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
        imageElement1.src = "/ASSETS/image (1).webp"
        imageElement2.src = "/ASSETS/image (2).webp"
        imageElement3.src = "/ASSETS/image (3).webp"
        
    }else{
        headerContainer.classList.add("scrolled");
        imageElement1.src = "/ASSETS/facebook-app-symbol.png"
        imageElement2.src = "/ASSETS/instagramicon.png"
        imageElement3.src = "/ASSETS/triptri.png"
    }
    
    
}
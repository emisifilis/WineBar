
let lastScrollTop = 0; 

const SCROLL_SENSITIVITY = 5; 

window.onscroll = function() {
    handleScrollDirection();
};

function handleScrollDirection() {
    const headerContainer = document.getElementsByClassName("HeaderContainer")[0];
    const VHaPX = window.innerHeight * (4 / 100);
    
    
    const currentScrollTop = document.documentElement.scrollTop;

    
    if (currentScrollTop < VHaPX) {
        headerContainer.classList.remove("scrolled");
        lastScrollTop = currentScrollTop;
        return; 
    }

    
    if (currentScrollTop > lastScrollTop + SCROLL_SENSITIVITY) {
        
        
        headerContainer.classList.add("scrolled");
        
    } else if (currentScrollTop < lastScrollTop - SCROLL_SENSITIVITY) {
        
        
        headerContainer.classList.remove("scrolled");
        
    }

    
    lastScrollTop = currentScrollTop;
}
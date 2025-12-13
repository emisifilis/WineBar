window.onscroll = function() {scrollFunction()};
let VH = 20;
function scrollFunction() {
    const headerContainer = document.getElementsByClassName("HeaderContainer")[0];
    const headerTitles = document.getElementsByClassName("HeaderTitle");
    const VHaPX = window.innerHeight * (VH / 100);

    if (document.body.scrollTop >  VHaPX|| document.documentElement.scrollTop > VHaPX) {
        
        headerContainer.classList.add("scrolled");
        
        for (let i = 0; i < headerTitles.length; i++) {
            headerTitles[i].style.fontSize = "2vh"; 
        }
    } else {
        
        headerContainer.classList.remove("scrolled");
        for (let i = 0; i < headerTitles.length; i++) {
            headerTitles[i].style.fontSize = "3.3vh"; 
        }
    }
}
let linksElements = Array.from(document.getElementsByClassName("menu__link"));

function linker(event) {
    let subMenuElement = event.target.parentElement.querySelector(".menu_sub");
    
    if (subMenuElement !== null) {
        subMenuElement.classList.toggle("menu_active");
        return false;
    } 
    return true;
} 

for (i = 0; i < linksElements.length; i++) {
    linksElements[i].onclick = linker;
 }
 
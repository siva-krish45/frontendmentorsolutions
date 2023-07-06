const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");


menu.addEventListener("click", ()=>{
    const expanded = navbar.getAttribute("aria-expanded");

    if(expanded === "false"){
        navbar.setAttribute("aria-expanded","true");
        menu.style.background = " url('assets/images/icon-menu-close.svg') no-repeat center center";
        overlay.setAttribute("data-overlay", "true");
    }else{
        navbar.setAttribute("aria-expanded","false");
        menu.style.background = "url('assets/images/icon-menu.svg') no-repeat center center";
        overlay.setAttribute("data-overlay", "false");
        
    }


});
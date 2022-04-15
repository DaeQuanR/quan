const navSlide = () => {
    const see = document.querySelector('.see');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle nav
    see.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')

        //animate links
        navLinks.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+ .5}s`;
    
            }
    
        
    
        });

        //see animation
        see.classList.toggle('toggle');

    });
    //animate links
    
}

navSlide();


//typing animation Script
var typed = new Typed(".typing", {
    strings:[" an Artist", "a Videographer","a Designer","Next Up"],
    typeSpeed: 100,
    backSpeed:60,
    loop: true


});
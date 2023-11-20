/*========== SHOW MENU ============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close') ;

/* menu show */
/* validate if constant exists */
if( navToggle ){
    navToggle.addEventListener( 'click', () => {
        navMenu.classList.add('show-menu');
    } )
}

/* menu hidden */
/* validate if constant exists */
if( navClose ){
    navClose.addEventListener( 'click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/* ============ REMOVE MENU MOBILE ============= */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu'); 
}

navLink.forEach( n => n.addEventListener( 'click', linkAction));

/*============== CHANGE BACKGROUND HEADER ==========================*/
const shadowHeader = () =>{
    const header = document.getElementById('header');
    //When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') :
                         header.classList.remove('shadow-header');
}

window.addEventListener( 'scroll', shadowHeader);

/*============= EMAIL JS =================*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactButton = document.getElementsByClassName('contact__button')[0];

//Change the button text color after clicking
contactButton.addEventListener( 'click', () => {
    contactButton.classList.add('text-color-light');
});


const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_06xotmr','template_9c0z4ch','#contact-form','revyh4GOMBfSxAMvc')
    .then( () => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        //Remove message after 5s and change button text color
        setTimeout( () => {
            contactMessage.textContent = '';
            contactButton.classList.remove('text-color-light');
        }, 5000);
        
        //Clear Form
        contactForm.reset();
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail);

/*============= SHOW SCROLL UP ================*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');

    //When the scroll is higher than 350 viewport height, add the show-scroll class to the 'a' tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*============= SCROLL ACTION ACTIVE LINK ======================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollDown = window.scrollY;

    sections.forEach( current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link');
        }else{
            sectionClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

/*=============== DARK LIGHT THEME ================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const darkIcon = 'fa-sun';

//Previously selected topic (if user selecte)
const selectedTheme = localStorage.getItem('selected-theme-asm');
const selectedIcon = localStorage.getItem('selected-icon-asm');

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' ;
const getCurrentIcon = () => themeButton.classList.contains(darkIcon) ? 'fa-sun' : 'fa-moon';

//We validate if the user previously chose a topic
if(selectedTheme){
    //If the validaion if fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    if(selectedIcon === 'fa-sun'){
        themeButton.classList.add(darkIcon);
        themeButton.classList.remove('fa-moon');
    }else{
        themeButton.classList.add('fa-moon');
        themeButton.classList.remove('fa-sun');
    }
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener( 'click', () => {
    //Add or remove the dark theme/icon
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(darkIcon);
    themeButton.classList.toggle('fa-moon');

    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme-asm', getCurrentTheme());
    localStorage.setItem('selected-icon-asm', getCurrentIcon());
});

/*============== SCROLL REVEAL ANIMATION ===================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    //reset: true // Animations repeat
});

sr.reveal('.home__perfil, .about__image, .contact__mail', { origin: 'right' });
sr.reveal('.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data', { origin: 'left' });

sr.reveal('.services__card, .projects__card', { interval: 50});


//form email feature to send mail


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Initialize EmailJS with your user ID
    emailjs.init("R3c4cdw8bOUsNe9Xz");
    console.log('EmailJS initialized');


    const serviceID = 'service_sn3lwtd';
    const templateID = 'template_tm9lu5v';

    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;
    

    const templateParams = {
        fullName: fullName,
        emailAddress: emailAddress,
        contactNumber: contactNumber,
        emailSubject: emailSubject,
        message: message
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response); // Log response for debugging
            alert('Email sent successfully!');
        }, function(error) {
            console.error('Failed to send email:', error); // Log error for debugging
            alert('Failed to send email. Please try again later.');
        });
});








/*============menu icon navbar======================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/* toggle icon navbar*/

/*============scroll sections active link======================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
 
    });
}

//scroll sections
window.onscroll = () => {
    //sticky header
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
};


/*============remove menu icon navbar when click navbar link (scroll)======================*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


/*============swiper======================*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
});

/*============dark light mode======================*/

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*============Scroll reveal======================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .Contact form', { origin: 'bottom' });

 
 ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3,.home-content p, .about-content', { origin: 'right' });


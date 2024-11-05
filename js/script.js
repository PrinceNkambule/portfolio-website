// Form email feature to send mail
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Initialize EmailJS with your user ID
    emailjs.init("R3c4cdw8bOUsNe9Xz");
    console.log('EmailJS initialized');

    const serviceID = 'service_sn3lwtd';
    const templateID = 'template_tm9lu5v';

    const fullName = document.getElementById('fullName').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    const emailSubject = document.getElementById('emailSubject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate input fields
    if (!fullName) {
        alert('Please enter your full name.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailAddress)) {
        alert('Please enter a valid email address.');
        return;
    }

    const phonePattern = /^0\d{9}$/;
    if (!phonePattern.test(contactNumber)) {
        alert('Please enter a valid contact number (10 digits starting with 0).');
        return;
    }

    if (!emailSubject) {
        alert('Please enter a subject for your email.');
        return;
    }

    if (!message) {
        alert('Please enter a message.');
        return;
    }

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

/* Menu icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll sections active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        }
    });
});

/* Remove menu icon and navbar when clicking a navbar link */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

/* Swiper initialization */
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
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* Dark light mode toggle */
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/* Scroll reveal */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .Contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('fa-sun');
    themeToggle.classList.toggle('fa-moon');
});

// Scroll-to-Top Button
const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'flex';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animated Progress Bars
const progressBars = document.querySelectorAll('.progress-fill');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = value;
    });
};

const handleScroll = () => {
    const skillsSection = document.getElementById('skills-section');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        animateProgressBars();
        window.removeEventListener('scroll', handleScroll); // Trigger animation only once
    }
};

window.addEventListener('scroll', handleScroll);

// Dynamic Year Update in Footer
const currentYear = document.getElementById('currentYear');
currentYear.textContent = new Date().getFullYear();

// Form Submission Feedback
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';
    formStatus.style.color = 'blue';

    // Simulate form submission
    setTimeout(() => {
        formStatus.textContent = 'Message sent successfully!';
        formStatus.style.color = 'green';
        contactForm.reset();
    }, 2000);
});
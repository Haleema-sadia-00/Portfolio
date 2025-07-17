// Outstanding Modern Portfolio JS

// Fade-in on scroll for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 80) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight active section in navbar
function highlightNav() {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY + 120;
    navLinks.forEach(link => {
        link.classList.remove('active');
        const section = document.getElementById(link.getAttribute('href').substring(1));
        if (section && section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('scroll', highlightNav);
window.addEventListener('DOMContentLoaded', highlightNav);

// Back to Top Button functionality with animation
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    backToTopBtn.classList.add('clicked');
    setTimeout(() => backToTopBtn.classList.remove('clicked'), 400);
});

// Animate skill bars when in viewport (if you add them)
function animateSkills() {
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom > 0
    );
}
window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection && isInViewport(skillsSection)) {
        animateSkills();
    }
}, { passive: true });
window.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection && isInViewport(skillsSection)) {
        animateSkills();
    }
});

// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

function setDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add('dark-mode');
        darkModeIcon.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        darkModeIcon.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }
}

darkModeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    setDarkMode(!isDark);
});

// Load dark mode preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const darkPref = localStorage.getItem('darkMode');
    setDarkMode(darkPref === 'enabled');
}); 
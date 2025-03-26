// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        // Check if it's a section (starts with #) or external page
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.href = targetId; // External page navigation
        }

        navLinks.classList.remove('active'); // Close menu on click
    });
});

// Scroll to Top
document.querySelector('.scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hero Section Image Auto-Scroll
const heroImages = document.querySelectorAll('.hero-img');
let currentImageIndex = 0;

function showNextImage() {
    heroImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroImages[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 5000); // Change image every 5 seconds

// On-Scroll Animation
const sections = document.querySelectorAll('section');

const checkScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkScroll);

// Tab Functionality for Treatments Section
const tabs = document.querySelectorAll('.tab');
const treatmentsLeft = document.querySelector('.treatments-left');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update content based on tab
        if (tab.textContent === 'Common Issues') {
            treatmentsLeft.innerHTML = `
                <p>As Delhi’s leading wellness clinic, we address a wide range of health concerns. Over the past 30 years, we’ve transformed countless lives.</p>
                <p>Here are some conditions we treat at our clinic:</p>
                <ul>
                    <li>Fatigue and Low Energy</li>
                    <li>Chronic Pain</li>
                    <li>Anxiety and Depression</li>
                    <li>Weight Gain</li>
                    <li>Food Allergies</li>
                    <li>Sleep Disorders</li>
                    <li>Muscle Stiffness</li>
                    <li>Thyroid Issues</li>
                    <li>Breathing Problems</li>
                    <li>Weak Immunity</li>
                    <li>Migraines</li>
                    <li>High Cholesterol</li>
                    <li>Joint Stiffness</li>
                    <li>Skin Irritations</li>
                    <li>Metabolic Disorders</li>
                </ul>
            `;
        } else if (tab.textContent === 'Children’s Health') {
            treatmentsLeft.innerHTML = `
                <p>We offer specialized care for children, ensuring their well-being from infancy to adolescence.</p>
                <p>Here are some children’s health services we provide:</p>
                <ul>
                    <li>Seasonal Allergies</li>
                    <li>Growth Delays</li>
                    <li>Breathing Issues</li>
                    <li>Dietary Support</li>
                    <li>Emotional Well-Being</li>
                    <li>Immunity Enhancement</li>
                    <li>Developmental Care</li>
                    <li>Childhood Anxiety</li>
                    <li>Restful Sleep</li>
                    <li>Overall Health</li>
                </ul>
            `;
        } else if (tab.textContent === 'Special Therapies') {
            treatmentsLeft.innerHTML = `
                <p>Our special therapies cater to unique health needs with natural approaches.</p>
                <p>Here are some of our special therapies:</p>
                <ul>
                    <li>Body Detoxification</li>
                    <li>Energy Balancing</li>
                    <li>Acupressure Healing</li>
                    <li>Dietary Guidance</li>
                    <li>Mindfulness Practices</li>
                    <li>Weight Control Plans</li>
                    <li>Posture Improvement</li>
                    <li>Pain Management</li>
                    <li>Immunity Support</li>
                    <li>Holistic Care</li>
                </ul>
            `;
        }
    });
});
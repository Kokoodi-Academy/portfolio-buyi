//Footer year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
 
// Contact form submission
const form = document.getElementById('contactForm');
const RECIPIENT_EMAIL = "Buyikunmi@gmail.com"; 
form.addEventListener('submit', function (e) {
  e.preventDefault();
 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
 
  const subject = encodeURIComponent(`New message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
 
  window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
});
 
// Mobile nav toggle
const mobileNav = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('.menu-toggle');
 
menuToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});
 
document.querySelectorAll('.mobile-nav-links .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
 
const backToTop = document.getElementById('back-to-top');
const SCROLL_THRESHOLD = 300;
 
window.addEventListener('scroll', () => {
  if (window.scrollY > SCROLL_THRESHOLD) {
    backToTop.classList.add('visible', 'bounce');
  } else {
    backToTop.classList.remove('visible', 'bounce');
  }
});

const msgImage = document.querySelector('.msg-image');
const msgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('in-view', entry.isIntersecting);
  });
}, { threshold: 0.5 });
msgObserver.observe(msgImage);
// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const mainNav = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});

// Smooth scroll offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const headerHeight = header.offsetHeight;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});

// Generic tab system (used in Cosa Facciamo and Azienda)
document.querySelectorAll('.cf-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    const targetId = 'tab-' + this.dataset.tab;
    const parent = this.closest('.section') || document.body;

    // deactivate all tabs and contents in same section
    parent.querySelectorAll('.cf-tab').forEach(t => t.classList.remove('active'));
    parent.querySelectorAll('.cf-tab-content').forEach(c => c.classList.remove('active'));

    // activate clicked
    this.classList.add('active');
    const target = document.getElementById(targetId);
    if (target) target.classList.add('active');
  });
});

// Contact form submit placeholder
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Richiesta inviata!';
    btn.style.background = '#1a7a4a';
    btn.style.borderColor = '#1a7a4a';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Invia Richiesta';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

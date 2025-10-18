const toggleBtn = document.getElementById('navToggle');
const navLinks = document.getElementById('primary-navigation');

// adding event listener to site for navigation
toggleBtn?.addEventListener('click', () => {
  const showing = navLinks.classList.toggle('show');
  toggleBtn.setAttribute('aria-expanded', showing);
});

// footerisrvis zusti wlovanebis chveneba @2025
document.getElementById('year').textContent = new Date().getFullYear();

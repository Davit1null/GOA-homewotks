const themeSelect = document.getElementById('themeSelect');

const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme);
themeSelect.value = savedTheme;

themeSelect.addEventListener('change', () => {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(themeSelect.value);
  localStorage.setItem('theme', themeSelect.value);
});

const visitDisplay = document.getElementById('visitCount');
let visitCount = Number(localStorage.getItem('visits')) || 0;
visitCount++;
localStorage.setItem('visits', visitCount);
visitDisplay.textContent = `You have visited this page ${visitCount} time${visitCount > 1 ? 's' : ''}.`;

const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
  const savedValue = localStorage.getItem(input.id);
  if (savedValue) input.value = savedValue;
});

inputs.forEach(input => {
  input.addEventListener('input', () => {
    localStorage.setItem(input.id, input.value);
  });
});

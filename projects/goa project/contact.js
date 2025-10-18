const loginForm = document.getElementById('loginForm');
const welcomeMessage = document.getElementById('welcomeMessage');

// Check if a user is already logged in
window.addEventListener('DOMContentLoaded', () => {
  const savedUser = localStorage.getItem('username');
  if (savedUser) {
    welcomeMessage.textContent = `Welcome back, ${savedUser}!`;
    loginForm.style.display = 'none';
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple login check (for demo purposes, accepts any non-empty input)
  if (username && password) {
    localStorage.setItem('username', username);
    welcomeMessage.textContent = `Welcome, ${username}!`;
    loginForm.style.display = 'none';
  } else {
    alert('Please enter both username and password.');
  }
});

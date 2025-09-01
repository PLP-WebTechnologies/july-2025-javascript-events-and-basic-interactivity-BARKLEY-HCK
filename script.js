// Toggle Light/Dark Theme
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

/* Show/Hide Password Field */
const passwordField = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
togglePasswordBtn.addEventListener('click', () => {
  const type = passwordField.getAttribute('type');
  passwordField.setAttribute('type', type === 'password' ? 'text' : 'password');
});

/* Custom Form Validation */
const form = document.getElementById('registerForm');
const errorMsg = document.getElementById('formError');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = passwordField.value;
});
  // Simple validation rules
  if (name === '' || email === '' || password === '') {
    errorMsg.textContent = 'All fields are required.';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    errorMsg.textContent = 'Please enter a valid email.';{
    return;
  }  
  if (password.length < 6) {
    errorMsg.textContent = 'Password must be at least 6 characters.';
    return;
  }

  errorMsg.textContent = 'Form submitted successfully!';
   errorMsg.style.color = 'green';
};

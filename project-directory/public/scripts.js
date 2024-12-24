// Handle Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get the entered email and password from the login form
  const email = event.target.email.value;
  const password = event.target.password.value;

  // Send login request to the backend
  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  // Parse the response from the server
  const result = await response.json();
  alert(result.message);

  // If login is successful, redirect to homepage
  if (result.message === 'Login successful!') {
    window.location.href = '../pages/homepage.html'; // Redirect to homepage
  }
});

// Handle Email Form Submission (Step 1)
document.getElementById('emailForm')?.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the entered email from the first form
  const email = document.getElementById('email').value;

  // Store the email in localStorage or sessionStorage (so it persists)
  localStorage.setItem('email', email);

  // Hide the email form and show the details form
  document.getElementById('email-container').style.display = 'none';
  document.getElementById('details-container').style.display = 'block';

  // Set the email in the second form's email field (readonly)
  document.getElementById('emailDetails').value = email;
});

// Handle Signup Form Submission (Step 2)
document.getElementById('signupForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get form values from the signup form
  const firstName = event.target.firstName.value;
  const lastName = event.target.lastName.value;
  const email = event.target.email.value; // This will be populated with the email
  const contact = event.target.contact.value;
  const userType = event.target.userType.value;
  const password = event.target.password.value;
  const confirmPassword = event.target.confirmPassword.value;

  // Check if the passwords match
  // if (password !== confirmPassword) {
  //   alert('Passwords do not match!');
  //   return;
  // }

  // Send the form data to the server (backend) for registration
  const response = await fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      contact,
      userType,
      password,
    }),
  });

  // Parse the response from the server
  const result = await response.json();
  alert(result.message);

  // Redirect to login page if registration is successful
  if (result.message === 'User registered successfully!') {
    window.location.href = 'login.html'; // Redirect to login page
  }
});


// Handle Show/Hide Password using Eye Icon
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function() {
  // Toggle password visibility
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;
  
  // Toggle the eye icon (or use different icon styles for visibility)
  this.textContent = type === 'password' ? '👁️' : '🚫'; // Change icon based on visibility
});
//_______________________________________________________________________________________________________________________________________________

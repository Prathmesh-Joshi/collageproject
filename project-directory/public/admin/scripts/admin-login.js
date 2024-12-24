document.getElementById('adminLoginForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get the entered email and password from the login form
  const email = event.target.email.value;
  const password = event.target.password.value;

  // Basic validation
  if (!email || !password) {
    alert('Please enter both email and password');
    return;
  }

  try {
    // Send login request to the backend
    const response = await fetch('http://localhost:3000/admin/login', {  // Ensure the correct path here
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    // Check if the response is successful
    const result = await response.json();

    if (result.message === 'Admin login successful!') {
      window.location.href = 'admin-dashboard.html'; // Adjust path if needed
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error(error);
    alert('Something went wrong. Please try again later.');
  }
});

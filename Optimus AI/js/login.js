// Get the login form element
const loginForm = document.getElementById('loginForm');

// Add submit event listener to the form
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform login request
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'login.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Handle the response from the server
      const response = xhr.responseText;
      if (response === 'success') {
        // Login successful, redirect to index.html
        window.location.href = '/html/index.html';
      } else {
        // Login failed, display an error message
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = 'Invalid username or password';
      }
    }
  };
  // Send the login credentials to the server
  xhr.send(`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
});

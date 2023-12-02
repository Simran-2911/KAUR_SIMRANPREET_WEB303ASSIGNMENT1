function populateCountries() {
    const select = document.getElementById('country');
    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.code;
      option.textContent = country.name;
      select.appendChild(option);
    });
  }

  // Function to check form validity and enable/disable submit button
  function checkFormValidity() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    const country = document.getElementById('country').value;

    const submitButton = document.getElementById('submitButton');

    if (username && password.length >= 12 && password === confirmPassword && terms && country) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  // Event listeners for form inputs
  document.getElementById('username').addEventListener('input', checkFormValidity);
  document.getElementById('password').addEventListener('input', checkFormValidity);
  document.getElementById('confirmPassword').addEventListener('input', checkFormValidity);
  document.getElementById('terms').addEventListener('change', checkFormValidity);
  document.getElementById('country').addEventListener('change', checkFormValidity);

  // Event listener for form submission
  document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents form submission
    console.log('Form submitted.')
    
    // Get values from the form
    const username = document.getElementById('username').value;
    const country = document.getElementById('country').value;

    // Display welcome message
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `Welcome ${username}! The country code you selected is ${country}`;
    welcomeMessage.style.display = 'block';
  });

  // Populate country options when the page loads
  window.onload = function() {
    populateCountries();
    checkFormValidity(); // Check validity on page load
  };S
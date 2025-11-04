// Add event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission (page reload)

  // Clear all previous error and success messages
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.getElementById('successMsg').textContent = '';

  // Get trimmed values from form fields
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const age = parseInt(document.getElementById('age').value.trim());

  let valid = true; // Flag to track validation status

  /* ===== Validation Checks ===== */

  // Full Name Validation
  if (!name) {
    document.getElementById('nameError').textContent = "Name is required.";
    valid = false;
  }

  // Email Validation (basic regex check)
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email.";
    valid = false;
  }

  // Phone Number Validation (must be exactly 10 digits)
  if (!phone || !/^\d{10}$/.test(phone)) {
    document.getElementById('phoneError').textContent = "Enter a 10-digit phone number.";
    valid = false;
  }

  // Age Validation (must be 18 or older)
  if (!age || age < 18) {
    document.getElementById('ageError').textContent = "You must be at least 18 years old.";
    valid = false;
  }

  /* ===== Final Submission Check ===== */
  if (valid) {
    // Show success message
    document.getElementById('successMsg').textContent = "Registration successful!";

    // Reset form fields after success
    this.reset();
  }
});

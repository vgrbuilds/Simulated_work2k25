document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessageDiv = document.getElementById('error-message');

    // Hardcoded credentials
    const validUsername = 'admin';
    const validPassword = 'password123';

    // Function to show error messages
    const showError = (message) => {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.visibility = 'visible';
    };

    // Function to clear error messages
    const clearError = () => {
        errorMessageDiv.textContent = '';
        errorMessageDiv.style.visibility = 'hidden';
    };

    // Real-time validation for username
    usernameInput.addEventListener('input', () => {
        if (usernameInput.value.length < 4) {
            usernameInput.style.border = '1px solid red';
        } else {
            usernameInput.style.border = '1px solid green';
        }
    });

    // Real-time validation for password
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length < 6) {
            passwordInput.style.border = '1px solid red';
        } else {
            passwordInput.style.border = '1px solid green';
        }
    });

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Edge case: empty fields
        if (username === '' || password === '') {
            showError('Please enter both username and password.');
            return;
        }

        // Hardcoded authentication
        if (username === validUsername && password === validPassword) {
            clearError();
            alert('Login successful!');
            // Redirect to a success page or dashboard
            window.location.href = 'success.html'; 
        } else {
            showError('Invalid username or password.');
            usernameInput.style.border = '1px solid red';
            passwordInput.style.border = '1px solid red';
        }
    });
});
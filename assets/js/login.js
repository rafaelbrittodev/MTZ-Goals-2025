document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const settingsBtn = document.getElementById('settingsBtn');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (email === 'teste@mtz.com' && password === '1234') {
            window.location.href = 'user_banking.html';
        } else {
            alert('Invalid email or password.');
        }
    });

    settingsBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (email === 'admin' && password === 'admin') {
            window.location.href = 'admin_banking.html';
        } else {
            alert('Invalid credentials for settings.');
        }
    });
});
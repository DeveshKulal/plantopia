document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Helper function to get users from localStorage
    function getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    // Helper function to save users to localStorage
    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Validate login credentials
            const users = getUsers();
            const user = users.find(user => user.email === email && user.password === password);
            // if (user) {
                alert('Login successful!');
                window.location.href = "home.html";
            // } else {
                // alert('Invalid email or password!');
            // }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            // Add new user to the database
            const users = getUsers();
            users.push({ name, email, password });
            saveUsers(users);
            alert('Signup successful! Please login.');
            window.location.href = "login.html";
        });
    }
});

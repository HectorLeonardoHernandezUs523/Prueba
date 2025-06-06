document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
          });
        
        const data = await response.json();
        
        if (data.success) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify(data.user));
            window.location.href = 'inventario.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Error al conectar con el servidor');
    }
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
});

document.addEventListener('DOMContentLoaded', function() {

    // Funcionalidad para mostrar/ocultar contraseña
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('change', function() {
            // Cambia el tipo de input entre "password" y "text"
            passwordInput.type = this.checked ? 'text' : 'password';
        });
    }
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm && !loginForm.hasSubmitListener) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
  
        });
        loginForm.hasSubmitListener = true;
    }
});
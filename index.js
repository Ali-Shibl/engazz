

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    
    if (username === "" || password === "") {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'warning',
        title: 'Please enter both username and password',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
      return;
    }

    if (username === "admin" && password === "1234") {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Login successful!',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      }).then(() => {
        window.location.href = "layout.html";
      });
    } else {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Invalid username or password',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
    }
  });
});

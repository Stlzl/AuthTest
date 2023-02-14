const form = document.getElementById ('form');
form.addEventListener('submit', getFormValue);

async function getFormValue(event) {
    event.preventDefault();
    const email = form.querySelector('[name="email"]'),
    login = form.querySelector('[name="username"]'),
    password = form.querySelector('[name="password"]');

    const user = {
        login: login.value,
        email: email.value,
        password: password.value
    };

    let response = await fetch('/http://25.49.152.16:8082/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        alert('Error');
        } else if (response.ok) {
            window.location.href = 'login.html';
        }
}
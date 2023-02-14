const form = document.getElementById ('form');
form.addEventListener('submit', getFormValue);

async function getFormValue(event) {
    event.preventDefault();
    const password = form.querySelector('[name="password"]'),
    login = form.querySelector('[name="username"]');

    const user = {
        password: password.value,
        login: login.value
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
            window.location.href = 'welcome.html';
        }
}
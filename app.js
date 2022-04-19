function auth() {
    const form = document.getElementById('formLogin');
    mp.trigger('client.userLogin',  JSON.stringify({login: form.elements.login.value, 
                                                    password: form.elements.password.value}));
}
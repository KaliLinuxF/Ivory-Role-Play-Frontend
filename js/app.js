function auth() {
    const form = document.getElementById('formLogin');
    mp.trigger('client.userLogin',  JSON.stringify({login: form.elements.login.value, 
                                                    password: form.elements.password.value}));
}

function reg() {
    const form = document.getElementById('formReg');
    mp.trigger('client.userReg',  JSON.stringify(
        {
            login: form.elements.login.value, 
            password: form.elements.password.value,
            email: form.elements.email.value
    }));
}

function setError(field, state) {
    let error = undefined;
    
    switch(field){
        case 'authLogin': 
            error = document.getElementById('wrongLogin');
            break;
        case 'authPassword':
            error = document.getElementById('wrongPassword');
            break;
        case 'regLogin':
            error = document.getElementById('takenLogin');
            break;
        case 'regEmail':
            error = document.getElementById('takenEmail');
            break;
        default: return;
    }
    console.log(error.style.visibility);

    error.style.visibility = state ? 'visible' : 'hidden';

    console.log(error.style.visibility);
}
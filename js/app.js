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

// Password Recovery Section

function OTPInput() {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keydown', function(event) {
        if (event.key === "Backspace") {
          inputs[i].value = '';
          if (i !== 0)
            inputs[i - 1].focus();
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== '') {
            return true;
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1)
              inputs[i + 1].focus();
            event.preventDefault();
          } else if (event.keyCode > 64 && event.keyCode < 91) {
            inputs[i].value = String.fromCharCode(event.keyCode);
            if (i !== inputs.length - 1)
              inputs[i + 1].focus();
            event.preventDefault();
          }
        }
      });
    }
  }
OTPInput();



function sendCode() {
  let codeSent = document.getElementById("sendCode");
  codeSent.classList.add("sendCode_clicked");
  let timerSec = 5;
  const recoveryTimer = setInterval(function() {
    document.getElementById("sendCode").innerHTML='<a href="#" onclick="sendCode()">Выслать код <br> повторно</a>' + ' (' + timerSec + 's)';
    timerSec--;
    if (timerSec == -1) {
      clearInterval(recoveryTimer);
      codeSent.classList.remove("sendCode_clicked");
      document.getElementById("sendCode").innerHTML='<a href="#" onclick="sendCode()">Выслать код <br> повторно</a>'
    }
  }, 1000);

  document.getElementById("notifCode").classList.remove("hidden");
  setTimeout(function() {document.getElementById("notifCode").classList.add("hidden");}, 5000);
}



/* 
onclick = recovery()
OTP input id's = OTP1, OTP2, OTP3, OTP4, OTP5, OTP6
form id = "passRecovery"
*/

function recovery() {
/*   document.getElementById("notifPass").classList.remove("hidden");
  setTimeout(function() {document.getElementById("notifPass").classList.add("hidden");}, 5000); */
  const recoveryForm = document.getElementById('passRecovery');
  console.log(recoveryForm.elements)
  mp.trigger('client.getCode',  JSON.stringify(
    {
        code: recoveryForm.elements.OTP1.value,
}));
  
}


/*--------END OF PASSWORD RECOVERY SECTION--------*/


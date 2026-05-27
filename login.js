const form = document.querySelector("#login-form");

const email = document.querySelector("#email");

const password = document.querySelector("#password");

const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const emailValue = email.value.trim();

    const passwordValue = password.value.trim();

    if(emailValue === "" || passwordValue === ""){

        message.innerHTML =
            "Todos os campos devem ser preenchidos.";

        return;
    }

    if(passwordValue.length !== 6){

        message.innerHTML =
            "A senha deve conter exatamente 6 dígitos.";

        return;
    }

    if(isNaN(passwordValue)){

        message.innerHTML =
            "A senha deve conter apenas números.";

        return;
    }

    message.style.color = "green";

    message.innerHTML =
        "Login realizado com sucesso!";

    setTimeout(() => {

        window.location.href = "editor.html";

    }, 1000);

});


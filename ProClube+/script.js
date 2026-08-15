document.getElementById("loginForm").addEventListener("submit",function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "1234") {
        window.location.href = "menu_adm.html"
    }
    else if (usuario === "usuario" && senha === "5678") {
        window.location.href = "menu_socio.html"
    }
    else {
        alert("Usuário ou senha incorretos!")
    }
});
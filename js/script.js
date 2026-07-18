const botao = document.getElementById("entrar");

botao.addEventListener("click", () => {

    document.getElementById("biblioteca")
        .scrollIntoView({
            behavior: "smooth"
        });

});
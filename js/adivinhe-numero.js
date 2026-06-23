const jogar =
    document.getElementById("jogar");

const resultado =
    document.getElementById("resultado");

jogar.addEventListener("click", function () {

    let numeroSorteado =
        Math.floor(Math.random() * 5) + 1;

    let tentativa =
        Number(
            document.getElementById("tentativa").value
        );

    if (tentativa === numeroSorteado) {

        resultado.textContent =
            "🎉 Você acertou!";

    } else {

        resultado.textContent =
            "❌ Errou! Era " +
            numeroSorteado;

    }

});

document
    .getElementById("voltar")
    .addEventListener("click", function () {

        window.location.href =
            "minigames.html";

    });
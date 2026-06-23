const voltar = document.getElementById("voltar");

voltar.addEventListener("click", function () {
    window.location.href = "index.html";
});

const adivinhar = document.getElementById("adivinhar");

adivinhar.addEventListener("click", function () {

    let numeroSorteado =
        Math.floor(Math.random() * 5) + 1;

    let tentativa = Number(
        prompt("Adivinhe um número de 1 a 5:")
    );

    if (tentativa === numeroSorteado) {

        alert("🎉 Você acertou!");

    } else {

        alert(
            "❌ Errou! O número era " +
            numeroSorteado
        );

    }

});
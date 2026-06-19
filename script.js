let fome = 50;
let felicidade = 50;

const botaoAlimentar = document.getElementById("alimentar");
const textoFome = document.getElementById("fome");

botaoAlimentar.addEventListener("click", function() {
    fome = fome + 10;
    textoFome.textContent = "🍔 Fome: " + fome;
});

const botaoBrincar = document.getElementById("brincar");
const textoFelicidade = document.getElementById("felicidade");

botaoBrincar.addEventListener("click", function() {
    felicidade = felicidade + 5
    textoFelicidade.textContent = "😊 Felicidade: " + felicidade;
});
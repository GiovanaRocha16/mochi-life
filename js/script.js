let fome = 50;
let felicidade = 50;
let energia = 50;
let moedas = 0;

const textoMoedas = document.getElementById("moedas");
const mochiImg = document.getElementById("mochi");
const textoFome = document.getElementById("fome");
const textoFelicidade = document.getElementById("felicidade");
const textoEnergia = document.getElementById("energia");
const textoEstado = document.getElementById("estado");

const botaoAlimentar = document.getElementById("alimentar");
const botaoBrincar = document.getElementById("brincar");
const botaoDormir = document.getElementById("dormir");
const botaoMinigame = document.getElementById("minigame");

function atualizarTela() {
    textoFome.textContent = "🍔 Fome: " + fome;
    textoFelicidade.textContent = "😊 Felicidade: " + felicidade;
    textoEnergia.textContent = "⚡ Energia: " + energia;

    atualizarEstado();
}

function atualizarEstado() {

    if (fome <= 20) {
        textoEstado.textContent = "Estado: 😡 Com fome";
        mochiImg.src = "img/fome.png";
        return;
    }

    if (energia <= 20) {
        textoEstado.textContent = "Estado: 😴 Cansado";
        mochiImg.src = "img/cansado.png";
        return;
    }

    if (felicidade <= 30) {
        textoEstado.textContent = "Estado: 😢 Triste";
        mochiImg.src = "img/triste.png";
        return;
    }

    if (fome >= 40 && energia >= 40 && felicidade >= 40) {
        textoEstado.textContent = "Estado: 😊 Feliz";
        mochiImg.src = "img/feliz.png";
        return;
    }

    textoEstado.textContent = "Estado: 😐 Normal";
    mochiImg.src = "img/normal.png";
}

botaoAlimentar.addEventListener("click", function () {
    if (energia <= 10) return;

    fome += 10;
    energia -= 5;

    atualizarTela();
});

botaoBrincar.addEventListener("click", function () {
    if (energia <= 10) return;

    felicidade += 5;
    energia -= 10;
    fome -= 5;

    atualizarTela();
});

botaoDormir.addEventListener("click", function () {
    energia += 20;
    fome -= 5;

    atualizarTela();
});

botaoMinigame.addEventListener("click", function () {
    window.location.href = "minigames.html";
});

setInterval(() => {
    fome -= 2;
    felicidade -= 1;
    energia -= 1;

    atualizarTela();
}, 12000); 

atualizarTela();
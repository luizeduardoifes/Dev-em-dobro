const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    

    const cartaoSelecionado = document.querySelector(".selecionado");

    cartaoSelecionado.classList.remove("selecionado")

    cartaoAtual++;

    cartoes[cartaoAtual].classList.add("selecionado");
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    

    const cartaoSelecionado = document.querySelector(".selecionado");

    cartaoSelecionado.classList.remove("selecionado")

    cartaoAtual--;

    cartoes[cartaoAtual].classList.add("selecionado");
});
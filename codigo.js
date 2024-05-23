//estado da minha aplicação
let numero = 0

// alteradores de estado a aplicação

function aumentarcem() {
    numero = numero + 100
    mostrarNaTela()
}

function aumentardez() {
    numero = numero + 10
    mostrarNaTela()
}

function aumentar() {
    numero = numero + 1
    mostrarNaTela()
}

function diminuir() {
    numero = numero - 1
    mostrarNaTela()
}

function diminuirdez() {
    numero = numero - 10
    mostrarNaTela()
}

function diminuircem() {
    numero = numero - 100
    mostrarNaTela()
}

//jogar o estado da aplicação na tela
function mostrarNaTela() {
    const p = document.querySelector("#resultado")
    p.innerText = numero
}

// iniciar
mostrarNaTela()
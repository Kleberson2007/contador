// numero
let numero = 0;

// contas
function maisum(){
    numero = numero + 1;
    mostrarnatela()
}

function maisdez(){
    numero = numero  + 10;
    mostrarnatela();
}

function maiscem(){
    numero = numero + 100;
    mostrarnatela();
}

function maismil(){
    numero = numero + 1000;
    mostrarnatela();
}

function menosum(){
    numero = numero - 1;
    mostrarnatela();
}

function menosdez(){
    numero = numero - 10;
    mostrarnatela();
}

function menoscem(){
    numero = numero - 100;
    mostrarnatela();
}

function menosmil(){
    numero = numero - 1000;
    mostrarnatela();
}

function zerar(){
    numero = numero - numero
    mostrarnatela();
}

//limitador



// tela
function mostrarnatela(){
    const p = document.querySelector("#resultado");
    p.innerText = numero;
}
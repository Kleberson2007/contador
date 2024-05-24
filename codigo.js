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

//limite
public class Contador {
    private int 0;
    private int -9999;
    private int 9999;

    public Contador(int 0, int -9999, int 9999) {
        this.valor = 0;
        this.limiteMinimo = -9999;
        this.limiteMaximo = 9999;
    }

    public void incrementar() {
        if (valor < 9999) {
            valor++;
        } else {
            System.out.println("Limite máximo alcançado.");
        }
    }

    public void decrementar() {
        if (valor > -9999) {
            valor--;
        } else {
            System.out.println("Limite mínimo alcançado.");
        }
    }

    public int getValor() {
        return valor;
    }
}


// tela
function mostrarnatela(){
    const p = document.querySelector("#resultado");
    p.innerText = numero;
}
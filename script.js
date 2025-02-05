const pontuacaoJogador1 = document.querySelector('#contador1');
const pontuacaoJogador2 = document.querySelector('#contador2');

const contadorVitoriasJogador1 = document.querySelector('#contador-vitorias1');
const contadorVitoriasJogador2 = document.querySelector('#contador-vitorias2');

const btnAumentarPontos1 = document.querySelector('.card-button1');
const btnAumentarPontos2 = document.querySelector('.card-button2');

const cardBtn1 = document.querySelector('.card-btn1');

const btnDiminuirPontos1 = document.querySelector('#btn-decrescente1');
const btnDiminuirPontos2 = document.querySelector('#btn-decrescente2');

const botaoTruco = document.querySelector('.botao-truco');
const btnTruco = document.querySelector('.botao-truco-copas');
const btnTrucoSeis = document.querySelector('.botao-truco-espada');
const btnTrucoNove = document.querySelector('.botao-truco-ouro');
const btnTrucoDoze = document.querySelector('.botao-truco-paus12');
const btnTrucoCampeao = document.querySelector('.botao-campeao');

const btnZerarPontos = document.querySelector('#zerar-pontos');

const btnZerarVitorias = document.querySelector('#zerar-vitorias');

const alterarNumeroSomaPontos = document.querySelector('.alterar-numero-soma-pontos');

let controleContadorVitorias = 0;

function aumentarPontosJogador1() {
    let numero = parseInt(pontuacaoJogador1.textContent);

    if (alterarNumeroSomaPontos.classList.contains('um')) {
        pontuacaoJogador1.textContent = numero + 1;
    } else if (alterarNumeroSomaPontos.classList.contains('tres')) {
        pontuacaoJogador1.textContent = numero + 3;
    } else if (alterarNumeroSomaPontos.classList.contains('seis')) {
        pontuacaoJogador1.textContent = numero + 6;
    } else if (alterarNumeroSomaPontos.classList.contains('nove')) {
        pontuacaoJogador1.textContent = numero + 9;
    } else if (alterarNumeroSomaPontos.classList.contains('doze')) {
        pontuacaoJogador1.textContent = numero + 12;
    }

    if (controleContadorVitorias == 0) {
        if (pontuacaoJogador1.textContent > 12) {
            let numero2 = parseInt(contadorVitoriasJogador1.textContent);
            contadorVitoriasJogador1.textContent = numero2 + 1;
            controleContadorVitorias = 1;
        }
    }

    if (pontuacaoJogador1.textContent < 2) {
        controleContadorVitorias = 0;
    }

}

function aumentarPontosJogador2() {
    let numero = parseInt(pontuacaoJogador2.textContent);

    if (alterarNumeroSomaPontos.classList.contains('um')) {
        pontuacaoJogador2.textContent = numero + 1;
    } else if (alterarNumeroSomaPontos.classList.contains('tres')) {
        pontuacaoJogador2.textContent = numero + 3;
    } else if (alterarNumeroSomaPontos.classList.contains('seis')) {
        pontuacaoJogador2.textContent = numero + 6;
    } else if (alterarNumeroSomaPontos.classList.contains('nove')) {
        pontuacaoJogador2.textContent = numero + 9;
    } else if (alterarNumeroSomaPontos.classList.contains('doze')) {
        pontuacaoJogador2.textContent = numero + 12;
    }

    if (controleContadorVitorias == 0) {
        if (pontuacaoJogador2.textContent > 12) {
            let numero2 = parseInt(contadorVitoriasJogador2.textContent);
            contadorVitoriasJogador2.textContent = numero2 + 1;
            controleContadorVitorias = 1;
        }
    }

    if (pontuacaoJogador2.textContent < 2) {
        controleContadorVitorias = 0;
    }
}

function dimunuirPontosJogador1() {
    let numero = parseInt(pontuacaoJogador1.textContent);
    if (numero > 0) {
        pontuacaoJogador1.textContent = numero - 1;
    } else {
        pontuacaoJogador1.textContent = 0;
    }
}

function dimunuirPontosJogador2() {
    let numero = parseInt(pontuacaoJogador2.textContent);
    if (numero > 0) {
        pontuacaoJogador2.textContent = numero - 1;
    } else {
        pontuacaoJogador2.textContent = 0;
    }
}

function contarVitoriasJogador1() {
    let numero = parseInt(pontuacaoJogador1.textContent);
    contadorVitoriasJogador1.textContent = numero + 1;
}

function contarVitoriasJogador2() {
    let numero = parseInt(pontuacaoJogador2.textContent);
    contadorVitoriasJogador2.textContent = numero + 1;
}

function mudarParaSeis() {
    btnAumentarPontos1.innerHTML = `<img src="img/carta copas.jpg" alt="carta paus" class="card-btn1 carta-copas">`;
    btnAumentarPontos2.innerHTML = `<img src="img/carta copas.jpg" alt="carta paus" class="card-btn2 carta-copas">`;
    
    btnTruco.style.display = "none";
    btnTrucoSeis.style.display = "flex";

    alterarNumeroSomaPontos.classList.remove('um');
    alterarNumeroSomaPontos.classList.add('tres');
}

function mudarParaNove() {
    btnAumentarPontos1.innerHTML = `<img src="img/carta espadilha.jpg" alt="carta espadilha" class="card-btn1 carta-espadilha">`;
    btnAumentarPontos2.innerHTML = `<img src="img/carta espadilha.jpg" alt="carta espadilha" class="card-btn2">`;

    btnTrucoSeis.style.display = "none";
    btnTrucoNove.style.display = "flex";

    alterarNumeroSomaPontos.classList.remove('tres');
    alterarNumeroSomaPontos.classList.add('seis');
}

function mudarParaDoze() {
    btnAumentarPontos1.innerHTML = `<img src="img/carta ouro.jpg" alt="carta ouro" class="card-btn1">`;
    btnAumentarPontos2.innerHTML = `<img src="img/carta ouro.jpg" alt="carta ouro" class="card-btn2">`;

    btnTrucoNove.style.display = "none";
    btnTrucoDoze.style.display = "flex";

    alterarNumeroSomaPontos.classList.remove('seis');
    alterarNumeroSomaPontos.classList.add('nove');
}

function mostrarBtnCampeao() {
    btnAumentarPontos1.innerHTML = `<img src="img/carta paus 12.jpg" alt="carta paus" class="card-btn1">`;
    btnAumentarPontos2.innerHTML = `<img src="img/carta paus 12.jpg" alt="carta paus" class="card-btn2">`;

    btnTrucoDoze.style.display = "none";
    btnTrucoCampeao.style.display = "flex";

    alterarNumeroSomaPontos.classList.remove('nove');
    alterarNumeroSomaPontos.classList.add('doze');
}

function voltarParaTruco() {
    btnAumentarPontos1.innerHTML = `<img src="img/carta paus.jpg" alt="carta paus" class="card-btn1 truco-img">`;
    btnAumentarPontos2.innerHTML = `<img src="img/carta paus.jpg" alt="carta paus" class="card-btn2 truco-img">`;

    btnTrucoSeis.style.display = "none";
    btnTrucoNove.style.display = "none";
    btnTrucoDoze.style.display = "none";
    btnTrucoCampeao.style.display = "none";
    btnTruco.style.display = "flex";

    alterarNumeroSomaPontos.classList.remove('tres');
    alterarNumeroSomaPontos.classList.remove('seis');
    alterarNumeroSomaPontos.classList.remove('nove');
    alterarNumeroSomaPontos.classList.remove('doze');
    alterarNumeroSomaPontos.classList.add('um');
}


function zerarPontos() {
    pontuacaoJogador1.textContent = 0;
    pontuacaoJogador2.textContent = 0;
}

function zerarVitorias() {
    contadorVitoriasJogador1.textContent = 0;
    contadorVitoriasJogador2.textContent = 0;
}

document.addEventListener('click', function (e) {
    let el = e.target;
    if (el.classList.contains('card-btn1')) {
        aumentarPontosJogador1();
    }

    if (el.classList.contains('card-btn2')) {
        aumentarPontosJogador2();
    }

    if (el.classList.contains('btn-decrescente1')) {
        dimunuirPontosJogador1();
    }

    if (el.classList.contains('btn-decrescente2')) {
        dimunuirPontosJogador2();
    }

    if (el.classList.contains('btn-zerar-pontos')) {
        zerarPontos();
        voltarParaTruco();
    }

    if (el.classList.contains('btn-zerar-vitorias')) {
        zerarVitorias();
        voltarParaTruco();
    }

    if (el.classList.contains('botao-truco-copas')) {
        mudarParaSeis();
    }

    if(el.classList.contains('botao-truco-espada')) {
        mudarParaNove();
    }

    if(el.classList.contains('botao-truco-ouro')) {
        mudarParaDoze();
    }

    if(el.classList.contains('botao-truco-paus12')) {
       mostrarBtnCampeao();
    }

    if(el.classList.contains('botao-campeao')) {
        voltarParaTruco();
    }
})
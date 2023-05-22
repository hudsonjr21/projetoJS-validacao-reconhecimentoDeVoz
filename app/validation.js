function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chute.toUpperCase() === "GAME OVER") {

        document.body.innerHTML =
            `
            <h2>
                GAME OVER!
                <i class="fa-solid fa-skull-crossbones"></i>
            </h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">
                <i class="fa-solid fa-arrow-rotate-left"></i>
            </button>
            `
        document.body.style.backgroundColor = "red";

    } else if (chuteForInvalido(numero)){

            elementoChute.innerHTML += 
            '<div>Valor inválido <i class="fa-solid fa-circle-exclamation"></i></div>'
            return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>
            Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}
            <i class="fa-solid fa-face-meh"></i>
        </div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>
                Você acertou! 
                <i class="fa-solid fa-face-laugh-beam"></i>
            </h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">
                <i class="fa-solid fa-arrow-rotate-left"></i>
            </button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>
            O número secreto é menor 
            <i class="fa-solid fa-circle-down"></i> 
            <i class="fa-solid fa-face-frown-open"></i>
        </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>
            O número secreto é maior 
            <i class="fa-solid fa-circle-up"></i> 
            <i class="fa-solid fa-face-frown-open"></i>
        </div>
        `
    }
 
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
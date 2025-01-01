// Selecionando o Titulo da página
let titulo = document.querySelector(".titulo")

// Alterando o conteúdo do titulo da página
titulo.textContent = "Aparecida Nutricionista"

// Selecionando todos os "Trs" da página
let pacientes = document.querySelectorAll(".paciente")

// Utilizando o "for" para preencher os campos dos "tds" de uma vez, com os valores
for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i]

    let tdPeso = paciente.querySelector(".info-peso")
    let peso = tdPeso.textContent

    let tdAltura = paciente.querySelector(".info-altura")
    let altura = tdAltura.textContent

    let tdImc = paciente.querySelector(".info-imc")

    // Fazendo uma validação de valores passados
    let pesoEhValido = validaPeso(peso)
    let alturaEhValida = validaAltura(altura)

    // Ele faz a validação com um operador que inverte os valores ("!"), fazendo com que o positivo se torne negativo, e caso seja, ele executa o que esta no if
    if (!pesoEhValido) {
        console.log("Peso inválido!")
        pesoEhValido = false
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")
    }

    // Ele faz a validação com um operador que inverte os valores ("!"), fazendo com que o positivo se torne negativo, e caso seja, ele executa o que esta no if
    if (!alturaEhValida) {
        console.log("Altura inválida!")
        alturaEhValida = false
        tdImc.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido")
    }

    if (pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3.0) {
        return true
    } else {
        return false
    }
}

function calculaImc(peso, altura) {
    let imc = 0

    imc = peso / (altura * altura)

    return imc.toFixed(2)
}
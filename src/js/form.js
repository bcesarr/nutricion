// Selecionando o botão adicionar do HTML
let botaoAdicionar = document.querySelector("#adicionar-paciente")

// Passando uma função ao clicar no botão adicionar
botaoAdicionar.addEventListener("click", function(event) {
    // Tirando e alterando o comportamento padrão do botão no HTML para utilizarmos da forma como queremos
    event.preventDefault()

    // Selecionando o formulario do HTML
    let form = document.querySelector("#form-adicionar")

    // Pegando os valores inseridos no formulario
    let paciente = obtemPacienteDoFormulario(form)

    // Criando uma validação de erro
    let erros = validaPaciente(paciente)

    if(erros.length > 0) {
        exibeMensagensDeErro(erros)
        return
    }

    // Adiciona os pacientes na tabela
    adicionaPacienteNaTabela(paciente)

    form.reset( );

    // Limpando as mensagens de erro ao adicionar um novo paciente
    let mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ""
})

// Função: Adiciona pacientes na tabela
function adicionaPacienteNaTabela(paciente) {
    // Criando os elementos no HTML
    let pacienteTr =  montaTr(paciente)

    // Selecionando o Tbody (Tabela) do HTML
    let tabela = document. querySelector("#tabela-pacientes")
    
    // Colocando o "tr" dentro do tbody do HTML / Adicionando paciente na tabela
    tabela.appendChild(pacienteTr)
}

// Função: Pegando os valores inseridos no formulario
function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

// Função: Criando os elementos no HTML
function montaTr(paciente) {
    // Tr
    let pacienteTr = document.createElement("tr")

    // Adicionando a classe ao elemento criado
    pacienteTr.classList.add("paciente")

    // TDs
    let nomeTd = montaTd(paciente.nome, "info-nome")
    let pesoTd = montaTd(paciente.peso, "info-peso")
    let alturaTd = montaTd(paciente.altura, "info-altura")
    let gorduraTd = montaTd(paciente.gordura, "info-gordura")
    let imcTd = montaTd(paciente.imc, "info-imc")

    // Colocando os "tds" dentro do "tr"
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr
}

// Função: Criando os tds
function montaTd(dado, classe) {
    // Criando os elementos "Tds"
    let td = document.createElement("td")
    // Preenchendo os "tds" com os dados das variaveis
    td.textContent = dado
    // Adicionando a classe ao elemento criado
    td.classList.add(classe)

    return td
}

// Função: Criando uma validação de erro
function validaPaciente(paciente) {
    let erros = []

    if(paciente.nome.length == 0) {
        erros.push("O nome não pode estar vazio / em branco!")
    }

    if(!validaPeso (paciente.peso)) {
        erros.push("O peso é inválido!")
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida!")
    }
    
    if(paciente.peso.length == 0) {
        erros.push("O valor de peso não pode estar vazio / em branco!")
    }

    if(paciente.altura.length == 0) {
        erros.push("O valor de altura não pode estar vazio / em branco!")
    }

    if(paciente.gordura.length == 0) {
        erros.push("O valor de % de gordura não pode estar vazio / em branco!")
    }

    return erros
}

// Função: Mensagens de erro
function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro")

    // Para remover as mensagens de erro e não permitir que fiquem se repetindo
    ul.innerHTML = ""

    // Para cada item do meu array (erros), faça...
    // A função do foreach recebe o item passado (no caso, o erro, que esta alias, como nome do parametro) e cria a "li", colocando o seu contéudo dentro dela com o "textContent". Então colocamos a "li" dentro da "ul"
    erros.forEach(function(erro) {
        let li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}
let campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function () {
    const pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0) {
        // Pesquisando se, dentro da Td pacientes, tem o nome pesquisado, se tiver mostre ele e esconda os outros
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i]

            // Pegando dentro do Tr, o nome do paciente contido no Td
            let tdNome = paciente.querySelector(".info-nome")
            let nome = tdNome.textContent

            // Expressao regular - ela tem um objeto especial dentro, criamos então desta forma:
            // Passamos dois paramentros dentro da expressao, o que quero que ela busque e como ela vai buscar (com case sensitive ou, case insentive)
            let expressao = new RegExp(this.value, "i")

            // Aqui testamos, com a expressao "test" se dentro de nossa variavel nome, tem pelo menos uma parte do que for digitado
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel")
            } else {
                paciente.classList.remove("invisivel")
            }
        }
    } else {
        for (i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    }

})
let botaoBuscar = document.querySelector("#buscar-pacientes")

botaoBuscar.addEventListener("click", function () {
    // XMLHttpRequest é um objeto responsavel por fazer requisições HTTP
    let xhr = new XMLHttpRequest()

    // Direcionando onde buscar e requisitar as informações:

    // Comando que abre a conexão com o endereço desejado. Temos que mostrar qual tipo de requisição queremos fazer, no caso aqui, o GET (Pegar/Coletar), no endereço: ...
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function() {
        // Pegando o span de erro no HTML
        let erroAjax = document.querySelector("#erro-ajax")

        // Validação da requisição
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel")
            // Coletando a resposta do Json
            let resposta = xhr.responseText

            // Convertendo o Json para Objeto JS
            let pacientes = JSON.parse(resposta)

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)
            })
        } else {
            erroAjax.classList.remove("invisivel")
        }
    })

    // Envio da ordem de requisição
    xhr.send()
})

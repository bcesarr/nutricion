// Selecionando a tabela
let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    let alvoEvento = event.target;
    let PaiDoEvento = alvoEvento.closest("tr"); // Garante que seja a linha do evento

    // Verifica se já existe o botão "X" na linha, com a classe botao-excluir, antes de adiciona-lo
    if (!PaiDoEvento.querySelector(".botao-excluir")) {

        // Se o botão não existe,ele cria o botão de exclusão
        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList.add("botao-excluir");

        // Adiciona o botão à linha
        PaiDoEvento.appendChild(botaoExcluir);

        // Adiciona o evento de clique ao botão para excluir a linha
        botaoExcluir.addEventListener("click", function() {
            // Adiciona a classe fadeOut no elemento, para colocar o efeito
            PaiDoEvento.classList.add("fadeOut")
            
            // "Função" para acrescentar o efeito de espera antes de executar o comando
            setTimeout(function() {
                PaiDoEvento.remove();
            }, 500)
        });
    }
});

// OBS:
// parentNode: Retorna apenas o elemento pai imediato do nó atual. Se o event.target não for diretamente o <td> ou <tr>, você precisará navegar manualmente pela árvore do DOM até encontrar o elemento desejado.

// closest: Busca o elemento mais próximo que corresponde a um seletor, subindo na hierarquia do DOM até encontrar o elemento desejado. Isso elimina a necessidade de conhecer exatamente a hierarquia do DOM.


// Selecionando todas as "trs"/linhas dos pacientes
// let pacientes = document.querySelectorAll(".paciente")

// let tabela = document.querySelector("table")

// tabela.addEventListener("dblclick", function(event) {
//     let alvoEvento = event.target
//     let PaiDoEvento = alvoEvento.parentNode    

//     PaiDoEvento.remove()
// })

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         let botaoExcluir = document.createElement("td")
//         botaoExcluir.textContent = "X"
//         this.appendChild(botaoExcluir)
        
//         botaoExcluir.addEventListener("click", function() {
//             paciente.remove()
//         })
//     })

// })
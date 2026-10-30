
// Variáveis do pedido
let vestidoEscolhido = "";
const precoVestido = 349.99;

// Selecionando os elementos do HTML
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");
const quantidade = document.getElementById("quantidade");
const botoesComprar = document.querySelectorAll(".comprar");
const formulario = document.getElementById("form-pedido");

// Evento de clique nos botões Comprar
botoesComprar.forEach(function(botao) {

    botao.addEventListener("click", function(evento) {

        evento.preventDefault();

        vestidoEscolhido = botao.dataset.vestido;

        mensagem.textContent = vestidoEscolhido + " selecionado! Informe a quantidade.";

        resultado.textContent = "";

    });

});

// Função para calcular o pedido
function calcularPedido(evento) {

    evento.preventDefault();

    const qtd = Number(quantidade.value);

    // Verifica se um vestido foi escolhido
    if (vestidoEscolhido === "") {

        resultado.textContent = "Escolha um vestido antes de calcular o pedido.";

        return;
    }

    // Validação da quantidade
    if (!Number.isInteger(qtd) || qtd < 1 || qtd > 10) {

        resultado.textContent = "Digite uma quantidade entre 1 e 10.";

        quantidade.focus();

        return;
    }

    // Calcula o valor total
    const total = precoVestido * qtd;

    const valorFormatado = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // Mostra o resultado na página
    resultado.textContent = "Pedido: " + qtd + " unidade(s) de " + vestidoEscolhido + ". Total: " + valorFormatado;

}

// Evento de envio do formulário
formulario.addEventListener("submit", calcularPedido);

const formulario = document.getElementById("form-orcamento");

const botaoEnviar = document.getElementById("btn-enviar");

const avisoFormulario = document.getElementById("aviso-formulario");

const confirmacao = document.querySelector("#confirmacao");

function atualizarBotaoEnviar() {
    const formularioValido = formulario.checkValidity();

    botaoEnviar.disabled = !formularioValido;
}

atualizarBotaoEnviar();

console.log("Projeto final iniciado!");

console.log(formulario);

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value;

    const email = document.querySelector("#email").value;

    const Mensagem = document.querySelector("#mensagem").value;


formulario.reset();

confirmacao.hidden = false;

atualizarBotaoEnviar();

avisoFormulario.hidden = true;

console.log("Nome do cliente:", nome);
console.log("Email do cliente:", email);
console.log("Mensagem do cliente:", Mensagem);
console.log("Formulário enviado com sucesso!");

}); // Fim do evento submit

const botaoLimpar = document.querySelector('button[type="reset"]');

formulario.addEventListener("reset", function () {
    botaoEnviar.disabled = true;
    avisoFormulario.hidden = false;
    confirmacao.hidden = true;
});

formulario.addEventListener("input", function () {
    const formularioValido = formulario.checkValidity();

    atualizarBotaoEnviar();

    avisoFormulario.hidden = formularioValido;

    confirmacao.hidden = true;
});

function saudacaoDev() {
    console.log("Estou aprendendo funções reutilizáveis!");
}

saudacaoDev();

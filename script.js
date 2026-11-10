const formulario = document.getElementById("form-orcamento");

const botaoEnviar = document.getElementById("btn-enviar");

const avisoFormulario = document.getElementById("aviso-formulario");

const confirmacao = document.querySelector("#confirmacao");

botaoEnviar.disabled = !formulario.checkValidity();

console.log("Projeto final iniciado!");

console.log(formulario);

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value;

    const email = document.querySelector("#email").value;

    const Mensagem = document.querySelector("#mensagem").value;

confirmacao.hidden = false;

formulario.reset();

botaoEnviar.disabled = true;
avisoFormulario.hidden = false;

console.log("Nome do cliente:", nome);
console.log("Email do cliente:", email);
console.log("Mensagem do cliente:", Mensagem);
console.log("Formulário enviado com sucesso!");

}); // Fim do evento submit

const botaoLimpar = document.querySelector('button[type="reset"]');

botaoLimpar.addEventListener("click", function () {
    botaoEnviar.disabled = true;
    avisoFormulario.hidden = false;
    confirmacao.hidden = true;
    
});

formulario.addEventListener("input", function () {
    const formularioValido = formulario.checkValidity();

    botaoEnviar.disabled = !formularioValido;

    avisoFormulario.hidden = formularioValido;

    confirmacao.hidden = true;
});
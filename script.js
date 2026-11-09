const formulario = document.getElementById("form-orcamento");

const botaoEnviar = document.getElementById("btn-enviar");

botaoEnviar.disabled = !formulario.checkValidity();

console.log("Projeto final iniciado!");

console.log(formulario);

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value;

    const email = document.querySelector("#email").value;

    const Mensagem = document.querySelector("#mensagem").value;

    const confirmacao = document.querySelector("#confirmacao");

confirmacao.hidden = false;

formulario.reset();

console.log("Nome do cliente:", nome);
console.log("Email do cliente:", email);
console.log("Mensagem do cliente:", Mensagem);
console.log("Formulário enviado com sucesso!");

}); // Fim do evento submit

const botaoLimpar = document.querySelector('button[type="reset"]');

botaoLimpar.addEventListener("click", function () {
    botaoEnviar.disabled = true;
    
});

formulario.addEventListener("input", function () {
    botaoEnviar.disabled = !formulario.checkValidity();
});


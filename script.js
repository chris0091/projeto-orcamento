console.log("Projeto final iniciado!");

const formulario = document.querySelector("#form-orcamento");

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

   });
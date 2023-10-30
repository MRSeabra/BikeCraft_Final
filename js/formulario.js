// Como o form só existe em 2 partes do site não ha necessidade de eu especificar, posso selecionar FileSystemDirectoryEntry, se tivesse mais forms o ideal seria colocar um id e selecionar esse id
const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: var(--cor1);'><span style='color: #317A00;'>Mensagem enviada com sucesso!</span> Em breve entraremos em contato. Geralmente respondemos em xhoras.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: var(--cor1);'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.com</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);

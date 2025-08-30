document.addEventListener("DOMContentLoaded", function () {
  const acessibilidade = document.getElementById("botaoMenu");
  const opcoes = document.getElementById("opcoesMenu");

  acessibilidade.addEventListener("click", function () {
    acessibilidade.classList.toggle("rotation");
    opcoes.classList.toggle("apresentaMenu");

    const acessibilidadeOn =
      acessibilidade.getAttribute("aria-expanded") === "true";
    acessibilidade.setAttribute("aria-expanded", !acessibilidadeOn);
  });

  const aumentaFonte = document.getElementById("fonte+");
  const diminuiFonte = document.getElementById("fonte-");
  const mudaContraste = document.getElementById("contraste");

  let fonteAtual = 1;

  aumentaFonte.addEventListener("click", function () {
    fonteAtual += 0.1;
    document.body.style.fontSize = `${fonteAtual}rem`;
  });

  diminuiFonte.addEventListener("click", function () {
    fonteAtual -= 0.1;
    document.body.style.fontSize = `${fonteAtual}rem`;
  });

  mudaContraste.addEventListener("click", function () {
    document.body.classList.toggle("contraste");
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const acessibilidade = document.getElementById('botaoMenu');
    const opcoes = document.getElementById('opcoesMenu')

    acessibilidade.addEventListener('click', function(){
        acessibilidade.classList.toggle('rotation')
        opcoes.classList.toggle('apresentaMenu')
    })

    const aumentaFonte = document.getElementById("fonte+");
    const diminuiFonte = document.getElementById("fonte-");

    let fonteAtual = 1;

    aumentaFonte.addEventListener('click', function () {
        fonteAtual += 0.1;
        document.body.style.fontSize = `${fonteAtual}rem`
    })

    diminuiFonte.addEventListener('click', function () {
        fonteAtual -= 0.1;
        document.body.style.fontSize = `${fonteAtual}rem`
    })
});

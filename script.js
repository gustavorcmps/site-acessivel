document.addEventListener("DOMContentLoaded", function () {
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

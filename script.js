const texto = document.getElementById("texto");
const botao = document.getElementById("botao");

const mensagens = [
    "Iniciando sistema...",
    "Buscando alvo prioritário...",
    "Analisando registros...",
    "Verificando compatibilidade...",
    "ALVO LOCALIZADO",
    "",
    "Nome: Julia",
    "",
    "Status: Pessoa extremamente especial",
    "",
    "✓ Faz meus dias melhores",
    "✓ Tem um sorriso inesquecível",
    "✓ Ocupa meus pensamentos frequentemente",
    "",
    "Resultado da investigação:",
    "",
    "Quanto mais eu te conheço...",
    "mais eu gosto de você. ❤️",
    "",
    "Feliz Dia dos Namorados!"
];

botao.addEventListener("click", () => {

    botao.style.display = "none";

    let i = 0;

    const intervalo = setInterval(() => {

        texto.innerHTML = mensagens[i];

        i++;

        if(i >= mensagens.length){
            clearInterval(intervalo);
        }

    }, 2000);

});
document.querySelector('.mudar TextoBotao').addEventListener('click', function() {
const paragrafo document.querySelector('.descricao');
paragrafo.textContent = 'Texto alterado!';
});
document.querySelector('.destacarBotao').addEventListener('click', function() {
const titulo = document.querySelector('.titulo');
titulo.classList.add('destaque');
});

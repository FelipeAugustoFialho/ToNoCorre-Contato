const menu = document.querySelector("navMobile");
const list = document.querySelector('li');



// Seleciona o ícone do menu e as opções
const menuIcon = document.querySelector('.menu-icon');
const menuOptions = document.querySelector('.menu-options');

// Função para abrir/fechar o menu
function toggleMenu() {
    menuOptions.classList.toggle('active');
}


menuIcon.addEventListener('click', toggleMenu);
const $heart = window.document.querySelector('.favorite');

$heart.addEventListener('click', handleClick);

function handleClick() {
    console.log('Coração clicado');
}
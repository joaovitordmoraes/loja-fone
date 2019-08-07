const $searchBar = document.querySelector('.search-box');
const $open = $searchBar.querySelector('.-open');
const $close = $searchBar.querySelector('.-close');

$open.addEventListener('click', (event) => {
    event.preventDefault();
    $searchBar.classList.toggle('-active');
    $open.classList.remove('-active');
    $close.classList.add('-active');
});

$close.addEventListener('click', (event) => {
    event.preventDefault();
    $searchBar.classList.toggle('-active');
    $close.classList.remove('-active');
    $open.classList.add('-active');
});
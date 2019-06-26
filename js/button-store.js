const $btnchart = window.document.querySelector('.-second');
let $addchart = window.document.querySelector('.action.-last');

$btnchart.addEventListener('click', addChart);

function addChart() {
    $addchart.textContent = 'Carrinho (11)';
}

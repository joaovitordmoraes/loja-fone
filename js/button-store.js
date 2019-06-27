const $btnchart = document.querySelector('.-second');
let initialvalue = 10;

$btnchart.addEventListener('click', addChart);

function addChart() {
    const $addchart = document.querySelector('.action.-last');
    
    $addchart.textContent = `Carrinho (${++initialvalue})`;
}

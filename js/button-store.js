const $btnchart = document.querySelector('.button-store.-second');
let initialvalue = 10;

$btnchart.addEventListener('click', addChart);

function addChart() {
    const $addchart = document.querySelector('.action.-last');
    
    $addchart.textContent = `Carrinho (${++initialvalue})`;
}

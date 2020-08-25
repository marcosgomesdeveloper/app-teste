const car = new Car();
const carro = document.getElementById('carro');
const produtos = document.getElementById('lista-de-produto');
const listaDeProdutos = document.querySelector('#listaDeProdutos tbody');

function carregarEvento(){
    produtos.addEventListener('click', (e) => {car.comprarProduto()});
}
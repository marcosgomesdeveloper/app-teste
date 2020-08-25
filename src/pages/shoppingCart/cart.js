class Car{

    comprarProduto(e){
        e.preventDefault();
        if(e.target.classlist.contains('adicionar-no-carrinho')){
            const produto = e.target.parentElement.parentElement;
            this.lerDadosProduto(produto);
        }
    }

    lerDadosProduto(produto){
        const infoProduto = {
            imagem : produto.querySelesctor('img').src,
            titulo : produto.querySelector('p').textContent,
            preco : produto.querySelector('p').textContent,
            id : produto.querySelector('button').getAttribute('data-id'),
            quantidade : 1
        }
        this.inserirNoCarrinho(infoProduto);
    }

    inserirNoCarrinho(infoProduto){
        const row = document.createElement('tr');
            row.innerHTML = 
                '<td><img src="${produto.imagem}"/></td>'
                '<td><input type="${produto.titulo}"/></td>'
                '<td><input type="${produto.preco}"/></td>'
                '<td><input type="${produto.quantidade}"/></td>';
            
        listaDeProdutos.appendChild(row);     
    }
}
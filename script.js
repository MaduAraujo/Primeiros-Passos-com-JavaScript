// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Hamburgueria";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------//

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>X-Bacon</h2>
     <img src="https://i.pinimg.com/originals/74/7f/fc/747ffcbdc7d086376fc19bf5c76afb9d.jpg" alt="x-bacon">
    <p>Pão com hamburguer, alface, tomate, ketchup, maionese, queijo cheddar, bacon, molho caseiro e
    cebola caramelizada.</p>
    <p id="preco-x-bacon">R$ 20,00</p>
  </div>
`;
// Adicionando o elemento no dom
body.appendChild(produto)
// JavaScript para o carrossel de clientes
let indiceClienteAtual = 0;
const clientes = document.querySelectorAll('.cliente');
const numClientes = clientes.length;

function mostrarCliente(indice) {
    // Oculta todos os clientes
    clientes.forEach(cliente => {
        cliente.style.display = 'none';
    });
    
    // Define o novo índice do cliente
    indiceClienteAtual = (indice + numClientes) % numClientes;

    // Mostra o novo cliente
    clientes[indiceClienteAtual].style.display = 'block';
}

document.querySelector('.carrossel .anterior').addEventListener('click', function() {
    mostrarCliente(indiceClienteAtual - 1);
});

document.querySelector('.carrossel .proximo').addEventListener('click', function() {
    mostrarCliente(indiceClienteAtual + 1);
});

// Mostra apenas o primeiro cliente ao carregar a página
mostrarCliente(indiceClienteAtual);


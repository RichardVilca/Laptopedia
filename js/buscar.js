// agregar evento al escribir en search-input
document.querySelector('.search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    buscarProductos(searchTerm);
});

// función para buscar productos
function buscarProductos(termino) {
    const productos = document.querySelectorAll('.laptop-card');
    productos.forEach(producto => {
        const nombre = producto.querySelector('h3').innerText.toLowerCase();
        if (nombre.includes(termino)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

//codigo para el carrusel
let indiceActual = 0;
const contenedor = document.getElementById('contenedor');
const puntos = document.getElementById('puntos');
const totalImagenes = contenedor.children.length;
let indice = 0;
// Crear puntos
for (let i = 0; i < totalImagenes; i++) {
  const punto = document.createElement('span');
  punto.addEventListener('click', () => {
    indiceActual = i;
    actualizarCarrusel();
  });
  puntos.appendChild(punto);
}
function actualizarCarrusel() {
  contenedor.style.transform = `translateX(-${indiceActual * 100}%)`;
  const puntosSpan = puntos.querySelectorAll('span');
  puntosSpan.forEach((punto, index) => {
    punto.classList.remove('activo');
    if (index === indiceActual) {
      punto.classList.add('activo');
    }
  });
}
function cambiarImagen(direccion) {
  indice = (indice + direccion + totalImagenes) % totalImagenes;
  indiceActual = indice;
  actualizarCarrusel();
}
function iniciarCarrusel() {
  setInterval(() => {
    cambiarImagen(1);
  }, 5000);
}
iniciarCarrusel();

//colors: ['#a8dadc', '#457b9d', '#1d3557'],
document.addEventListener('mousemove', function (e) {
  // Crea un nuevo elemento div para el rastro
  const trail = document.createElement('div');
  trail.classList.add('ghost-trail');

  // Posiciona el elemento en la ubicación actual del cursor
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';

  // Agrega el elemento al cuerpo del documento
  document.body.appendChild(trail);

  // Elimina el elemento después de que la animación termine
  // La duración de la animación es de 1 segundo (1000 ms)
  setTimeout(() => {
    trail.remove();
  }, 1000);
});

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

document.addEventListener('mousemove', function (e) {
  const trail = document.createElement('div');
  trail.classList.add('ghost-trail');

  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 1000);
});

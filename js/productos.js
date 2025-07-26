"use strict"
const producto = document.getElementById("product")
const rutaProducto = "productos.json"

fetch(rutaProducto) //cargar la pagina
    .then(Response => Response.json()) //tipo de dato
    .then(data => { //que hace con los datos
        data.forEach(element => {
            const div = document.createElement("div")
            const img = document.createElement("img")
            const descripcion = document.createElement("div")
            const precio = document.createElement("div")
            const btnAgregarCarro = document.createElement("a")
            btnAgregarCarro.classList.add("btn-ver-mas")
            div.classList.add("laptop-card")
            descripcion.classList.add("laptop-info")
            precio.classList.add("price")
            btnAgregarCarro.setAttribute("href", "#")
            btnAgregarCarro.innerText = "Agregar al Carro"
            img.setAttribute("src", element.foto)
            descripcion.innerHTML = `
            <h3>${element.nombre}</h3>
            <p>${element.descripcion}</p>
            <ul class="specs">
              <li><strong>Procesador:</strong> ${element.procesador}</li>
              <li><strong>RAM:</strong> ${element.ram}</li>
              <li><strong>Almacenamiento:</strong> ${element.almacenamiento}</li>
              <li><strong>Pantalla:</strong> ${element.pantalla}</li>
              <li><strong>Gráficos:</strong> ${element.graficos}</li>
              </ul>
          `
            precio.innerText = element.precio
            div.appendChild(img)
            div.appendChild(descripcion)
            descripcion.appendChild(precio)
            descripcion.appendChild(btnAgregarCarro)
            producto.appendChild(div)
        })
    }) 


// // Variables

// const carrito = document.querySelector('#carrito');
// const contenedorCarrito = document.querySelector('#myModal h5');
// const vaciarCarritobtn = document.querySelector('#vaciar-carrito');
// const listaTelefonos = document.querySelector('#lista-telefonos');
// let articulosCarrito = [];

// cargarEventListeners();
// function cargarEventListeners() {
//     listaTelefonos.addEventListener('click', agregarCurso);
//     // elimino del carrito
//     carrito.addEventListener('click', eliminarCurso);
//     // muestra los telefonos LS
//     document.addEventListener('DOMContentLoaded', () => {
//         articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
//         carritoHTML();
//     })
//     // vaciar carrito
//     vaciarCarritobtn.addEventListener('click', () => {
//         articulosCarrito = [];
//         limpiarHTML();

//     })
// }


// // funciones

// function agregarCurso(e) {
//     e.preventDefault();
//     if (e.target.classList.contains('agregar-carrito')) {
//         const cursoSeleccionado = e.target.parentElement.parentElement;

//         leerDatosCurso(cursoSeleccionado);
//     }
// }

// // elimino productos del carrito
// function eliminarCurso(e) {
//     console.log(e.target.classList);
//     if (e.target.classList.contains('borrar-curso')) {
//         const cursoId = e.target.getAttribute('data-id');
//         articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
//         carritoHTML();
//     }
// }

// // lee el contenido del html al que le dimos click y extrae la info
// function leerDatosCurso(curso) {

//     // crear un objeto con el contenido de las ventas
//     const infoVenta = {
//         precio: curso.querySelector('p').textContent,
//         titulo: curso.querySelector('h4').textContent,
//         imagen: curso.querySelector('img').src,
//         id: curso.querySelector('a').getAttribute('data-id'),
//         cantidad: 1
//     }

//     // revisa si un elemento ya existe

//     const existe = articulosCarrito.some(curso => curso.id === infoVenta.id);
//     if (existe) {
//         const cursos = articulosCarrito.map(curso => {
//             if (curso.id === infoVenta.id) {
//                 curso.cantidad++;
//                 return curso;
//             } else {
//                 return curso;
//             }
//         });
//         articulosCarrito = [...cursos];
//     } else {
//         articulosCarrito = [...articulosCarrito, infoVenta];
//     }

//     console.log(articulosCarrito);
//     carritoHTML();
// }

// // muestra el carrito de compras en el html

// function carritoHTML() {
//     // limpiar el html
//     limpiarHTML();

//     // recorre el carrito y general el html
//     articulosCarrito.forEach(curso => {
//         const { imagen, titulo, precio, cantidad, id } = curso;
//         console.log(curso);
//         const div = document.createElement('div');
//         div.innerHTML = `


//         <div class= "cards"

//         <p class= "titulo-cards">
//         ${titulo}
//         </p>

//         <img src=" ${imagen}" width="80">

//         <p class="cards-text">
//         ${cantidad}
//         Unidades
//         </p>
//         <hr>
//         <p class="cards-precio">
//         Precio Total:
//         ${precio}
//         </p>

//          <a href="#" class="borrar-curso" data-id="${id}"> Eliminar  </a>
//          <hr>

//          </div>

//         `;

//         // agrega el HTML del carrito:
//         contenedorCarrito.appendChild(div);
//     });

//     // storage
//     sincronizarStorage();
// }

// function sincronizarStorage() {
//     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
// }

// // elimina los cursos

// function limpiarHTML() {
//     // while(contenedorCarrito.firstChild) {
//     //     contenedorCarrito.removeChild(contenedorCarrito.firstElementChild)
//     // }

//     contenedorCarrito.innerHTML = '';

// }

// NUEVO CARRITO, VAMOS!

const stockProductos = [
    {
        id: 1,
        nombre: "Samsung",
        cantidad: 1,
        precio: 200,
        img: "imagenes/img1--tarjeta.jpg"
    },

    {
        id: 2,
        nombre: "Iphone",
        cantidad: 1,
        precio: 300,
        img: "imagenes/img2--tarjeta.jpg"
    },

    {
        id: 3,
        nombre: "Motorola",
        cantidad: 1,
        precio: 150,
        img: "imagenes/img3--tarjeta.jpg"
    },
];

// declaro una C con el carrito, arranca vacia

let carrito = [];

// selecciono el contenedor:

const contenedor = document.querySelector('#contenedor');
const carritoContenedor = document.querySelector('#carritoContenedor')
const vaciarCarrito = document.querySelector('#vaciarCarrito')
const precioTotal = document.querySelector('#precioTotal')
const procesarCompra = document.querySelector('#procesarCompra')
const activarFuncion = document.querySelector('#activarFuncion')
const totalProceso = document.querySelector('#totalProceso')
const formulario = document.querySelector('#procesar-pago')

if(activarFuncion){
activarFuncion.addEventListener('click', procesarPedido)
}
if(formulario){
  formulario.addEventListener('submit', enviarPedido)
}
document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    mostrarCarrito()
    if(activarFuncion){

    document.querySelector('#activarFuncion').click(procesarPedido)
  }
})

stockProductos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedor) {
      contenedor.innerHTML += `
      <div class="card text-center border-dark  mt-3" style="width: 18rem;">
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-outline-success" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
      `;
    }
  });

  if(procesarCompra){
  procesarCompra.addEventListener('click', () => {
    if(carrito-length ===0){
      Swal.fire({
        title: "Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText:"Aceptar",
      })
    } else {
      location.href = "comprando.html"
    }
  })
if(vaciarCarrito){
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}
}
//  una funcion que busque los ID, si son iguales, los agrega al carrito

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()
};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-outline-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>

        `;
    });
  }

    // mensaje en el carrito vacio:
    if (carrito.length === 0) {
        modalBody.innerHTML = `
        <p class="text-center-primary parrafo">¡Aun no agregaste nada!</p>
       `
    }

    carritoContenedor.textContent = carrito.length
    if(precioTotal){

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  }
    guardarStorage()
}

function eliminarProducto(id) {
  const celularId = id;
  carrito = carrito.filter((celular) => celular.id !== celularId);
  mostrarCarrito();
}
// Local Storage

function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

// Procesando Compra

function procesarPedido() {
  carrito.forEach((prod) => {
  const listaCompra = document.querySelector('#lista-compra tbody')
  const {id, nombre, precio, cantidad, img} = prod

  const row = document.createElement('tr')
  row.innerHTML += `

  <td>
  <img class="img-fluid img-carrito" src="${img}"/>
  <td>${nombre}</td>
  <td>${precio}</td>
  <td>${cantidad}</td>
  <td>${precio * cantidad}</td>
  `
  listaCompra.appendChild(row)
  })

  totalProceso.innerText= carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

}
function enviarPedido(e){
  e.preventDefault()
  const spinner = document.querySelector('#spinner')
  spinner.classList.add('d-flex')
  spinner.classList.remove('d-none')

  setTimeout(() => {
    spinner.classList.remove('d-flex')
  spinner.classList.add('d-none')

  }, 3000)

  const alertExito = document.createElement('p')
  alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-md-12','mt-2', 'alert-success')
  alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)
     setTimeout(() => {
      alertExito.remove()
     }, 3000)
}

// Fetch y promesas
const listado = document.getElementById('listado');
const listadoProductos = "json/productos.json";

fetch(listadoProductos) 
.then(respuesta => respuesta.json())
.then(datos => {
  datos.forEach( producto =>{
    listado.innerHTML += `
    <div class="card text-center border-dark mt-3" style="width: 18rem; ">
    <img class="card-img-top mt-2" src="${producto.img}" alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title": ${producto.nombre} </h5>
    <p>Precio: ${producto.precio} </p>
    <p>cantidad: ${producto.cantidad} </p>
    
    <button class="btn btn-outline-success" onclick="agregarProducto(${producto.id})">Comprar Producto</button>
    </div>
    `
  })
})

.catch(error => console.log(error))
.finally(() => console.log("Proceso Finalizado"))




















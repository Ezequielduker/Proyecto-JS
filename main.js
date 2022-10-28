// const productos = [
//     { nombre: "celular", precio: 100 },
//     { nombre: "tablet", precio: 200 },
//     { nombre: "termo", precio: 50 },
//     { nombre: "notebook", precio: 250 },
//     { nombre: "funda", precio: 150 },
// ];

// let carrito = []

// let seleccion = prompt("¿ Hola desea comprar algun producto ? Responda si o no")

// while (seleccion != "si" && seleccion != "no") {
//     alert("Por favor Ingresa si o no")
//     seleccion = prompt("Hola desea comprar, Responda  si o no")
// }

// if (seleccion == "si") {
//     alert("A continuación nuestra lista de productos, elegí algunas de las opciones: ")
//     let todosLosProductos = productos.map((producto) => producto.nombre + "" + producto.precio + "$")
//     alert(todosLosProductos.join())
// } else if (seleccion == "no") {
//     alert("Muchas Gracias, Nos vemos luego! ")
// }

// // para elegir productos.

// while (seleccion != "no") {
//     let producto = prompt("Agregá un producto a tu carrito")
//     let precio = 0

//     if (producto == "celular" || producto == "tablet" || producto == "termo" || producto == "notebook" ||
//         producto == "funda") {
//         switch (producto) {
//             case "celular":
//                 precio = 100;
//                 break;

//             case "tablet":
//                 precio = 200;
//                 break;

//             case "termo":
//                 precio = 50;
//                 break;

//             case "notebook":
//                 precio = 250;
//                 break;
//             case "funda":
//                 precio = 200;
//                 break;
//             default:
//                 break;
//         }

//         let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

//         carrito.push({ producto, unidades, precio })
//         console.log(carrito)
//     } else {
//         alert("¡No tenemos ese producto!")
//     }

//     seleccion = prompt("¿ Desea seguir comprando ?")
//     while (seleccion === "no") {
//         alert("¡Gracias por la compra!")
//         carrito.forEach((carritoFinal) => {
//             console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
//             total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
//         })
//         break;
//     }
// }
// // suma el valor total de los productos elegidos.
// const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
// console.log(`el total a pagar por su compra es: ${total}`);

// // BUSCADOR.

// const producto = document.getElementById("articulosCarrito");

// const catalogo = () => {
//     for (let producto of productos) {
//         producto.innerHTML += `
                

//                 <div class="card" style="width: 18rem;" id="articulosCarrito">
//                 <img src="./imagenes/img1--tarjeta.jpg" class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <h5 class="card-title">Nombre: ${producto.nombre}</h5>
//                     <p class="card-text">Valor: ${producto.precio}</p>
//                     </div>
//                     <div class="button--container">
//                         <button class="button">AGREGAR</button>
//                     </div>

                                       
// //         `
        
//     }
// }



// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#myModal h5');
const vaciarCarritobtn =  document.querySelector('#vaciar-carrito');
const listaTelefonos = document.querySelector('#lista-telefonos');
let articulosCarrito = [];

cargarEventListeners(); 
    function cargarEventListeners() {
        listaTelefonos.addEventListener('click', agregarCurso);

         // muestra los cursos LS
         document.addEventListener('DOMContentLoaded',() =>{
            articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carritoHTML();
        })
        // vaciar carrito
        vaciarCarritobtn.addEventListener('click', () =>{
            articulosCarrito = [];
            limpiarHTML();
           
        })
    }


// funciones

function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
       
        leerDatosCurso(cursoSeleccionado);
    }
   
}

// lee el contenido del html al que le dimos click y extrae la info
function leerDatosCurso(curso) {
    // console.log(curso);
    // crear un objeto con el contenido de las ventas
    const infoVenta = {
       precio: curso.querySelector('p').textContent,
       titulo: curso.querySelector('h4').textContent,
       imagen: curso.querySelector('img').src,
       id: curso.querySelector('a').getAttribute('data-id'),
       cantidad: 1
    }

    // revisa si un elemento ya existe

    const existe = articulosCarrito.some( curso => curso.id === infoVenta.id);
    if(existe){
        // actualizamos
        const cursos = articulosCarrito.map ( curso => {
            if(curso.id === infoVenta.id ){
                curso.cantidad++;
                return curso;
            }else {
                return curso;
            }
            });

            articulosCarrito = [...cursos];
    }else {
        // agregamos
        articulosCarrito = [...articulosCarrito, infoVenta ];
    }

    // agrega elementos al arreglo del carrito
    
    articulosCarrito = [...articulosCarrito, infoVenta ];

    console.log(articulosCarrito);
    carritoHTML();

}

// muestra el carrito de compras en el html

function carritoHTML() {

    // limpiar el html
    limpiarHTML();


    // recorre el carrito y general el html
    articulosCarrito.forEach(curso => {
        const{ imagen,titulo, precio, cantidad, id} =  curso;
        console.log(curso);
        const row = document.createElement('div');
        row.innerHTML = `
        <td>
        <img src=" ${imagen}" width="50">
        </td>

        <td>
        ${titulo}
        </td>
        <hr>
        <td>
        ${precio}
        </td>
        
        <td>
        <a href="#" class="borrar-curso" data-id="${id}">  X </a>
        </td>


       
        `;

        // agrega el HTML del carrito:
        contenedorCarrito.appendChild(row);
    });

    // storage
    sincronizarStorage();
    function sincronizarStorage(){
        localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
    }
}

// elimina los cursos

function limpiarHTML() {
    // while(contenedorCarrito.firstChild) {
    //     contenedorCarrito.removeChild(contenedorCarrito.firstElementChild)
    // }

    contenedorCarrito.innerHTML = '';

}







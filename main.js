
// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#myModal h5');
const vaciarCarritobtn =  document.querySelector('#vaciar-carrito');
const listaTelefonos = document.querySelector('#lista-telefonos');
let articulosCarrito = [];

cargarEventListeners(); 
    function cargarEventListeners() {
        listaTelefonos.addEventListener('click', agregarCurso);

        // elimino del carrito
        carrito.addEventListener('click', eliminarCurso);

         // muestra los telefonos LS
         document.addEventListener('DOMContentLoaded',() =>{
            articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || [];
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

// elimino productos del carrito
function eliminarCurso(e) {
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')) {
       const cursoId = e.target.getAttribute('data-id');
       articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
       carritoHTML();
    }
}

// lee el contenido del html al que le dimos click y extrae la info
function leerDatosCurso(curso) {
    
    // crear un objeto con el contenido de las ventas
    const infoVenta = {
       precio: curso.querySelector('p').textContent,
       titulo: curso.querySelector('h4').textContent,
       imagen: curso.querySelector('img').src,
       id: curso.querySelector('a').getAttribute('data-id'),
       cantidad: 1
    }

    // revisa si un elemento ya existe

    const existe = articulosCarrito.some( curso => curso.id === infoVenta.id );
    if(existe) {
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoVenta.id ) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito =  [...cursos];
    } else {
        articulosCarrito =  [...articulosCarrito, infoVenta];
    }
  
           
            
    
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
    
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// elimina los cursos

function limpiarHTML() {
    // while(contenedorCarrito.firstChild) {
    //     contenedorCarrito.removeChild(contenedorCarrito.firstElementChild)
    // }

    contenedorCarrito.innerHTML = '';

}







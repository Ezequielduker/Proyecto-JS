const productos = [
    { nombre: "celular", precio: 100 },
    { nombre: "tablet", precio: 200 },
    { nombre: "termo", precio: 50 },
    { nombre: "notebook", precio: 250 },
    { nombre: "funda", precio: 150 },
];

let carrito = []

let seleccion = prompt("¿ Hola desea comprar algun producto ? Responda si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor Ingresa si o no")
    seleccion = prompt("Hola desea comprar, Responda  si o no")
}

if (seleccion == "si") {
    alert("A continuación nuestra lista de productos, elegí algunas de las opciones: ")
    let todosLosProductos = productos.map((producto) => producto.nombre + "" + producto.precio + "$")
    alert(todosLosProductos.join())
} else if (seleccion == "no") {
    alert("Muchas Gracias, Nos vemos luego! ")
}

// para elegir productos.

while (seleccion != "no") {
    let producto = prompt("Agregá un producto a tu carrito")
    let precio = 0

    if (producto == "celular" || producto == "tablet" || producto == "termo" || producto == "notebook" ||
        producto == "funda") {
        switch (producto) {
            case "celular":
                precio = 100;
                break;

            case "tablet":
                precio = 200;
                break;

            case "termo":
                precio = 50;
                break;

            case "notebook":
                precio = 250;
                break;
            case "funda":
                precio = 200;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("¡No tenemos ese producto!")
    }

    seleccion = prompt("¿ Desea seguir comprando ?")
    while (seleccion === "no") {
        alert("¡Gracias por la compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}
// suma el valor total de los productos elegidos.
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`);

// BUSCADOR.

const producto = document.getElementById("resultado");

const catalogo = () => {
    for (let producto of productos) {
        producto.innerHTML += `
                

                <div class="card" style="width: 18rem;" id="resultado">
                <img src="./imagenes/img1--tarjeta.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Nombre: ${producto.nombre}</h5>
                    <p class="card-text">Valor: ${producto.precio}</p>
                    </div>

                                       
        `
    }
}




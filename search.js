const resultado = document.getElementById("resultado");

const formulario = document.getElementById("formulario");

const filtrar = () =>{

    resultado.innerHTML = '';
    
    const texto = formulario.value.toLowerCase();
    for ( let producto of productos ){
        let nombre = producto.nombre.toLowerCase();

        if ( nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            

            <div class="card" style="width: 18rem;" id="resultado">
                <img src="./imagenes/img1--tarjeta.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Nombre: ${producto.nombre}</h5>
                    <p class="card-text">Valor: ${producto.precio}</p>
                    </div>

                    <div class="button--container">
                    <button class="button">AGREGAR</button>
                </div>                  
            `
        }

    }
    if ( resultado.innerHTML === '' ){
        resultado.innerHTML = `<li>Producto no encontrado</li>`
    }

}

formulario.addEventListener('keyup', filtrar)
filtrar();
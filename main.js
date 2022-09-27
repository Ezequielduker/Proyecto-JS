

//  Para mi trabajo final deseo realizar una maqueta tipo E-commerce 
//  para ello, necesitare que la persona ingrese un usuario y contraseña para
//  poder operar.

      //  1) crear un algoritmo con un condicional, Ejemplo 1:


// const usuarioAutorizado = "ezequiel";
// const passwordAutorizado = "silva";

// let usuarioIngresado = prompt("Ingrese su nombre de usuario: "); 
// let passwordIngresado = prompt("Ingrese su contraseña: "); 


// for(let i = 0; i < 2; i++) {
//     if(usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado) {
//         alert("contraseña correcta, Bienvenido!");
//         break;
        
//     }else {
//          alert("contraseña o usuario incorrecto, volvé a intentarlo");
//          break;
            
//      } 
//     }


       // Ejemplo 2 :

// siguiendo con la tematica de mi proyecto final, la persona podrá tener la opcion 
// de calcular el " costo de envío por zona" para ello crearé una funcion
// que la pueda utilizar cada vez que se requiera: 

function calcularCostoDeEnvio() {

    let localidad = prompt("Ingrese su localidad: \n 1: CABA, 2: Zona Sur, 3: Zona Norte");

//    El while es a modo de prueba, se puede utilizar si se quiere.

// while(localidad != "1" && localidad != "2" && localidad != "3" ) {
//     localidad = prompt("Ingrese su localidad: \n 1: CABA, 2: Zona Sur, 3: Zona Norte");
// }

switch(localidad) {
    case "1":
        alert("el costo de envio es 200$");
        break;
        case "2":
        alert("el costo de envio es 500$");
        break;
        case "3":
        alert("el costo de envio es 600$");
        break;
        default:
            alert("No tenemos alcance hasta esa localidad");
            break;
        
} 

}

// calcularCostoDeEnvio();






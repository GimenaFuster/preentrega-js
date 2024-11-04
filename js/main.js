const menu ="ingrese 1- Ventas, 2- Estado del pedido, 3- Servicio tecnico, 4- Hablar con un asesor"

const opcion = parseInt(prompt("ingrese la opcion:" + menu));

if (opcion === 1) {
    //Ventas
} else if(opcion === 2) {
    //Estado del pedido
} else if(opcion === 3) {
    //Servicio tecnico
} else if(opcion ===4) {
    //Hablar con un asesor
} else {
    alert("opcion invalida. " + menu)
}
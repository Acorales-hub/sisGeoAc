function reiniciaTxt()
{
    // Crear objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Especificar la URL del archivo datos.txt
    var url = '../php/datos.txt';

    // Abrir conexión con el archivo datos.txt
    xhr.open('POST', url, true);

    // Enviar solicitud
    xhr.send('');

    // Procesar respuesta
    xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
        // Mostrar mensaje de solicitud efectuada
        console.log('Solicitud efectuada con éxito. Contenido del archivo borrado.');

        } else {
        console.error('Error al cargar el archivo: '+ xhr.status);
        }
    }
    };
}
    
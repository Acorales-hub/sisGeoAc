
function mapaAtmb(latitude, longitude, nom) {
    //VARIABLES:
    let latitud = 10.25055;   //<-Valor de la latiud por defecto ATMB.
    let longitud = -67.59257; //<-Valor de la longitud por defecto ATMB.
    let map;//<-Variable contenedora del mapa.

//LLAMADAS A LA FUNCIONES:
    
    //llamada a la función carga del mapa.
    map = L.map('map').setView([latitud, longitud], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Br. D. Navarro C. <p>Academia Técnica Militar de Comunicaciones y Eléctronica</p>'
    }).addTo(map); //<-Agrega valores a los atributos del Layer al mapa.

    L.marker([latitud, longitud]).addTo(map)
        .bindPopup(nom)
        .openPopup();//<--Agrega popUp con datos al mapa.
}

// Función para obtener datos desde un archivo PHP:
function obtenerData() {
    // Enviar solicitud para extraer los datos del archivo PHP
    var xhr = new XMLHttpRequest();
    var url = '../php/extraer_datos.php';

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var data = xhr.responseText;
                console.log('Datos extraídos:', data);
                // Aquí puedes procesar los datos extraídos como desees

                // Suponiendo que los datos están en el formato "longitude,latitude"
                var dataParts = data.split(',');
                if (dataParts.length === 2) {
                    var longitude = parseFloat(dataParts[0].trim());
                    var latitude = parseFloat(dataParts[1].trim());

                    if (!isNaN(longitude) && !isNaN(latitude)) {
                        console.log('Longitud:', longitude);
                        console.log('Latitud:', latitude);

                        document.getElementById('x-longitud').innerText = longitude;
                        document.getElementById('y-latitud').innerText = latitude;

                        let name = 'Usuario';
                        mapaAtmb(latitude, longitude, name);
                    } else {
                        console.error('Datos inválidos recibidos. Longitud y/o latitud no son números.');
                    }
                } else {
                    console.error('Formato de datos incorrecto. Se esperaban dos valores separados por coma.');
                }
            } else {
                console.error('Ocurrió un error al extraer los datos');
            }
        }
    };

    xhr.send();
}
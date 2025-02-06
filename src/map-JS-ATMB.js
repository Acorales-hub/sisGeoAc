/* **************************************************************
*    ACADEMIA TÉCNICA MILITAR BOLIVARIANA                       *
*    DE COMUNICACIONES Y ELÉCTRONICA.                           *
*    PROYECTO DE PROGRAMACIÓN.                                  *
*    ALFÉREZ: D. NAVARRO C.                                     *
*    FECHA: 22/04/2022                                          *
*    DESCRIPCIÓN: API JS DE CÓDIGO LIBRE, ACTIVACIÓN DEL MAPA   *
*************************************************************** */

   // VARIABLES:
    let latitud = 10.25055;   // Valor de la latitud por defecto ATMB.
    let longitud = -67.59257; // Valor de la longitud por defecto ATMB.
    let nombre = 'Academia Técnica Militar Bolivariana.';
    let map; // Variable contenedora del mapa.
    let marker; // Variable para el marcador.

// LLAMADA A LA FUNCIÓN:
mapaAtmb(latitud, longitud, nombre);

function mapaAtmb(latitud, longitud, nom) {
    if (!map) {
        // Inicializar el mapa solo una vez
        map = L.map('map').setView([latitud, longitud], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Br. D. Navarro C. <p>Academia Técnica Militar de Comunicaciones y Electrónica</p>'
        }).addTo(map);
    } else {
        // Actualizar la vista del mapa
        map.setView([latitud, longitud], 17);
    }

    if (marker) {
        // Si el marcador ya existe, actualizar su posición y popup
        marker.setLatLng([latitud, longitud]).setPopupContent(nom).openPopup();
    } else {
        // Crear el marcador si no existe
        marker = L.marker([latitud, longitud]).addTo(map)
            .bindPopup(nom)
            .openPopup();
    }
}
'use strict'
/* **************************************************************
*    ACADEMIA TÉCNICA MILITAR BOLIVARIANA                       *
*    DE COMUNICACIONES Y ELÉCTRONICA.                           *
*    PROYECTO DE PROGRAMACIÓN.                                  *
*    ALFÉREZ: D. NAVARRO C.                                     *
*    FECHA: 22/04/2022                                          *
*    DESCRIPCIÓN: API JS DE CÓDIGO LIBRE, MAPA DIGITAL          *
*************************************************************** */

   // VARIABLES:
   let latitud = 10.25055;   // Valor de la latitud por defecto ATMB.
   let longitud = -67.59257; // Valor de la longitud por defecto ATMB.
   let nombre = 'Academia Técnica Militar Bolivariana.';
   let map  // Variable contenedora del mapa.
   let contMap = document.getElementById('map')
   var marker; // Variable para el marcador.

// LLAMADA A LA FUNCIÓN:
//OpenStreetMap();

function OpenStreetMap() {


   if (!map) {
       // Inicializar el mapa solo una vez
       map = L.map('map').setView([latitud, longitud], 17);
       
       // Agregar un marcador
        marker = L.marker([latitud, longitud]).addTo(map);

        // Agregar un popup al marcador
        marker.bindPopup(`Latitud: ${latitud} Longitud: ${longitud}`).openPopup();
       

       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: 'Alfz. D. Navarro C. <p>Academia Técnica Militar de Comunicaciones y Electrónica</p>'
       }).addTo(map);
   } else {
       // Actualizar la vista del mapa
       map.setView([latitud, longitud], 17);
   }

   if (marker) {
       // Si el marcador ya existe, actualizar su posición y popup
       marker.setLatLng([latitud, longitud]).setPopupContent(nombre).openPopup();

   } else {
       // Crear el marcador si no existe
       marker = L.marker([latitud, longitud]).addTo(map)
           .bindPopup(nom)
           .openPopup();
   }
}
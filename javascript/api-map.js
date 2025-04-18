'use strict';

/* 
TODO: =====================================================================
TODO: ACADEMIA TÉCNICA MILITAR BOLIVARIANA DE COMUNICACIONES Y ELÉCTRONICA.
TODO: PROYECTO DE PROGRAMACIÓN.
TODO: ALFÉREZ: D. NAVARRO C.
TODO: FECHA: 22/04/2022
TODO:DESCRIPCIÓN: API JS DE CÓDIGO LIBRE, MAPA DIGITAL
TODO ======================================================================
*/

//! [VARIABLES GLOBALES]============================================
//! Estas variables son accesibles desde cualquier parte del código.
//! ================================================================
    /*Latitud por defecto de la ATMB.*/         let latitudInicial = 10.25055;   
    /*Longitud por defecto de la ATMB.*/        let longitudInicial = -67.59257;   
    /*Nombre del lugar*/                        let nombreLugar = 'Academia Técnica Militar Bolivariana.'; 
    /*Objeto Leaflet para el mapa.*/            let mapa;            
    /*Elemento HTML donde se mostrará el mapa.*/const contenedorMapa = document.getElementById('map'); 
    /*Objeto Leaflet para el marcador.*/        let marcador;                  

//! ==============================================================
//! FUNCIÓN PARA INICIALIZAR Y ACTUALIZAR EL MAPA DE OPENSTREETMAP
//! ==============================================================

function OpenStreetMap() {
    // =========================================================
    // VARIABLES LOCALES: Estas variables solo son accesibles dentro de esta función.
    // =========================================================
    const zoomNivel = 17; // Nivel de zoom del mapa.
    const urlTileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attributionText = 'Alfz. D. Navarro C. <p>Academia Técnica Militar de Comunicaciones y Electrónica</p>';
    const popupContenido = `Latitud: ${latitudInicial} Longitud: ${longitudInicial}`;

    // =========================================================
    // INICIALIZACIÓN DEL MAPA: Se realiza solo si el mapa aún no existe.
    // =========================================================
    
    if (!mapa) {
        
        mapa = L.map('map').setView([latitudInicial, longitudInicial], zoomNivel);

        // Agregar capa de tiles de OpenStreetMap.
        L.tileLayer(urlTileLayer, {
            attribution: attributionText
        }).addTo(mapa);

        // Crear y agregar el marcador inicial.
        marcador = L.marker([latitudInicial, longitudInicial]).addTo(mapa)
            .bindPopup(popupContenido)
            .openPopup();

        // Agregar un evento de clic al marcador inicial.
        marcador.on('click', function() {
            console.log(`Marcador clickeado en: ${nombreLugar}`);
        });
    }
    // =========================================================
    // ACTUALIZACIÓN DEL MAPA SI YA EXISTE: Se actualiza la vista y el marcador.
    // =========================================================
    else {
        // Actualizar la vista del mapa a la nueva latitud y longitud.
        mapa.setView([latitudInicial, longitudInicial], zoomNivel);

        // Actualizar la posición y el contenido del popup del marcador si existe.
        if (marcador) {
            marcador.setLatLng([latitudInicial, longitudInicial]).setPopupContent(nombreLugar).openPopup();
        }
        // Crear el marcador si no existía previamente (esto podría ser redundante si la inicialización es correcta).
        else {
            marcador = L.marker([latitudInicial, longitudInicial]).addTo(mapa)
                .bindPopup(nombreLugar)
                .openPopup();
        }
    }
}

// =============================================================
// LLAMADA A LA FUNCIÓN PARA INICIALIZAR EL MAPA AL CARGAR LA PÁGINA
// =============================================================
//OpenStreetMap();
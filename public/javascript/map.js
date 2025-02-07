//Variables Globales:
    let latitudVzla= 10.25055;
    let longitudVzla = -68.77527;
    let latitudeIni = 0
    let longitudeIni = 0
    let zoomIni = 2
    const markers = {};//Marcadores en vacio.
    const map = L.map('map').setView([latitudeIni, longitudeIni], zoomIni); // Coordenadas iniciales y zoom
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    //L.marker([latitudVzla, longitudVzla]).addTo(map) ;
    setTimeout(()=>{
    L.marker([latitudVzla, longitudVzla])
    .addTo(map)
    .bindPopup(`
        <div>
            <h3>Detalles del marcador</h3>
            <ul>
                <li>Latitud: ${latitudVzla}</li>
                <li>Longitud: ${longitudVzla}</li>
                <li>Lugar: República Bolivariana de Venezuela</li>  
            </ul>
            </div>
    `)
    .openPopup();
    },3000);



function addDeviceToMap(device) {
    if (markers[device.id]) {
        markers[device.id].setLatLng([device.latitude, device.longitude]);
    } else {
        markers[device.id] = L.marker([device.latitude, device.longitude]).addTo(map).bindPopup(device.alias);
        markers[device.id].on('click', () => showDeviceDetails(device.id));
    }
}
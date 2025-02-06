// Inicializar el mapa (ejemplo con Leaflet)
const map = L.map('map').setView([0, 0], 2); // Coordenadas iniciales y zoom
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const markers = {};

function addDeviceToMap(device) {
    if (markers[device.id]) {
        markers[device.id].setLatLng([device.latitude, device.longitude]);
    } else {
        markers[device.id] = L.marker([device.latitude, device.longitude]).addTo(map).bindPopup(device.alias);
        markers[device.id].on('click', () => showDeviceDetails(device.id));
    }
}
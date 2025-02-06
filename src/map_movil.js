const deviceList = document.getElementById('device-list');
const deviceDetails = document.getElementById('device-details');

function addDeviceToList(device) {
    const li = document.createElement('li');
    li.className = 'nav-item';
    li.innerHTML = `<a class="nav-link" href="#" data-device-id="${device.id}">${device.alias}</a>`;
    li.addEventListener('click', () => {
        map.setView([device.latitude, device.longitude], 13);
        showDeviceDetails(device.id);
    });
    deviceList.appendChild(li);
}

function showDeviceDetails(deviceId) {
    const device = devices.find(d => d.id === deviceId);
    if (!device) return;

    let accordionItem = document.getElementById(`device-${deviceId}`);
    if (!accordionItem) {
        accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        accordionItem.id = `device-${deviceId}`;
        accordionItem.innerHTML = `
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${deviceId}" aria-expanded="false" aria-controls="collapse${deviceId}">
            ${device.alias}
            </button>
        </h2>
        <div id="collapse${deviceId}" class="accordion-collapse collapse" data-bs-parent="#device-details">
            <div class="accordion-body">
            </div>
        </div>
        `;
        deviceDetails.appendChild(accordionItem);
    }

    const accordionBody = accordionItem.querySelector('.accordion-body');
    accordionBody.innerHTML = `
    <p>Latitud: ${device.latitude}, Longitud: ${device.longitude}</p>
    <p>Alias: ${device.alias}</p>
    <img src="${device.image}" alt="Imagen de ${device.alias}" width="200">
    `;
}

// Datos de ejemplo (reemplazar con datos reales del backend o fuente de datos)
const devices = [
    { id: 1, alias: 'Dispositivo 1', latitude: 40.7128, longitude: -74.0060, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/800px-Sunflower_from_Silesia2.jpg' },
    { id: 2, alias: 'Dispositivo 2', latitude: 34.0522, longitude: -118.2437, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_Moon_Feb_2010.jpg/1024px-Full_Moon_Feb_2010.jpg' }
];

devices.forEach(device => {
    addDeviceToList(device);
    addDeviceToMap(device);
});
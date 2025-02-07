/* **************************************************************
*    ACADEMIA TÉCNICA MILITAR BOLIVARIANA                       *
*    DE COMUNICACIONES Y ELÉCTRONICA.                           *
*    PROYECTO DE PROGRAMACIÓN.                                  *
*    ALFÉREZ: D. NAVARRO C.                                     *
*    FECHA: 22/04/2022                                          *
*    DESCRIPCIÓN: GEOLOCALIZACIÓN DEL USUARIO                   *
*************************************************************** */

// Función para obtener la ubicación del usuario
function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocalización no es soportada por este navegador.");
    }

    showPosition(position);//<-LLamada a la función para mostrar los datos.
    showError(error); //<-Llamada a la función que maneja los errores.
}

// Función para mostrar la posición
function showPosition(position) 
{
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;

// Capturar datos del dispositivo
    var userAgent = navigator.userAgent;
    var platform = navigator.platform;

// Mostrar la ubicación y los datos del dispositivo
    /*console.log("Latitud: " + latitude);
    console.log("Longitud: " + longitude);
    console.log("Precisión: " + accuracy + " metros");
    console.log("User Agent: " + userAgent);
    console.log("Plataforma: " + platform);*/

    document.getElementById('latitud').innerText = latitude;
    document.getElementById('longitud').innerText = longitude;
    document.getElementById('cercano').innerText = accuracy;
    document.getElementById('plataforma').innerText = platform;
    document.getElementById('nevegador').innerText = userAgent;
    
    sendPost(latitude,longitude);
}

//Función para el envio de los datos por Post al archivo php

function sendPost(lat,long)
{

    // Datos a enviar
    var data = {
        latitud: lat, 
        longitud: long 
    };
    
    // Enviar datos por POST a un archivo PHP
    var xhr = new XMLHttpRequest();
    var url = '../php/recibe_guarda.php';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            console.log('Datos enviados correctamente');
        } else {
            console.error('Ocurrió un error al enviar los datos');
        }
        }
    };
    xhr.send(JSON.stringify(data));
}

// Función para manejar errores
function showError(error) 
{
    switch(error.code) {
        case error.PERMISSION_DENIED:
        alert("El usuario denegó la solicitud de geolocalización.");
        break;
        case error.POSITION_UNAVAILABLE:
        alert("La información de ubicación no está disponible.");
        break;
        case error.TIMEOUT:
        alert("Se ha agotado el tiempo para obtener la ubicación.");
        break;
        case error.UNKNOWN_ERROR:
        alert("Ocurrió un error desconocido al obtener la ubicación.");
        break;
    }
}
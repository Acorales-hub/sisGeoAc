'use strict'

/* 
TODO: ===========================================================
TODO:   ACADEMIA TÉCNICA MILITAR BOLIVARIANA                     
TODO:    DE COMUNICACIONES Y ELÉCTRONICA.                        
TODO:    PROYECTO DE PROGRAMACIÓN.                               
TODO:    ALFÉREZ: D. NAVARRO C.                                 
TODO:   FECHA: 31/03/2025                                       
TODO:    DESCRIPCIÓN: MODULO DE CAPTURA DE DATOS Y GPS           
TODO: ===========================================================
*/

   //! VARIABLES:
        let tiempo = new Date();
        let hora = tiempo.getHours();
        let minutos = tiempo.getMinutes();
        let segundos = tiempo.getSeconds();
        let fecha = tiempo.getDate();
        let mes = tiempo.getMonth();
        let year = tiempo.getFullYear();
        let fullFecha = fecha + '/' + mes + '/' + year;

  //! Funciones:

// getDataGps.js
// Función para obtener la ubicación actual del usuario utilizando la API de Geolocalización de HTML5
// y mostrarla en el HTML. También muestra información del dispositivo.
    function getCurrentLocation() {

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });
        } else {
          displayWarning("Geolocalización no soportada por este navegador.");
        }
      }
  

  function showPosition(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    //! Mostrar en los elementos HTML

    document.getElementById("latitud").textContent = latitude.toFixed(6); // Mostrar 6 decimales
    document.getElementById("longitud").textContent = longitude.toFixed(6); // Mostrar 6 decimales

    // Puedes mostrar la precisión si lo deseas
    // document.getElementById("cercano").textContent = accuracy.toFixed(2);
    // Opcional: Mostrar un mensaje de éxito
    displayWarning("Ubicación obtenida con éxito.");

    //! Aquí puedes agregar código para enviar la ubicación a un servidor, si es necesario.
    console.log("Latitud: " + latitude + ", Longitud: " + longitude);
  }

  function showError(error) {

    let errorMessage = "";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "El usuario denegó la solicitud de geolocalización.";
        break;

      case error.POSITION_UNAVAILABLE:
        errorMessage = "Información de ubicación no disponible.";
        break;

      case error.TIMEOUT:
        errorMessage = "La solicitud para obtener la ubicación del usuario expiró.";
        break;

      case error.UNKNOWN_ERROR:
        errorMessage = "Ocurrió un error desconocido.";
        break;
    }
    displayWarning(errorMessage);
  }
  
  function displayWarning(message) {

    const warningDiv = document.getElementById("warning");
    if (warningDiv) {
      warningDiv.textContent = message;
      warningDiv.style.marginTop = "10px";
      warningDiv.style.padding = "5px";
      warningDiv.style.textAlign = "center";
      warningDiv.style.borderRadius = "5px";
      warningDiv.style.color = "whyte"; // Puedes cambiar el estilo aquí
      warningDiv.style.backgroundColor = "yellow"; // Puedes cambiar el fondo aquí
    } else {
      console.warn("Elemento 'warning' no encontrado en el DOM.");
    }
  }

  //! Llamar a la función para obtener la ubicación cuando la página se carga
  //! window.onload = getCurrentLocation;


  //* Función para obtener información del dispositivo
function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    let deviceType = "Desconocido";
    let os = "Desconocido";
    let browser = "Desconocido";

    //* Detectar tipo de dispositivo
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
          deviceType = "Móvil";
      } else if (/Tablet|iPad/i.test(userAgent)) {
          deviceType = "Tablet";
      } else {
          deviceType = "Escritorio";
      }

    //* Detectar sistema operativo
      if (/Android/i.test(userAgent)) {
          os = "Android";
      } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
          os = "iOS";
      } else if (/Windows/i.test(userAgent)) {
          os = "Windows";
      } else if (/Mac/i.test(userAgent)) {
          os = "macOS";
      } else if (/Linux/i.test(userAgent)) {
          os = "Linux";
    }



    //* Detectar navegador

    if (/Chrome/i.test(userAgent)) {
        browser = "Chrome";
    } else if (/Firefox/i.test(userAgent)) {
        browser = "Firefox";
    } else if (/Safari/i.test(userAgent)) {
        browser = "Safari";
    } else if (/Edge/i.test(userAgent)) {
        browser = "Edge";
    } else if (/Opera/i.test(userAgent) || /OPR/i.test(userAgent)) {
        browser = "Opera";
    }


    //* Mostrar la información en la consola
      console.log("Tipo de dispositivo:", deviceType);
      console.log("Sistema operativo:", os);
      console.log("Navegador:", browser);


    //* Mostrar la información en el HTML (si tienes elementos para esto)
    document.getElementById("deviceType").textContent = deviceType;
    document.getElementById("os").textContent = os;
    document.getElementById("browser").textContent = browser;

}

//* Función para actualizar el mapa (integrando api-map.js)<----LA ACTUALIZACIÓN DEL MAPA NO VA EN ESTE ARCHIVO

function actualizarMapa(lat, lon) {

    //* Actualizar las variables globales de api-map.js
      latitud = lat;
      longitud = lon;

    //* Llamar a la función OpenStreetMap para actualizar el mapa
      OpenStreetMap();

}


//* Llamar a la función para obtener la ubicación y la información del dispositivo cuando la página se carga
//*window.onload = getDataGps;
//*getDataGps();

function getDataGps(){//*Detección de datos y gps
    document.getElementById('fecha').innerText = fullFecha;
    document.getElementById('hora').innerText = hora + ':' + minutos + ':' + segundos;
    getCurrentLocation()
    getDeviceInfo()
}
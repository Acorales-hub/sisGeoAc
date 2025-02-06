<?php
/* **************************************************************
*    ACADEMIA TÉCNICA MILITAR BOLIVARIANA                       *
*    DE COMUNICACIONES Y ELÉCTRONICA.                           *
*    PROYECTO DE PROGRAMACIÓN.                                  *
*    ALFÉREZ: D. NAVARRO C.                                     *
*    FECHA: 22/04/2022                                          *
*    DESCRIPCIÓN: RECIBE Y GUARDA LOS DATOS                     *
*************************************************************** */

// Recibir datos por POST
    $data = json_decode(file_get_contents('php://input'), true);

// Obtener la latitud y longitud
    $latitud = $data['latitud'];
    $longitud = $data['longitud'];

// Hacer algo con la latitud y longitud (en este caso, solo las mostramos)
//echo 'Latitud: ' . $latitud . ', Longitud: ' . $longitud;


// Guardar los datos en un archivo de texto
    $file = 'datos.txt';
    $current = $latitud.','.$longitud."\n";
    file_put_contents($file, $current, FILE_APPEND | LOCK_EX);

    //echo 'Datos guardados correctamente';

?>
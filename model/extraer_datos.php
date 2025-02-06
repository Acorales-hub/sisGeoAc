<?php
/* **************************************************************
*    ACADEMIA TÉCNICA MILITAR BOLIVARIANA                       *
*    DE COMUNICACIONES Y ELÉCTRONICA.                           *
*    PROYECTO DE PROGRAMACIÓN.                                  *
*    ALFÉREZ: D. NAVARRO C.                                     *
*    FECHA: 22/04/2022                                          *
*    DESCRIPCIÓN: EXTRAE Y ENVIA LOS DATOS                      *
*************************************************************** */


// Leer los datos del archivo de texto
$file = 'datos.txt';
$data = file_get_contents($file);

// Enviar los datos como respuesta
echo $data;
?>
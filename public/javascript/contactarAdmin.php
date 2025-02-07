<?php
// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the data sent by the ActiveX object
    $asunto = $_POST['asunto'];

    // Perform any necessary operations with the data (e.g., save to a database)

    // Return a success message
    echo "Has contactado al administrador, asunto: " . $asunto;
} else {
    // Return an error message if the request method is not POST
    echo "Error: Invalid request method";
}
?>
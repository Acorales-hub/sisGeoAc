//Variables
    //const { Alert } = require("./node_modules/bootstrap/dist/js/bootstrap.esm.min.js")
    const your_server_url = './php/contactarAdmin.php'

// Import the required libraries:
    const activexObject = new ActiveXObject("Microsoft.XMLHTTP");//<-Import the ActiveX control


//Función:
function contactoAdmin(){
    let result = prompt('Contacto con el Administrador\n\nAgregue Grado, nombres, Apellidos,Número de cedula, Teléfono, email y el asunto','Redacte aquí')

    if(result === null || result === ''){
        /*Alert.fire({
            icon: 'error',  
            title: 'Error',
            text: 'Debes ingresar un nombre de contacto.'
        })*/
        alert('ERROR!, Campo vacio o nulo, vuelve a intentar.')
    }else{
        // Send data using POST using the ActiveX control
        activexObject.open("POST", "your_server_url", false);
        activexObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        activexObject.send(`asunto=${encodeURIComponent(result)}`);

        if (activexObject.status === 200 || activexObject.status === 404 || activexObject.status === 500) {
            alert(`Has contactado al administrador, asunto: ${result}`);
        } else {
            alert(`Error al enviar el mensaje: ${activexObject.statusText}`);
        }
        //alert(`Has contactado al administrador, asunto: ${result}`)
    }

}

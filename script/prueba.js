const fs = require('fs');

// Crear un objeto JSON con la información seleccionada
var proyectoSeleccionado = "Proyecto A"; // Reemplaza esto con la lógica para obtener el proyecto seleccionado
var json = {
  proyecto: proyectoSeleccionado,
  opciones: opcionesSeleccionadas
};

// Convertir el objeto JSON a una cadena de texto
var jsonString = JSON.stringify(json);

// Guardar el JSON en un archivo llamado "evaluacion.json"
fs.writeFile('evaluacion.json', jsonString, 'utf8', function(err) {
  if (err) {
    console.log('Error al guardar el JSON: ' + err);
    return;
  }
  console.log('JSON guardado exitosamente en evaluacion.json');
});





// Crear un objeto JSON con la información seleccionada
var proyectoSeleccionado = "Proyecto A"; // Reemplaza esto con la lógica para obtener el proyecto seleccionado
var json = {
  proyecto: proyectoSeleccionado,
  opciones: opcionesSeleccionadas
};

// Convertir el objeto JSON a una cadena de texto
var jsonString = JSON.stringify(json);

// Enviar el JSON al servidor utilizando Fetch
fetch('url_del_servidor', {
  method: 'POST', // Puedes ajustar el método de solicitud HTTP según tus necesidades (POST, GET, etc.)
  body: jsonString,
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(function(response) {
  // Verificar el estado de la respuesta
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Error al enviar el JSON');
  }
})
.then(function(data) {
  // Manejar la respuesta del servidor en caso de éxito
  console.log('JSON enviado exitosamente');
  console.log(data);
})
.catch(function(error) {
  // Manejar el error en caso de fallo
  console.log(error);
});


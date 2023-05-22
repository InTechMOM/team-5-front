const fs = require('fs');

// Función para guardar el JSON en el archivo
function guardarDatosEnArchivo(jsonData) {
  const jsonString = JSON.stringify(jsonData);

  // Ruta y nombre del archivo donde se almacenará el JSON
  const filePath = './datos.json"';

  fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
      console.error('Error al escribir el archivo:', err);
    } else {
      console.log('JSON almacenado con éxito en', filePath);
    }
  });
}

// Ejemplo de uso
const jsonData = {
  proyecto: 'Proyecto A',
  opciones: ['Validez de la información', 'Fluidez', 'Comunicación verbal']
};

guardarDatosEnArchivo(jsonData);
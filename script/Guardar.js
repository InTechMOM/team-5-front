// Obtener referencia al botón "Guardar" y al elemento del popup
var guardarBtn = document.querySelector('.formulario__btn');
var popup = window;

// Agregar evento click al botón "Guardar"
guardarBtn.addEventListener('click', function() {
  // Validar que al menos una opción esté seleccionada en cada lista
  var listas = document.querySelectorAll('.Lista1, .Lista2, .Lista3, .Lista4');
  var algunaOpcionSeleccionada = true;

  listas.forEach(function(lista) {
    var opcionesSeleccionadas = lista.querySelectorAll('input[type="checkbox"]:checked');
    if (opcionesSeleccionadas.length === 0) {
      algunaOpcionSeleccionada = false;
    }
  });

  // Mostrar mensaje de error si alguna lista no tiene opciones seleccionadas
  if (!algunaOpcionSeleccionada) {
    Swal.fire('Debes seleccionar al menos una opción de cada lista');
    return; // Detener la ejecución si hay error
  }

  // Obtener todas las opciones seleccionadas
  var opcionesSeleccionadas = [];
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function(checkbox) {
    opcionesSeleccionadas.push(checkbox.nextElementSibling.textContent);
  });

  // Mostrar mensaje de éxito al usuario
  Swal.fire('¡Guardado con éxito!');

  // Limpiar las opciones seleccionadas
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });

  // Esperar 15 segundos y luego redirigir al usuario a la pantalla principal
  setTimeout(function() {
    popup.close();
    window.opener.location.href = 'perfilDocente.html';
  }, 2000); // 15000 milisegundos = 15 segundos
});
document.getElementById('filtro_proyectos').addEventListener('change', function() {
  var seleccionado = this.value;
  var proyectos = document.querySelectorAll('.box');
  
  for (var i = 0; i < proyectos.length; i++) {
      var proyecto = proyectos[i];
      var proyectoData = proyecto.getAttribute('data-proyecto');
      
      if (seleccionado === 'todos' || seleccionado === proyectoData) {
          proyecto.classList.remove('hidden');
      } else {
          proyecto.classList.add('hidden');
      }
  }
});
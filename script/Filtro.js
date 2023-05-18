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

// Obtener los elementos relevantes
const proyectos = document.querySelectorAll('.box');
const filtroTodos = document.getElementById('filtro-todos');
const filtroProyecto1 = document.getElementById('filtro-proyecto1');
const filtroProyecto2 = document.getElementById('filtro-proyecto2');
const filtroProyecto3 = document.getElementById('filtro-proyecto3');
// Agrega más filtros si es necesario

// Función para mostrar proyectos filtrados
function mostrarProyectos(filtro) {
    // Ocultar todos los proyectos
    proyectos.forEach(proyecto => {
        proyecto.classList.remove('mostrar');
    });

    // Mostrar proyectos según el filtro seleccionado
    if (filtro === 'todos') {
        // Mostrar solo dos proyectos
        for (let i = 0; i < 2; i++) {
            proyectos[i].classList.add('mostrar');
        }
    } else {
        const filtroProyecto = `proyecto${filtro}`;
        const proyecto = document.querySelector(`.${filtroProyecto}`);
        proyecto.classList.add('mostrar');
    }
}

// Event listeners para los filtros
filtroTodos.addEventListener('click', () => mostrarProyectos('todos'));
filtroProyecto1.addEventListener('click', () => mostrarProyectos(1));
filtroProyecto2.addEventListener('click', () => mostrarProyectos(2));
filtroProyecto3.addEventListener('click', () => mostrarProyectos(3));
// Agrega más event listeners para los filtros si es necesario

// Mostrar proyectos iniciales
mostrarProyectos('todos');
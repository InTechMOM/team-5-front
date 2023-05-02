const filtro = document.getElementById('filtro_proyectos');
const proyectos = document.querySelectorAll('.caja');

filtro.addEventListener('change', () => {
    const valorFiltro = filtro.value;

    proyectos.forEach((proyecto) => {
        if (proyecto.classList.contains(valorFiltro) || valorFiltro === 'todos') {
            proyecto.style.display = 'block';
        } else {
            proyecto.style.display = 'none';
        }
    });
});
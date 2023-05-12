    // Obtén una referencia a los botones de evaluación
    var evaluacion1Btn = document.getElementById("evaluacion1");
    var evaluacion2Btn = document.getElementById("evaluacion2");

    // Agrega un evento de clic a los botones
    evaluacion1Btn.addEventListener("click", abrirPopup);
    evaluacion2Btn.addEventListener("click", abrirPopup);

    // Función para abrir la ventana emergente
    function abrirPopup() {
        // Abre la ventana emergente con el contenido deseado
        window.open("popupevaluacion.html", "popup", "width=1100,height=180");
    }
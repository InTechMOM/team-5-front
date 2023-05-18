function generarGrafico() {
    // ...

    // Variables para almacenar las opciones seleccionadas
    const opcionesLista1 = [];
    const opcionesLista2 = [];
    const opcionesLista3 = [];
    const opcionesLista4 = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            // Verifica el nombre del checkbox y agrega el valor a la lista correspondiente
            if (checkbox.name === 'condiciones[]') {
                opcionesLista1.push(checkbox.value);
            } else if (checkbox.name === 'otraLista[]') {
                opcionesLista2.push(checkbox.value);
            } else if (checkbox.name === 'otraListaMas[]') {
                opcionesLista3.push(checkbox.value);
            } else if (checkbox.name === 'yOtraListaMas[]') {
                opcionesLista4.push(checkbox.value);
            }
        }
    });

    // Puedes hacer lo que desees con las opciones seleccionadas, como almacenarlas en variables o enviarlas a un servidor
    console.log('Opciones Lista 1:', opcionesLista1);
    console.log('Opciones Lista 2:', opcionesLista2);
    console.log('Opciones Lista 3:', opcionesLista3);
    console.log('Opciones Lista 4:', opcionesLista4);

    // ...
}
 // Genera el gráfico cuando se haga clic en el botón "Guardar"
 const btnGuardar = document.querySelector('.formulario__btn');
 btnGuardar.addEventListener('click', generarGrafico);
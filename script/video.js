function agregarVideo() {
  const link = document.getElementById('youtube-link').value;
  
  // Expresión regular para validar enlaces de YouTube
  const regex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  
  // Si el enlace es válido
  if (regex.test(link)) {
    // Extraemos el ID del video
    const videoID = link.split('v=')[1];
    
    // Creamos el iframe para insertar el video en la página
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoID}`);
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('frameborder', '0');
    
    // Insertamos el iframe en la página
    const container = document.getElementById('video-container');
    container.innerHTML = '';
    container.appendChild(iframe);
  } else {
    // Si el enlace no es válido, mostramos un mensaje de error
    Swal.fire('Por favor, ingresa un enlace de YouTube válido');
  }
}
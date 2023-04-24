const form = document.querySelector('form');
const correo = document.querySelector('#correo');
const btnProfesor = document.querySelector('#btn-profesor');
const btnEstudiante = document.querySelector('#btn-estudiante');

correo.focus();

form.addEventListener('click', function(e) {
  e.preventDefault();
  const correoValue = correo.value;

  // Validar correo electrónico
  if (!isValidEmail(correoValue)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  // Redireccionar a la página correspondiente
  if (e.target === btnProfesor && correoValue === 'm@gmail.com') {
    window.location.href = './page/perfilprofesor.html';
  } else if (e.target === btnEstudiante) {
    window.location.href = './page/perfilEstudiante.html';
  }
});

function isValidEmail(email) {

  // Expresión regular para validar correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
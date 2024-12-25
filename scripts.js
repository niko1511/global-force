
document.addEventListener("DOMContentLoaded", () => {
  console.log("GlobalForce: El sitio está listo para organizar tu vida laboral.");
});

function loadPage(page) {
  // Usamos fetch para cargar el contenido
  fetch(page)
      .then(response => {
          if (!response.ok) {
              throw new Error('Error al cargar la página.');
          }
          return response.text();
      })
      .then(html => {
          // Actualiza el contenido de la página
          document.getElementById('content').innerHTML = html;

          // Actualiza la URL sin recargar la página
          history.pushState(null, '', page);
      })
      .catch(error => {
          document.getElementById('content').innerHTML = '<h1>Error</h1><p>No se pudo cargar la página.</p>';
          console.error(error);
      });
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
  const content = document.getElementById('content');
  content.style.marginLeft = sidebar.classList.contains('active') ? '220px' : '0';
}

// Opcional: Manejo de retroceso (cuando el usuario navega con el botón de atrás del navegador)
window.addEventListener('popstate', () => {
  // Aquí puedes recargar el contenido desde la URL actual si lo deseas
  loadPage(location.pathname); // O usar una lógica personalizada
});


  // Función para ofuscar el correo y mostrarlo en el formulario
  function obfuscateEmail() {
    const email = 'globalforceschedule@gmail.com'; // Correo original
    const obfuscatedEmail = email.replace('@', '[at]').replace('.', '[dot]');
    document.getElementById('beta-email').textContent = obfuscatedEmail;
}

// Llamada a la función cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", obfuscateEmail);


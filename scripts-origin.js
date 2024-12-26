document.addEventListener("DOMContentLoaded", () => {
    console.log("GlobalForce: El sitio está listo para organizar tu vida laboral.");
     // Cargar home.html automáticamente cuando la página se cargue
     loadPage('home.html');

     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;
 
     const subject = encodeURIComponent('Mensaje de contacto de ' + name);
     const body = encodeURIComponent('Nombre: ' + name + '\nEmail: ' + email + '\n\nMensaje:\n' + message);
 
     // Ocultar el correo en el código fuente
     const recipient = 'globalforceschedule@gmail.com'; 
     const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
     window.location.href = mailtoLink;
     
});

// Escucha todos los clics en los enlaces con la clase "load-link"
document.querySelectorAll('.load-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el navegador siga el enlace y modifique la URL
    const page = this.getAttribute('href'); // Obtén el valor del atributo href
    loadPage(page); // Llama a tu función para cargar la página
  });
});

   
    function loadPage(page) {
        fetch(page)
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al cargar la página.');
            }
            return response.text();
          })
          .then(html => {
            document.getElementById('content').innerHTML = html;
            closeSidebar();

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

    function closeSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.remove('active');
      const content = document.getElementById('content');
      content.style.marginLeft = '0';
    }


 



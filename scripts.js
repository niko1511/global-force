// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("GlobalForce: El sitio está listo para organizar tu vida laboral.");
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

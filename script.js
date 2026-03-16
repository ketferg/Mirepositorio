// script.js - Carga los componentes HTML

// Función para cargar componentes HTML
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error cargando el componente:', error);
        });
}

// Cargar navbar y footer cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('navbar-container', 'navbar.html');
    loadComponent('footer-container', 'footer.html');
    
    // Smooth scroll para los enlaces del navbar
    setTimeout(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }, 500); // Pequeño retraso para asegurar que el navbar esté cargado
});
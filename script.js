// script.js - Carga los componentes HTML y agrega soporte offline (file://)
const COMPONENT_TEMPLATES = {
    navbar: `
<nav class="navbar navbar-expand-lg" style="background-color: #122620; border-bottom: 3px solid #D6AD60; padding: 20px 0;">
    <div class="container">
        <a class="navbar-brand" href="index.html" style="font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; color: #D6AD60;">
            OXFORD <span style="color: #F4EBD0; font-size: 0.8rem; display: block;">LEGAL & COMMERCIAL</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="index.html" style="color: #F4EBD0;">INICIO</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" style="color: #F4EBD0;" data-bs-toggle="dropdown">PRODUCTOS</a>
                    <ul class="dropdown-menu" style="background-color: #122620; border: 1px solid #D6AD60;">
                        <li><a class="dropdown-item" href="producto-inyectores.html" style="color: #F4EBD0;">Limpiador de Inyectores PRO</a></li>
                        <li><a class="dropdown-item" href="producto-combustion.html" style="color: #F4EBD0;">Tratamiento de Combustión</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="especificaciones.html" style="color: #F4EBD0;">ESPECIFICACIONES</a></li>
                <li class="nav-item"><a class="nav-link" href="#contacto" style="color: #F4EBD0;">CONTACTO</a></li>
            </ul>
        </div>
    </div>
</nav>
`,
    footer: `
<footer style="background-color: #122620; color: #F4EBD0; padding: 60px 0 30px; border-top: 3px solid #D6AD60;" id="contacto">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-4">
                <h5 style="color: #D6AD60; font-family: 'Playfair Display', serif;">OXFORD</h5>
                <p style="color: #F4EBD0;">Tecnología avanzada para la optimización de la combustión y el cuidado del motor.</p>
                <div>
                    <a href="#" style="color: #D6AD60; font-size: 1.5rem; margin-right: 15px;"><i class="bi bi-facebook"></i></a>
                    <a href="#" style="color: #D6AD60; font-size: 1.5rem; margin-right: 15px;"><i class="bi bi-instagram"></i></a>
                    <a href="#" style="color: #D6AD60; font-size: 1.5rem;"><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <h5 style="color: #D6AD60;">CONTACTO</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><i class="bi bi-geo-alt me-2" style="color: #D6AD60;"></i> <!-- CAMBIAR: Tu dirección aquí --></li>
                    <li class="mb-2"><i class="bi bi-telephone me-2" style="color: #D6AD60;"></i> <!-- CAMBIAR: Tu teléfono aquí --></li>
                    <li class="mb-2"><i class="bi bi-envelope me-2" style="color: #D6AD60;"></i> <!-- CAMBIAR: Tu email aquí --></li>
                </ul>
            </div>
            <div class="col-lg-4 mb-4">
                <h5 style="color: #D6AD60;">HORARIO</h5>
                <p>Lunes a Viernes: 9:00 - 18:00<br>Sábados: 9:00 - 13:00</p>
            </div>
        </div>
        <div class="text-center pt-4" style="border-top: 1px solid #B68D40;">
            <p style="color: #F4EBD0;">&copy; 2025 OXFORD Legal & Commercial. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>
`
};

function loadComponent(elementId, filePath, fallbackHtml) {
    const container = document.getElementById(elementId);
    if (!container) return;

    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`status ${response.status}`);
            return response.text();
        })
        .then(data => {
            container.innerHTML = data;
        })
        .catch(() => {
            // Si no se puede cargar (por ejemplo, file:// o servidor ausente), usa el HTML embebido.
            container.innerHTML = fallbackHtml;
        });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadComponent('navbar-container', 'navbar.html', COMPONENT_TEMPLATES.navbar);
    loadComponent('footer-container', 'footer.html', COMPONENT_TEMPLATES.footer);
    setupSmoothScroll();
});
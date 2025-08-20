document.addEventListener('DOMContentLoaded', function() {
    // Modal de contacto
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.modal .close');
    const contactoBtn = document.querySelector('.BotonBarraSuperior.Contacto');

    if(contactoBtn) {
        contactoBtn.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    }

    if(closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

 // Carrusel de imagen principal
    const carrusel = document.querySelector('.ImagenPrincipalCarrusel');
    if (carrusel) {
        const imagenes = carrusel.querySelectorAll('.ImagenPrincipal');
        let actual = 0;
        imagenes.forEach((img, i) => img.style.display = i === 0 ? 'block' : 'none');
        setInterval(() => {
            imagenes[actual].style.display = 'none';
            actual = (actual + 1) % imagenes.length;
            imagenes[actual].style.display = 'block';
        }, 5000);
    }



    // Scroll al principio al hacer clic en el botón de inicio
    const inicioBtn = document.querySelector('.BotonBarraSuperior.Inicio');
    if (inicioBtn) {
        inicioBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

// Scroll a Planteles al hacer clic en el botón Planteles
const plantelesBtn = document.querySelector('.BotonBarraSuperior.Planteles');
const plantelesH2 = document.getElementById('planteles');
if (plantelesBtn && plantelesH2) {
    plantelesBtn.addEventListener('click', function() {
        const barra = document.querySelector('.BarraSuperior');
        const barraHeight = barra ? barra.offsetHeight : 0;
        const espacioExtra = 15;
        const y = plantelesH2.getBoundingClientRect().top + window.scrollY - barraHeight - espacioExtra;
        window.scrollTo({ top: y, behavior: 'smooth' });
    });
}
    // Scroll a Fixtures al hacer clic en el botón Fixtures
    const fixturesBtn = document.querySelector('.BotonBarraSuperior.Fixtures');
    const fixturesH2 = document.getElementById('fixtures');
    if (fixturesBtn && fixturesH2) {
        fixturesBtn.addEventListener('click', function() {
            const barra = document.querySelector('.BarraSuperior');
            const barraHeight = barra ? barra.offsetHeight : 0;
            const espacioExtra = 15;
            const y = fixturesH2.getBoundingClientRect().top + window.scrollY - barraHeight - espacioExtra;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    }
    // Scroll a Partidos en Directo al hacer clic en el botón correspondiente
    const partidosBtn = document.querySelector('.BotonBarraSuperior.PartidosEnDirectoBoton');
    const partidosSection = document.getElementById('seccionpartidosendirecto');
    if (partidosBtn && partidosSection) {
        partidosBtn.addEventListener('click', function() {
            const barra = document.querySelector('.BarraSuperior');
            const barraHeight = barra ? barra.offsetHeight : 0;
            const espacioExtra = 15;
            const ajusteExtra = 70;
            const y = partidosSection.getBoundingClientRect().top + window.scrollY - barraHeight - espacioExtra + ajusteExtra;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    }
});
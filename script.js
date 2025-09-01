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

    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    alert("Esta página está hecha para ser vista en una computadora.\nAbrirla en un celular puede afectar las proporciones.");
  } 


    const barra = document.querySelector(".BarraSuperior")
    const primeraSeccion = document.querySelector(".PrimeraSeccion")
    primeraSeccion.style.paddingTop = barra.offsetHeight + "px";



    const carrusel = document.querySelector('.carrusel');
    if (carrusel) {
    const imagenes = carrusel.querySelectorAll('.ImagenCarrusel');
    let actual = 0;

    // mostrar solo la primera
    imagenes[actual].classList.add("active");

    setInterval(() => {
        imagenes[actual].classList.remove("active");
        actual = (actual + 1) % imagenes.length;
        imagenes[actual].classList.add("active");
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

        // Lógica para cambiar de plantel
    const botonesPlanteles = document.querySelectorAll('.BotonPlanteles');
    const contenidosPlanteles = document.querySelectorAll('.PlantelesContenido');

    botonesPlanteles.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            contenidosPlanteles.forEach(c => c.classList.remove('active'));
            contenidosPlanteles[index].classList.add('active');
        });
    });














});
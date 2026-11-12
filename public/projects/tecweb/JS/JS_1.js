    // Añadir evento de desplazamiento para cambiar el fondo del header
    window.addEventListener('scroll', function() {
        var header = document.getElementById('main-header');
        var scrollPosition = window.scrollY;
        var log = document.getElementById('logo-header');
        var lema = document.getElementById('texto-header');
        var btnHeader = document.getElementById('boton-header');
        var lema = this.document.getElementById("lema")

        if (scrollPosition > 50) {
            header.classList.add('active');
            log.classList.add('active');
            lema.classList.add('active');
            btnHeader.classList.add('active');
            lema.classList.add('active');

        } else {
            header.classList.remove('active');;
            log.classList.remove('active');
            lema.classList.remove('active');
            btnHeader.classList.remove('active');
            lema.classList.remove('active');

        }
    });

    // Para abrir y cerrar el menú lateral con los botones
    const open_btn = document.querySelector('#boton-header');
    const close_btn = document.querySelector('#close-btn');
    const nav = document.querySelectorAll('.menu-lateral');

    open_btn.addEventListener('click', () => {
        nav.forEach(nav_el => nav_el.classList.add('visible'));
    })

    close_btn.addEventListener('click', () => {
        nav.forEach(nav_el => nav_el.classList.remove('visible'));
    })

    // Para que los enlaces cambien de color cuando el ratón está encima
    var enlaces = document.getElementsByClassName('enlaces');

    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('mouseover', function() {
            this.style.color = 'rgb(0, 100, 107)';
            this.style.fontSize = 'larger'
        });
        enlaces[i].addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.fontSize = '17px'
        })
    }

    var imagenes_Faraday = ['../Fotos/Faraday.jpg', '../Fotos/baño_Faraday.jpg', '../Fotos/cocina_Faraday.jpg', '../Fotos/hab_Faraday.jpg', '../Fotos/hab2_Faraday.jpg'];
    var imagenes_Alondra = ['../Fotos/Alondra.jpg', '../Fotos/extra_Alondra.jpg', '../Fotos/terraza_Alondra.jpg', '../Fotos/cocina_Alondra.jpg', '../Fotos/salon_Alondra.jpg'];
    var imagenes_Sinán = ['../Fotos/Sinán.jpg', '../Fotos/extra_Sinán.jpg', '../Fotos/terraza_Sinán.jpg', '../Fotos/terraza2_Sinán.jpg', '../Fotos/comedor_Sinán.jpg'];
    var imagenes_Eneo = ['../Fotos/Eneo.jpg', '../Fotos/cocina_Eneo.jpg', '../Fotos/hab_Eneo.jpg', '../Fotos/hab2_Eneo.jpg', '../Fotos/baño_Eneo.jpg'];
    var imagenes_Freya = ['../Fotos/Freya.jpg','../Fotos/parque_Freya.jpg', '../Fotos/salon_Freya.jpg', '../Fotos/cocina_Freya.jpg', '../Fotos/multi_Freya.jpg'];
    var imagenes_LaMaquia = ['../Fotos/LaMaquia.jpg','../Fotos/cocina_LaMaquia.jpg', '../Fotos/hab_LaMaquia.jpg', '../Fotos/hab2_LaMaquia.jpg', '../Fotos/salon_LaMaquia.jpg'];
    var imagenes_Veranda = ['../Fotos/Veranda.jpg','../Fotos/baño_Veranda.jpg', '../Fotos/cocina_Veranda.jpg', '../Fotos/hab_Veranda.jpg', '../Fotos/salon_Veranda.jpg'];
    var imagenes_EtheriaGardens = ['../Fotos/EtheriaGardens.jpg','../Fotos/hab2_EG.jpg', '../Fotos/salon_EG.jpg', '../Fotos/hab1_EG.jpg', '../Fotos/cocina_EG.jpg'];
    var imagenes_Caelia = ['../Fotos/Caelia.jpg','../Fotos/baño_Caelia.jpg', '../Fotos/hab2_Caelia.jpg', '../Fotos/hab_Caelia.jpg', '../Fotos/salon_Caelia.jpg'];
    var imagenes_Cupre = ['../Fotos/Cupre.jpg','../Fotos/baño_Cupre.jpg', '../Fotos/hab_Cupre.jpg', '../Fotos/cocina_Cupre.jpg', '../Fotos/salon_Cupre.jpg'];
    var imagenes_Zimara = ['../Fotos/Zimara.jpg','../Fotos/baño_Zimara.jpg', '../Fotos/hab2_Zimara.jpg', '../Fotos/hab_Zimara.jpg', '../Fotos/salon_Zimara.jpg'];
    var imagenes_Maranta = ['../Fotos/Maranta.jpg','../Fotos/baño_Maranta.jpg', '../Fotos/hab_Maranta.jpg', '../Fotos/salon_Maranta.jpg', '../Fotos/comedor_Maranta.jpg'];
    var imagenes_Elion = ['../Fotos/Elion.jpg','../Fotos/baño_Elion.jpg', '../Fotos/hab_Elion.jpg', '../Fotos/salon_Elion.jpg', '../Fotos/cocina_Elion.jpg'];
    var imagenes_Gumiel = ['../Fotos/Gumiel.jpg','../Fotos/cocina_Gumiel.jpg', '../Fotos/hab_Gumiel.jpg', '../Fotos/hab2_Gumiel.jpg', '../Fotos/salon_Gumiel.jpg'];
    var imagenes_Anzio = ['../Fotos/Anzio.jpg','../Fotos/baño_Anzio.jpg', '../Fotos/hab_Anzio.jpg', '../Fotos/cocina_Anzio.jpg', '../Fotos/terraza_Anzio.jpg'];

    var imagenes_av_colon = ['../Fotos/av_Colon.jpg','../Fotos/cocina_colon.jpg', '../Fotos/baño_colon.jpg', '../Fotos/hab1_colon.jpg','../Fotos/hab2_colon.jpg'];
    var imagenes_casa_Tav = ['../Fotos/casa_Tav.jpg','../Fotos/cocina_Tavernes.jpg', '../Fotos/baño_Tavernes.jpg', '../Fotos/hab1_Tavernes.jpg', '../Fotos/hab2_Tavernes.jpg'];
    var imagenes_av_VicenteFerri = ['../Fotos/av_VicenteFerri.jpg','../Fotos/baño_VicenteFerri.jpg', '../Fotos/cocina_VicenteFerri.jpg', '../Fotos/hab_VicenteFerri.jpg', '../Fotos/hab2_VicenteFerri.jpg'];
    var imagenes_piso_Xeresa = ['../Fotos/piso_Xeresa.jpg','../Fotos/cocina_Xeresa.jpg', '../Fotos/baño_Xeresa.jpg', '../Fotos/salon_Xeresa.jpg', '../Fotos/hab1_Xeresa.jpg'];
    var imagenes_casa_Badajoz = ['../Fotos/casa_Badajoz.jpg','../Fotos/entrada_Badajoz.jpg', '../Fotos/hab1_Badajoz.jpg', '../Fotos/hab2_Badajoz.jpg','../Fotos/terraza_Badajoz.jpg'];
    var imagenes_casa_Logroño = ['../Fotos/casa_Logroño.jpg','../Fotos/cocina_Logroño.jpg', '../Fotos/baño_Logroño.jpg', '../Fotos/hab1_Logroño.jpg', '../Fotos/hab2_Logroño.jpg'];
    var imagenes_piso_Alicante = ['../Fotos/piso_Alicante.jpg','../Fotos/cocina_Alicante.jpg', '../Fotos/baño_Alicante.jpg', '../Fotos/hab1_Alicante.jpg', '../Fotos/hab2_Alicante.jpg'];
    var imagenes_piso_Lerida = ['../Fotos/piso_Lerida.jpg','../Fotos/baño_Lleida.jpg', '../Fotos/hab1_Lleida.jpg', '../Fotos/hab2_Lleida.jpg', '../Fotos/hab3_Lleida.jpg'];
    var imagenes_piso_Sevilla = ['../Fotos/piso_Sevilla.jpg','../Fotos/baño_Sevilla.jpg', '../Fotos/hab1_Sevilla.jpg', '../Fotos/hab2_Sevilla.jpg', '../Fotos/hab3_Sevilla.jpg'];

    var casaImgs = [];
    var imagenActualIndex = 0;

    function seleccionarImagenes(element) {
        casaImgs = [];

        if (element.classList.contains('casa-Faraday')) {
            var imagenesArray = imagenes_Faraday;
        } else if (element.classList.contains('casa-Alondra')) {
            var imagenesArray = imagenes_Alondra;
        } else if (element.classList.contains('casa-Sinán')) {
            var imagenesArray = imagenes_Sinán;
        } else if (element.classList.contains('casa-Eneo')) {
            var imagenesArray = imagenes_Eneo;
        } else if (element.classList.contains('casa-Freya')) {
            var imagenesArray = imagenes_Freya;
        } else if (element.classList.contains('casa-LaMaquia')) {
            var imagenesArray = imagenes_LaMaquia;
        } else if (element.classList.contains('casa-Veranda')) {
            var imagenesArray = imagenes_Veranda;
        } else if (element.classList.contains('casa-EtheriaGardens')) {
            var imagenesArray = imagenes_EtheriaGardens;
        } else if (element.classList.contains('casa-Caelia')) {
            var imagenesArray = imagenes_Caelia;
        } else if (element.classList.contains('casa-Cupre')) {
            var imagenesArray = imagenes_Cupre;
        } else if (element.classList.contains('casa-Zimara')) {
            var imagenesArray = imagenes_Zimara;
        } else if (element.classList.contains('casa-Maranta')) {
            var imagenesArray = imagenes_Maranta;
        } else if (element.classList.contains('casa-Elion')) {
            var imagenesArray = imagenes_Elion;
        } else if (element.classList.contains('casa-Gumiel')) {
            var imagenesArray = imagenes_Gumiel;
        } else if (element.classList.contains('casa-Anzio')) {
            var imagenesArray = imagenes_Anzio;
        } else if (element.classList.contains('casa-Colon')) {
            var imagenesArray = imagenes_av_colon;
        } else if (element.classList.contains('casa-Tav')) {
            var imagenesArray = imagenes_casa_Tav;
        } else if (element.classList.contains('casa-VicenteFerri')) {
            var imagenesArray = imagenes_av_VicenteFerri;
        } else if (element.classList.contains('casa-Xeresa')) {
            var imagenesArray = imagenes_piso_Xeresa;
        } else if (element.classList.contains('casa-Badajoz')) {
            var imagenesArray = imagenes_casa_Badajoz;
        } else if (element.classList.contains('casa-Logroño')) {
            var imagenesArray = imagenes_casa_Logroño;
        } else if (element.classList.contains('casa-Alicante')) {
            var imagenesArray = imagenes_piso_Alicante;
        } else if (element.classList.contains('casa-Lerida')) {
            var imagenesArray = imagenes_piso_Lerida;
        } else if (element.classList.contains('casa-Sevilla')) {
            var imagenesArray = imagenes_piso_Sevilla;
        }

        casaImgs.push(imagenesArray);
        imagenActualIndex = 0;
    }

    var imagenGrande = document.getElementById('imagen-grande');
    var contador = document.getElementById("contador")
    

    function navegarMas() {
        if (casaImgs.length > 0) {
            imagenActualIndex = (imagenActualIndex + 1) % casaImgs[0].length;
            imagenGrande.src = casaImgs[0][imagenActualIndex];
            contador.innerHTML = imagenActualIndex + 1 + "/" + casaImgs[0].length;
        }
        cambiarImagen()
    }

    function navegarMenos() {
        if (casaImgs.length > 0) {
            imagenActualIndex = (imagenActualIndex - 1 + casaImgs[0].length) % casaImgs[0].length;
            imagenGrande.src = casaImgs[0][imagenActualIndex];
            contador.innerHTML = imagenActualIndex+1 + "/" + casaImgs[0].length;
        }
        cambiarImagen()
    }

    // Cambiar la imagen
    function cambiarImagen() {
        document.getElementById('imagen-grande').style.opacity = 0;
        setTimeout(function () {
            document.getElementById('imagen-grande').src = casaImgs[0][imagenActualIndex];
            document.getElementById('imagen-grande').style.opacity = 1;
        }, 300);
    }

    // Imagenes en grande
    function img_grande(element) {
        seleccionarImagenes(element);
        imagenGrande.src = casaImgs[imagenActualIndex][0];
        document.querySelector('.imagen-fondo').classList.add('active');
        contador.innerHTML = "1/" + casaImgs[0].length;
    }

    function cerrar_imagen() {
        document.querySelector('.imagen-fondo').classList.remove('active');
    }


    //Blog: Hacer aparecer y desaparecer elementos
    var bot = document.getElementById('boton');
    bot.onclick = accion; /*Con esta linea indicamos que al pulsar el boton 'boton'
    se accione la funcion que hace que los elementos, inicialmente ocultos, aparezcan*/

    function accion() {
        var oculto = document.getElementById("oculto");
        if (oculto.style.display === "none") {
            oculto.style = ".group";
            bot.innerHTML = "Cargar menos"

        }
        else {
            oculto.style.display = "none";
            bot.innerHTML = "Cargar más"
        }
    }

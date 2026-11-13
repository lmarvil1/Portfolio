
export const projects = [
  {
    id: 1,
    slug: 'control-horario',
    title: 'Aplicación de control horario',
    category: 'software',
    type: 'Trabajo de Fin de Grado · En desarrollo',
    description:
      'Aplicación multiplataforma para gestionar el registro de jornada, vacaciones, incidencias, justificantes y nóminas de trabajadores. Desarrollada para una empresa real.',  
    objective:
      'Digitalizar y centralizar el registro de jornada y las gestiones laborales de una empresa, facilitando tanto el trabajo diario de los empleados como las tareas de administración.',
    about:
      'Aplicación multiplataforma desarrollada como Trabajo de Fin de Grado para una empresa real. Cuenta con diferentes perfiles de usuario y permite gestionar fichajes, vacaciones, incidencias, justificantes y nóminas desde una misma plataforma.',
    features: [
      'Registro de entrada y salida de trabajadores',
      'Consulta del historial y cálculo de horas extraordinarias',
      'Fichajes sin conexión y sincronización automática',
      'Gestión de vacaciones y calendario laboral',
      'Registro y seguimiento de incidencias',
      'Gestión de justificantes y documentos',
      'Gestión de nóminas con acceso individual',
      'Sistema de notificaciones',
      'Gestión de empleados, usuarios y permisos',
      'Exportación de registros en PDF y CSV',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Authentication',
      'Cloud Firestore',
    ],
    icon: 'clock',
    images: [
      {
        src: '/projects/control-horario/inicio.png',
        alt: 'Pantalla principal de registro horario',
        title: 'Registro de jornada',
      },
      {
        src: '/projects/control-horario/historial.png',
        alt: 'Historial mensual de fichajes',
        title: 'Historial de fichajes',
      },
      {
        src: '/projects/control-horario/noconex.png',
        alt: 'Historial de fichajes sin conexión',
        title: 'Fichajes sin conexión',
      },
      {
        src: '/projects/control-horario/pdf-historial.png',
        alt: 'Informe PDF de registros horarios',
        title: 'Exportación de informes',
      },
      {
        src: '/projects/control-horario/incidencias.png',
        alt: 'Listado de incidencias del trabajador',
        title: 'Mis incidencias',
      },
      {
        src: '/projects/control-horario/vacaciones.png',
        alt: 'Solicitudes de vacaciones del trabajador',
        title: 'Gestión de vacaciones',
      },
      {
        src: '/projects/control-horario/panel-admin.png',
        alt: 'Panel de administración de la aplicación',
        title: 'Panel de administración',
      },
      {
        src: '/projects/control-horario/gestion-incidencias.png',
        alt: 'Gestión de incidencias del administrador',
        title: 'Administración de incidencias',
      },
      {
        src: '/projects/control-horario/calendario-vacaciones.png',
        alt: 'Calendario de vacaciones de empleados',
        title: 'Calendario de vacaciones',
      },
      {
        src: '/projects/control-horario/justificantes.png',
        alt: 'Pantalla de justificantes del trabajador',
        title: 'Gestión de justificantes',
      },
      {
        src: '/projects/control-horario/nominas.png',
        alt: 'Gestión de nóminas desde el administrador',
        title: 'Gestión de nóminas',
      },
      {
        src: '/projects/control-horario/notis.png',
        alt: 'Sistema de notificaciones de la aplicación',
        title: 'Notificaciones',
      },
    ],
  },

  {
    id: 2,
    slug: 'gestion-empresarial',
    title: 'Gestión empresarial',
    category: 'software',
    type: 'Proyecto independiente',

    description:
      'Desarrollo de dos aplicaciones multiplataforma para digitalizar la gestión de albaranes y presupuestos de una empresa.',

    objective:
      'Digitalizar y simplificar diferentes procesos administrativos de una empresa mediante dos aplicaciones independientes, facilitando la creación, organización y seguimiento de albaranes y presupuestos.',

    about:
      'Proyecto de digitalización empresarial formado por dos aplicaciones independientes desarrolladas con Flutter y Firebase para una empresa real. La primera permite crear y gestionar albaranes y sincronizarlos con Google Drive. La segunda está orientada a la elaboración y gestión de presupuestos, con cálculo automático de importes e IVA  y seguimiento de estados. Ambas están adaptadas para su utilización desde dispositivos móviles y ordenadores.',

    features: [
      'Creación y gestión de albaranes y presupuestos',
      'Incorporación de fotografías y firma de albaranes',
      'Generación automática de documentos PDF',
      'Cálculo automático de importes e IVA en los presupuestos',
      'Numeración de documentos y control de duplicados',
      'Seguimiento del estado de los presupuestos: aceptado, rechazado y realizado',
      'Panel de administración con filtros y exportaciones',
      'Sincronización de documentos con Google Drive',
      'Creación de albaranes sin conexión a Internet y sincronización posterior',
      'Interfaces adaptadas a dispositivos móviles y ordenadores',
    ],

    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'Google Drive',
    ],

    icon: 'files',
  },

  {
    id: 4,
    slug: 'postproduccion-audiovisual',
    title: 'Edición y postproducción audiovisual',
    category: 'multimedia',
    type: 'Proyecto académico · 5 prácticas',
    description:
      'Conjunto de cinco proyectos audiovisuales realizados con Blender, aplicando técnicas de edición de vídeo, seguimiento de movimiento, integración de objetos 3D y composición digital.',

    objective:
      'Explorar diferentes técnicas de edición y postproducción audiovisual mediante la creación de composiciones que combinan vídeo real, elementos digitales y efectos visuales.',

    about:
      'Proyecto académico desarrollado en la asignatura de Edición y Postproducción Audiovisual. Incluye cinco prácticas realizadas con Blender, desde la creación de un anuncio publicitario hasta la integración y sustitución de objetos 3D en grabaciones reales.',

    features: [
      'Montaje y edición de vídeo publicitario',
      'Edición y mezcla de audio',
      'Seguimiento de movimiento de un punto',
      'Tracking de cuatro puntos y sustitución de pantallas',
      'Tracking de cámara e integración de objetos 3D',
      'Tracking de objetos y sustitución mediante máscaras',
      'Composición digital y ajustes de iluminación',
    ],

    technologies: [
      'Blender',
      'Video Sequencer',
      'Motion Tracking',
      'Compositing',
      'CGI',
    ],

    practices: [
      {
        title: 'Edición de vídeo publicitario',
        subtitle: 'Práctica 1 · Edición de vídeo',
        description:
          'Creación de un anuncio del perfume ficticio ÉCLAT mediante vídeos generados con inteligencia artificial, montaje de clips, música y efectos sonoros.',
        video: '/projects/postau/Práctica 1.mp4',
      },
      {
        title: 'Tracking de un punto',
        subtitle: 'Práctica 2 · Tracking de un punto',
        description:
          'Integración de una mariposa 3D sobre la punta de un dedo, utilizando tracking para que acompañe su movimiento durante la grabación.',
        video: '/projects/postau/Práctica 2.mp4',
      },
      {
        title: 'Tracking de cuatro puntos',
        subtitle: 'Práctica 3 · Tracking de cuatro puntos',
        description:
          'Sustitución del contenido de la pantalla de un iPad por una escena espacial, manteniendo la perspectiva y el movimiento originales.',
        video: '/projects/postau/Práctica 3.mp4',
      },
      {
        title: 'Tracking de cámara',
        subtitle: 'Práctica 4 · Tracking de cámara',
        description:
          'Integración de una araña 3D sobre un edificio real mediante seguimiento de cámara y ajustes de posición, escala e iluminación.',
        video: '/projects/postau/Práctica 4.mp4',
      },
      {
        title: 'Tracking de objeto',
        subtitle: 'Práctica 5 · Tracking de objeto',
        description:
          'Sustitución de un unicornio de peluche por un dragón 3D mediante tracking, máscaras, fondo limpio y composición digital.',
        video: '/projects/postau/Práctica 5.mp4',
      },
    ],

    icon: 'play',
  },

{
  id: 5,
  slug: 'findncook',
  title: 'FindNCook',
  category: 'software',
  type: 'Proyecto académico · Erasmus',
  description:
    'Aplicación móvil de cocina que permite descubrir recetas a partir de los ingredientes disponibles, organizar compras y utilizar un temporizador durante la preparación.',

  images: [
    {
      src: '/projects/findncook/1.png',
      alt: 'Captura 1 de FindNCook',
      title: 'Despensa',
    },
    {
      src: '/projects/findncook/2.png',
      alt: 'Captura 2 de FindNCook',
      title: 'Recetas',
    },
    {
      src: '/projects/findncook/3.png',
      alt: 'Captura 3 de FindNCook',
      title: 'Receta seleccionada',
    },
    {
      src: '/projects/findncook/4.png',
      alt: 'Captura 4 de FindNCook',
      title: 'Temporizador',
    },
    {
      src: '/projects/findncook/5.png',
      alt: 'Captura 5 de FindNCook',
      title: 'Colecciones',
    },
    {
      src: '/projects/findncook/6.png',
      alt: 'Captura 6 de FindNCook',
      title: 'Lista de la compra',
    },
  ],

  objective:
    'Facilitar la planificación de comidas y el aprovechamiento de los ingredientes disponibles, reuniendo diferentes herramientas de cocina en una única aplicación.',

  about:
    'Aplicación desarrollada en equipo durante una estancia Erasmus en el Politecnico di Milano. Combina búsqueda de recetas mediante una API externa, gestión de ingredientes, listas de la compra, recetas favoritas y herramientas de apoyo durante la preparación.',

  features: [
    'Búsqueda y selección de ingredientes',
    'Descubrimiento de recetas según los ingredientes disponibles',
    'Consulta de recetas e instrucciones de preparación',
    'Gestión de recetas favoritas',
    'Creación y gestión de listas de la compra',
    'Temporizador de cocina con avisos sonoros',
    'Almacenamiento local de datos y preferencias',
    'Navegación entre diferentes secciones de la aplicación',
  ],

  technologies: [
    'Flutter',
    'Dart',
    'Spoonacular API',
    'Hive',
    'SharedPreferences',
    'BLoC',
  ],

  icon: 'cooking-pot',
},

{
  id: 6,
  slug: 'tecweb',
  title: 'Javy’s Houses',
  category: 'software',
  type: 'Proyecto académico · Desarrollo web',

  description:
    'Sitio web sobre viviendas sostenibles y económicas, con diferentes secciones informativas, galería de imágenes, blog y página de contacto.',

  objective:
    'Diseñar y desarrollar un sitio web completo que permita consultar información sobre viviendas sostenibles y económicas mediante una navegación sencilla y organizada.',

  about:
    'Proyecto académico de desarrollo web realizado con HTML, CSS y JavaScript. La página cuenta con diferentes apartados dedicados a las viviendas sostenibles y económicas, además de una galería de imágenes, un blog y una sección de contacto. El sitio puede explorarse directamente desde el portfolio.',

  features: [
    'Diseño y maquetación de páginas web',
    'Navegación entre diferentes secciones',
    'Información sobre viviendas sostenibles y económicas',
    'Galería de imágenes',
    'Blog con artículos',
    'Página de contacto',
    'Interactividad mediante JavaScript',
  ],

  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
  ],

  website: '/projects/tecweb/Paginas/Pagina%20Principal.html',

  icon: 'house',
},


{
  id: 7,
  slug: 'saltaroo',
  title: 'Saltaroo',
  category: 'software',
  type: 'Proyecto académico · Proyecto multidisciplinar',

  description:
    'Aplicación de escritorio para analizar saltos verticales a partir de datos del acelerómetro de un móvil, visualizar parámetros físicos y consultar clasificaciones.',

  objective:
    'Desarrollar una aplicación capaz de procesar los datos registrados durante un salto vertical, calcular sus principales parámetros físicos y permitir comparar los resultados entre usuarios.',

  about:
    'Proyecto académico multidisciplinar desarrollado en Python. La aplicación procesa datos obtenidos mediante el acelerómetro de un smartphone para analizar saltos verticales y calcular magnitudes como la aceleración, la fuerza, la potencia, la velocidad y la altura alcanzada. Incluye una interfaz gráfica interactiva, representación de resultados mediante gráficas y un sistema de clasificación compartida mediante comunicación cliente-servidor.',

  features: [
    'Inicio de sesión mediante usuario y PIN',
    'Importación y procesamiento de datos del acelerómetro',
    'Identificación de puntos relevantes durante el salto',
    'Cálculo de aceleración, fuerza, potencia y velocidad',
    'Estimación de la altura alcanzada',
    'Visualización de gráficas de los parámetros físicos',
    'Comunicación cliente-servidor',
    'Envío de resultados y clasificación Top 10',
  ],

  technologies: [
    'Python',
    'Guizero',
    'Tkinter',
    'Matplotlib',
    'TCP/IP',
  ],

  images: [
    {
      src: '/projects/saltaroo/1.png',
      alt: 'Pantalla de inicio de sesión de Saltaroo',
      title: 'Inicio de sesión',
    },
    {
      src: '/projects/saltaroo/2.png',
      alt: 'Menú principal de Saltaroo',
      title: 'Menú principal',
    },
    {
      src: '/projects/saltaroo/3.png',
      alt: 'Formulario para introducir los datos del salto',
      title: 'Procesamiento de datos',
    },
    {
      src: '/projects/saltaroo/4.png',
      alt: 'Resultados físicos obtenidos del salto',
      title: 'Resultados del salto',
    },
    {
      src: '/projects/saltaroo/5.png',
      alt: 'Gráfica de aceleración del salto',
      title: 'Aceleración',
    },
    {
      src: '/projects/saltaroo/6.png',
      alt: 'Gráfica de fuerza del salto',
      title: 'Fuerza',
    },
    {
      src: '/projects/saltaroo/8.png',
      alt: 'Gráfica de velocidad del salto',
      title: 'Velocidad',
    },
    {
      src: '/projects/saltaroo/9.png',
      alt: 'Clasificación de los diez mejores saltos',
      title: 'Clasificación Top 10',
    },
  ],

  icon: 'activity',
},


{
  id: 8,
  slug: 'javacat',
  title: 'JavaCat',
  category: 'software',
  type: 'Proyecto académico · Aplicaciones y Usabilidad',

  description:
    'Aplicación Android que combina el cuidado de una mascota virtual con tres minijuegos interactivos.',

  objective:
    'Desarrollar una aplicación móvil interactiva que combine el cuidado de una mascota virtual con diferentes experiencias de juego, aplicando conocimientos de programación Android, diseño de interfaces y usabilidad.',

  about:
    'JavaCat es una aplicación Android desarrollada en equipo para la asignatura Aplicaciones y Usabilidad. El usuario debe cuidar de Java, un gato virtual cuya energía disminuye con el tiempo y puede recuperarse mediante la alimentación. La aplicación incorpora tres minijuegos con mecánicas diferentes, una interfaz visual de tonos rosas y pantallas de navegación, inicio de partida y resultados.',

  features: [
    'Cuidado de una mascota virtual con un sistema de energía',
    'Alimentación del gato para recuperar su energía',
    'Menú de selección de tres minijuegos',
    'Bricks: romper ladrillos controlando una plataforma y una pelota',
    'Drops: alimentar al gato dejando caer un pez desde un pájaro',
    'Shooter: controlar una nave espacial y combatir enemigos',
    'Pantallas de inicio, navegación y fin de partida',
    'Visualización de la puntuación obtenida',
  ],

  technologies: [
    'Java',
    'Android SDK',
    'XML',
    'Android Studio',
  ],

  images: [
    {
      src: '/projects/aplicu/1.png',
      alt: 'Pantalla principal de JavaCat con el gato virtual',
      title: 'Pantalla principal',
    },
    {
      src: '/projects/aplicu/2.png',
      alt: 'Menú de selección de minijuegos',
      title: 'Selección de minijuegos',
    },
    {
      src: '/projects/aplicu/3.png',
      alt: 'Pantalla de inicio de partida',
      title: 'Inicio de partida',
    },
    {
      src: '/projects/aplicu/4.png',
      alt: 'Pantalla de resultados con opciones para repetir o salir',
      title: 'Resultados',
    },
    {
      src: '/projects/aplicu/6.png',
      alt: 'Minijuego Bricks',
      title: 'Bricks',
    },
    {
      src: '/projects/aplicu/7.png',
      alt: 'Minijuego Shooter',
      title: 'Shooter',
    },
    {
      src: '/projects/aplicu/8.png',
      alt: 'Minijuego Drops',
      title: 'Drops',
    },
  ],

  icon: 'cat',
},


{
  id: 9,
  slug: 'filtermaster',
  title: 'FilterMaster',
  category: 'software',
  type: 'Proyecto académico · Imagen y Vídeo Digital',

  description:
    'Aplicación web de visión artificial que combina filtros interactivos, reconocimiento facial, detección de emociones y gestos y procesamiento de vídeo en tiempo real.',

  objective:
    'Desarrollar una aplicación web interactiva que integre diferentes técnicas de visión artificial y aprendizaje automático para reconocer rostros, emociones y gestos, y aplicar efectos visuales sobre el vídeo capturado por la cámara.',

  about:
    'Proyecto académico desarrollado en equipo para la asignatura Imagen y Vídeo Digital. FilterMaster integra diferentes filtros interactivos en una aplicación web creada con Python y Flask. Mediante el uso de OpenCV, MediaPipe, DeepFace y TensorFlow, permite analizar imágenes de la cámara en tiempo real, reconocer personas, detectar expresiones y gestos, dibujar sobre el vídeo y sustituir fondos. Además, se entrenaron y compararon tres modelos de reconocimiento facial: EigenFaces, FisherFaces y LBPH.',

  features: [
    'Detección de emociones faciales con DeepFace',
    'Reconocimiento de gestos y efectos visuales',
    'Identificación de personas mediante reconocimiento facial',
    'Entrenamiento de modelos EigenFaces, FisherFaces y LBPH',
    'Dibujo en tiempo real mediante seguimiento de color',
    'Sustitución de fondos mediante segmentación',
    'Juego interactivo de preferencias de comida',
    'Aplicación de filtros gráficos sobre el rostro',
  ],

  technologies: [
    'Python',
    'Flask',
    'OpenCV',
    'MediaPipe',
    'DeepFace',
    'TensorFlow',
    'NumPy',
    'HTML',
    'JavaScript',
  ],

  images: [
  {
    src: '/projects/filtermaster/filtermaster.png',
    title: 'Interfaz de FilterMaster',
    alt: 'Aplicación web FilterMaster con cámara y selección de filtros interactivos',
  },
],

  icon: 'scan-face',
},

]

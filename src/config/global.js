export default {
  global: {
    componenteFormativo: 'Recolección de los requisitos del <em>software</em>',
    descripcionCurso: `Se expone la necesidad de realizar una correcta definición de los requisitos del <em>software</em> para que cubra las expectativas del cliente, cumpla con las definiciones de funcionalidad e interfaz enfocada al usuario. Se trabajan los fundamentos de recopilación de requisitos y la diferencia con la expectativa del cliente y reúne, además, la información para gestionar el proyecto de desarrollo, validando el alcance del producto final.`,
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: `Entendiendo los requisitos del negocio`,
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estudio de viabilidad del sistema y sus funcionalidades',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Recogida de requisitos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Herramientas y técnicas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Salidas y entregables',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas y técnicas para recolección de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Entrevistas con patrocinador y usuarios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de creatividad grupal - Lluvia de ideas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Cuestionarios y encuestas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Análisis de tareas y de dominio',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Fabricación del modelo prototipo',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Generación de documentación',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: `Entendiendo los requisitos del negocio`,
      referencia: `<em>Software</em> Engineering Coach. (2022). Serie 03: Ingeniería de <em>Requerimientos de Software</em> [video]. YouTube.`,
      tipo: 'Playlist de videos',
      link: `https://www.youtube.com/playlist?list=PLCVGhLzsMEq8-Q7Mrvq5Q6jrHo4nDJpod`,
    },
    {
      tema: `Entendiendo los requisitos del negocio`,
      referencia: `Wong, S. (2017). <i>Análisis y requerimientos de software: Manual autoformativo interactivo</i>. Universidad Continental de Huancayo.`,
      tipo: 'E-Book',
      link: `https://repositorio.continental.edu.pe/handle/20.500.12394/4281`,
    },
    {
      tema: `Entendiendo los requisitos del negocio`,
      referencia: `Mellado, R. (2020).<i> Requisitos de software</i> [video]. YouTube.`,
      tipo: 'Video',
      link: `https://youtu.be/yYvqBDkWyiU`,
    },
    {
      tema: `Herramientas y técnicas para recolección de requisitos`,
      referencia: `Varón Quimbayo, A. (2021).<i> Cómo crear un documento de especificación de requerimientos de software </i>[video]. YouTube.`,
      tipo: 'Video',
      link: `https://youtu.be/AotyBHVKp8I`,
    },
    {
      tema: `Herramientas y técnicas para recolección de requisitos`,
      referencia: `Marlés, M. (2020). 2. <i>Análisis de requerimientos</i> [video]. YouTube.`,
      tipo: 'Playlist de videos',
      link: `https://www.youtube.com/playlist?list=PLRpLWFRnRWV0qnLWLwSVNPGUcSjlVfDNE`,
    },
    {
      tema: `Herramientas y técnicas para recolección de requisitos`,
      referencia: `Universidad Autónoma de México. (2022). <i>Análisis de requisitos</i>. Studocu.`,
      tipo: 'Curso web',
      link: `https://www.studocu.com/es-mx/document/universidad-nacional-autonoma-de-mexico/analisis-de-requisitos/ers-este-documento-ayuda-a-la-especificacion-de-requerimientos-es-administrada/17977780`,
    },
    {
      tema: `Herramientas y técnicas para recolección de requisitos`,
      referencia: `Universidad Autónoma de México. (2021-2022). <i>Especificación de Requisitos de Apoyo.</i> Studocu`,
      tipo: 'Curso web',
      link: `https://www.studocu.com/es-mx/document/universidad-nacional-autonoma-de-mexico/analisis-de-requisitos/ers-este-documento-ayuda-a-la-especificacion-de-requerimientos-es-administrada/17977780`,
    },
    {
      tema: `Herramientas y técnicas para recolección de requisitos`,
      referencia: `Universidad Nacional de Colombia. (s.f.).<i> Especificación de Casos de Uso.</i> La Oficina de Proyectos de Informática. Course Hero.`,
      tipo: 'Curso web',
      link: `https://www.coursehero.com/file/25099158/PMOInformatica-Plantilla-de-Casos-de-Usodoc/`,
    },
    {
      tema: `Herramientas y técnicas para recolección de requisitos`,
      referencia: `Escuela de informática y Telecomunicaciones, DUO UC. (2021).<i>Propuesta de proyecto y especificación de requisitos de software</i>.`,
      tipo: 'Curso web',
      link: `https://idoc.pub/documents/informe-ers-especificacion-de-requisitos-del-software-qn8517y222n1`,
    },
  ],
  glosario: [
    {
      termino: `Atributo`,
      significado: `característica de una entidad. Puede haber muchos atributos en una entidad.`,
    },
    {
      termino: `Caso de uso`,
      significado: `especificación de un tipo de interacción con el sistema.`,
    },
    {
      termino: `Cliente`,
      significado: `persona, organización o grupo de personas que encargan la construcción de un sistema, ya sea en su etapa inicial o refinando versiones sucesivas.`,
    },
    {
      termino: `Dominio`,
      significado: `área problemática o empresarial específica donde se usan los sistemas de <em>software</em>. Los ejemplos de dominio incluyen control en tiempo real, procesamiento de datos empresariales y conmutación de telecomunicaciones.`,
    },
    {
      termino: `Fiabilidad`,
      significado: `capacidad de un sistema para entregar los servicios como se especifican. La fiabilidad se puede especificar cuantitativamente como la probabilidad de que ocurra un fallo de funcionamiento o como la tasa de ocurrencia de estos.`,
    },
    {
      termino: `Gestión de requerimientos`,
      significado: `proceso de administrar los cambios a los requerimientos para asegurar que son analizados adecuadamente y rastreados a lo largo del sistema.`,
    },
    {
      termino: `Interfaz`,
      significado: `especificación de los atributos y operaciones asociados con un componente <em>software</em>. La interfaz es utilizada como el medio de tener acceso a la funcionalidad del componente.`,
    },
    {
      termino: `Portabilidad`,
      significado: `grado en que un sistema que opera en determinado entorno de ejecución pueda ser convertido para funcionar en otro entorno.`,
    },
    {
      termino: `Proyecto`,
      significado: `esfuerzo de desarrollo para llevar un sistema a lo largo de un ciclo de vida.`,
    },
    {
      termino: `Requerimiento`,
      significado: `condición o capacidad requerida por una parte interesada para resolver un problema o alcanzar un objetivo. Debe cumplir con un componente de solución para satisfacer un contrato, norma, especificación u otros documentos.`,
    },
    {
      termino: `Requerimiento funcional`,
      significado: `declaración de alguna función o característica que se debe implementar en un sistema.`,
    },
    {
      termino: `Requerimiento no funcional`,
      significado: `declaración de una restricción o comportamiento que se aplica a un sistema. Esta restricción se puede referir a las propiedades emergentes del <em>software</em> que se está desarrollando o al proceso de desarrollo.`,
    },
    {
      termino: `Sistema`,
      significado: `colección de subsistemas interrelacionados e interdependientes, trabajando juntos para lograr metas y objetivos predeterminados. Todos los sistemas tienen entrada, procesos, salida y retroalimentación.`,
    },
    {
      termino: `Usuario`,
      significado: `individuo u organización que utiliza el sistema en operación para llevar a cabo una función específica.`,
    },
    {
      termino: `Validación`,
      significado: `confirmación mediante el suministro de evidencia objetiva de que se han cumplido los requerimientos para una utilización o aplicación específica prevista.`,
    },
  ],
  referencias: [
    {
      referencia: `Aston, B. (2021).<i> Las mejores herramientas de gestión de requisitos en 2022.</i>`,
      link: `https://thedigitalprojectmanager.com/es/tools/herramientas-gestion-requisitos/`,
    },
    {
      referencia: `Bennaceur, G., Thein, T. Yijun, Y. & Bashar, N. (2019).<i> Requirements Engineering.</i> En Cha, S., Taylor, R. N., y Kang, K. (Eds.) <i>Handbook of Software Engineering. </i> Springer Nature Switzerland`,
    },
    {
      referencia: `CVUDES. (2015). <i>Modelo FURPS.</i>`,
      link: `https://sites.google.com/cvudes.edu.co/evaluacionred/grupo_eval_red_3/modelo-furps`,
    },
    {
      referencia: `Digité. (2020).<i> ¿Qué es el mapeo de historias (de usuarios)?</i>`,
      link: `https://www.digite.com/es/agile/mapeo-de-historias/`,
    },
    {
      referencia: `Dyson, J. (2019).<i> The FURPS Model</i>.`,
      link: `https://www.linkedin.com/pulse/conjoining-furps-moscow-analyse-prioritise-jonathan-dyson/ `,
    },
    {
      referencia: `Equipo Editorial Project Management. (2019). <i>Gestión de requerimientos II: características de los requerimientos.</i>`,
      link: `https://blogs.salleurl.edu/es/project-management/gestion-de-requerimientos-ii-caracteristicas-de-los-requerimientos `,
    },
    {
      referencia: `Fatto consultorías y sistemas. (2016).<i> Entrevistas eficaces para el trabajo de requerimientos</i> [video] YouTube.`,
      link: `https://www.youtube.com/watch?v=C_r-hTknkf8`,
    },
    {
      referencia: `Gómez, S. y Moradela, E. (2020). <i>Aproximación a la Ingeniería del Software. Universitaria Ramón Areces</i>.`,
    },
    {
      referencia: `Hansen, B. (2021). <i>Reglas de la lluvia de ideas: una guía del gerente para producir grandes ideas.</i>`,
      link: `https://www.wrike.com/blog/rules-of-brainstorming-managers-guide-producing-great-ideas/`,
    },
    {
      referencia: `ISO-IEC-IEEE. (2018).<i> Systems and Software Engineering - Life Cycle Processes - Requirements Engineering.</i> (ISO/IEC/IEEE 29148-2018).`,
    },
    {
      referencia: `Lucidchart. (2021). <i>¿Cuáles son tus necesidades de creación de mapas de procesos?</i>`,
      link: `https://www.lucidchart.com/pages/es/que-es-la-creacion-de-mapas-de-procesos`,
    },
    {
      referencia: `Mohapatra, H. y Rath, A. (2020). <i>Fundamentals of Software Engineering. BPB Publications.</i>`,
    },
    {
      referencia: `Pressman, R. y Maxim, B. (2019). <i>Software Engineering: A Practitioner's Approach. </i>McGraw-Hill Education.`,
    },
    {
      referencia: `Pressman, R. y Maxim, B. (2021). <i>Ingeniería de software - Un enfoque práctico (9a Ed.).</i> McGraw-Hill Interamericana.`,
      link: `https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=16414`,
    },
    {
      referencia: `REHKOPF, M. (2021). <i>User stories with examples and a template.</i>`,
      link: `https://www.atlassian.com/agile/project-management/user-stories`,
    },
    {
      referencia: `Ronam, S. (2021). <i>¿Qué es un prototipo y para qué sirve? – Ejemplos.</i>`,
      link: `https://saulromanjimenez.com/que-prototipo-sirve-ejemplos/`,
    },
    {
      referencia: `Santana, S., Perero, L. R., Delduca, A. G. & Dapozo, G. N. (2020). <i>Evaluación de técnicas para la validación de requerimientos en entornos de trabajo para el desarrollo de software.</i>`,
      link: `http://sedici.unlp.edu.ar/handle/10915/103994`,
    },
    {
      referencia: `Sommerville, L. (2016). <i>Software Engineering</i> (10th edition). Pearson.`,
    },
    {
      referencia: `Team Asana. (2022). <i>Técnicas para la recopilación de requisitos.</i>`,
      link: `https://asana.com/es/resources/requirements-gathering`,
    },
    {
      referencia: `Tsui, F., Karam, O. & Bernal, B. (2018). <i>Essentials of Software Engineering</i> (4th ed.). Jones & Bartlett Learning.`,
    },
    {
      referencia: `Universitat Politècnica de València-UPV. (2021).<i> Casos de uso y diagramas de casos de uso</i> [video]. YouTube.`,
      link: `https://youtu.be/iFcDoP6jEeE`,
    },
    {
      referencia: `Valda, J. C. (2021). <i>Análisis de los stakeholders.</i>`,
      link: `https://www.grandespymes.com.ar/2021/04/10/analisis-de-los-stakeholders/ `,
    },
    {
      referencia: `Wong, S. (2017). <i>Análisis y requerimientos de software: Manual autoformativo interactivo.</i> Universidad Continental de Huancayo. Obtenido de`,
      link: `https://hdl.handle.net/20.500.12394/4281`,
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

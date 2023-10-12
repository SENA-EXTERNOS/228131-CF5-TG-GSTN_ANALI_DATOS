<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas y técnicas para recolección de requisitos

    .tarjeta.color-tar-2.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-5.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema2/img-1.svg")
        .col-md.col-lg-8
          p.ms-2.me-4 La definición de requisitos identifica los aspectos clave del <em>software</em> y descarta los irrelevantes, es decir, los que no agregan valor. A continuación, se revisan algunas técnicas para analizar requerimientos como FURPS+ y MoSCoW, el prototipado como un modelo inicial, las reuniones JAD (Desarrollo Conjunto de Aplicaciones) como práctica del grupo de desarrollo que busca en varios días concretar las necesidades del sistema a desarrollar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.pb-0
          h5 Figura 8
          p.mb-5
            em Comic sobre las reuniones para definir requerimientos
        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-2.svg')
          figcaption.color-caption-1 Nota. Adaptada y traducida de Dilbert Comics (2006), de Adams, S. (29 de enero de 2006). 

    p.mb-5 La adquisición y la comprensión de los requerimientos no es un proceso fácil, en ocasiones se presentan situaciones como las siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          img.mb-2(src='@/assets/curso/temas/tema2/3.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8

        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-4.svg')



    h3.mb-5 Entrevistas con patrocinador y usuarios

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img-5.svg")
      .col-lg-9
        p Las entrevistas son la técnica más utilizada en todo proceso de desarrollo de <i>software</i>, porque es una forma de comunicación natural entre personas.

    .tarjeta.color-slider.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-3 La técnica de entrevista se desarrolla en tres fases: preparación, realización y análisis. Una entrevista no se improvisa, previamente se deben hacen tareas como:
            ul.lista-ul.ms-5
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Estudiar el dominio del problema.
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Seleccionar a las personas clave dentro de los interesados y ajustar sus agendas.
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Delimitar el objetivo y contenido.
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Planificar la logística.
              li 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-6.svg')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-3 Las entrevistas son un intercambio de información verbal entre personas y pueden ser individuales o colectivas. Las preguntas, previamente escritas, se formulan de manera formal o informal; si el entrevistador tiene experiencia, se pueden hacer de manera espontánea. Las respuestas se utilizan para derivar requisitos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-7.svg')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-3 El análisis de documentación consiste en obtener la información sobre los requerimientos a partir de documentos que ya están elaborados, por ejemplo, manuales del <em>software</em> que se está usando. Esta técnica es útil cuando no hay expertos en la materia o los entrevistados salieron de la organización. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-8.svg')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-3 Las mesas de trabajo <em>(Workshops)</em> se utilizan para determinar, establecer prioridades y hacer cierre de los requisitos para el desarrollo del <em>software</em>. Se enfocan en usuarios claves y expertos seleccionados, se realizan durante un período corto, pero intensivo; se usan para generar ideas de nuevas características o productos, resolver conflictos y llegar a un consenso, o para revisar los requisitos. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-9.png')


    h3.mb-5 Técnicas de creatividad grupal - Lluvia de ideas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema2/img-10.svg")
      .col-lg-9
        p La lluvia de ideas es una actividad grupal de creatividad, usada para generar y recopilar ideas relacionadas con un mismo tema, en un ambiente libre de críticas o juicios. En la obtención de los requisitos, se utiliza para profundizar el detalle sobre el tema. En la sesión se intercambian ideas sin orden ni filtro, y luego se valoran. Sus fases son:
        ul.lista-ul.ms-5.color-icono
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p <b>Preparación.</b>
          li 
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p <b>Generación.</b>
          li 
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p <b>Consolidación (revisar, descartar y priorizar ideas).</b>
          li 
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p <b>Documentación.</b>
          li 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8

        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-11.png')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img-12.svg")
      .col-lg-9
        p La capacidad de crear nuevas ideas es una potencialidad desde la infancia. Por lo general, el primer paso en la lluvia de ideas es que todos se reúnan en un lugar tranquilo y comiencen a pensar (Hansen, 2021). Por su naturaleza libre y espontánea, la lluvia de ideas tiene cuatro características:

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img-13.png").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Cantidad antes que calidad")
              .col-12
                p.mb-0 Como se busca recoger tantas ideas como sea posible, es importante que estas fluyan libremente, aunque al final muchas se desechen.

            .row(titulo="No a las críticas, discusiones o comentarios durante la sesión")
              .col-12
                p.mb-0 Esta regla debe ser respetada en todo momento para que el flujo de ideas no se perturbe o detenga.

            .row(titulo="Registrar todas las ideas")
              .col-12
                p.mb-0 Que la sesión pase a la siguiente fase de evaluación sin haber sido censurada o filtrada. Ignorar ideas desmotiva a los participantes para seguir contribuyendo.

            .row(titulo="Pensar con originalidad e inspirarse mutuamente")
              .col-12
                p.mb-0 Como surgen muchas ideas independientes, otras nuevas surgen a partir de ellas.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-md-3.mb-5.cuadro-derecha-2
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-2
            .col-lg-4.mb-1.mb-lg-0
              figure.posicion_imagen_2
                img(src='@/assets/curso/temas/tema2/img-14.svg')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Otra técnica es el Diseño Conjunto de Aplicaciones (JAD) como alternativa a las entrevistas individuales. Ayuda a los clientes y usuarios a formular problemas y a explorar soluciones, involucrándolos dentro del desarrollo, mediante talleres colaborativos.

    p.mb-5 El JAD lleva a menores tiempos de desarrollo y mayor satisfacción del cliente involucrado durante todo el proceso. Consta de cuatro principios: dinámicas grupales, comunicación visual (diagramas, transparencias, multimedia, herramientas CASE), un proceso organizado y racional y la documentación tipo WYSIWYG, lo que se ve es lo que se obtiene <em>(what you see is what you get)</em>. Durante las sesiones, se trabajan los documentos a manera de diseño en fases. Veamos más a profundidad:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-contenido.info-tema-2
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-15.svg')

          .tarjeta.color-acento-botones.p-3(x="37%" y="22%" numero="1")
            .h5.mb-2 Adaptación
            p Establece un equipo de trabajo identificando los componentes y responsabilidades, buscando consenso entre las necesidades de los usuarios y los servicios del <em>software</em> en producción.

          .tarjeta.color-acento-botones.p-3(x="62%" y="43%" numero="2")
            .h5.mb-2 La sesión <em>JAD</em> consiste en 
            p Presentación, definición de objetivos y requisitos, documentación de temas abiertos y conclusión. Las sesiones pueden ser largas; durante estas se elaboran modelos empleando diagramas fáciles de entender, elaborados mediante herramientas CASE <em>(Computer Aided Software Engineering).</em>

          .tarjeta.color-acento-botones.p-3(x="68%" y="25%" numero="3")
            .h5.mb-2 Para concluir se completa, revisa y valida la documentación
            p El producto final es un conjunto de modelos para ser aprobados por los participantes.

    h3.mb-5 Cuestionarios y encuestas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img-16.svg')
      .col-lg-8
        p Los cuestionarios o encuestas son un conjunto de preguntas orientadas a obtener información específica de los usuarios. Se solicitan anónimamente y las respuestas se analizan y catalogan de forma cualitativa o cuantitativa. Los resultados sirven para tomar decisiones por parte de quienes solicitaron la información. 

        p Las preguntas formuladas pueden ser cerradas o abiertas.

        ul.lista-ul
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p <b>Cerradas:</b> de selección múltiple entre varias alternativas. Estas preguntas deben ser objetivas con respuestas predefinidas, su evaluación es rápida y cuantitativa.
          li 
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p <b>Abiertas:</b> el encuestado responde la pregunta con sus propias palabras, pues tiene libertad de expresión, lo cual permite obtener información más detallada. Las respuestas son más difíciles de clasificar porque son cualitativas.
          li 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10   
        .cajon.p-4.mb-4.color-cajon-1.mb-5
          p En la siguiente tabla, se muestran ambos tipos de preguntas. En las cerradas se asignan puntajes para que cada usuario escoja, lo que permite que sean analizadas cuantitativamente, mientras que en las respuestas abiertas, el usuario puede responder en cada caso lo que considere, desde su perspectiva.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Tabla 4.</b> Tipos de pregunta en los cuestionarios
        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-17.svg')
          figcaption.color-caption-1 Nota. Adaptada de Wong, S. (2017). 



    h3.mb-5 Análisis de tareas y de dominio

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img-18.svg') 
      .col-lg-7
        .cajon-b.color-cajon-25.p-3.mb-5.color-pos-3
          p El análisis de requerimientos ejecuta las tareas que determinan las necesidades o condiciones que debe cumplir el <em>software</em>, ya sea un nuevo diseño o una versión de algo existente, teniendo en cuenta los conflictos entre requisitos de los diferentes roles. Analizar, documentar, validar y administrar los requisitos se hace en la fase de análisis.

          p El análisis consiste en determinar si el requerimiento obtenido es claro, completo, conciso, no está duplicado, es válido, consistente y sin ambigüedades, resuelve conflictos y añade valor al proyecto. El proceso ha identificado las necesidades de los interesados, las implicaciones del <em>software</em>, representado los casos e historias de usuario, observado el sitio de trabajo y generado una cantidad de requisitos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.pb-0
          h5 Figura 9 
          p.mb-0
            em Esquema del modelo FURPS+
        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-19-.svg')
          figcaption.color-caption-1 Nota. Adaptada de FURPS+ (2008).

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-md-3.mb-5.cuadro-derecha-2
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-2
            .col-lg-4.mb-1.mb-lg-0
              figure.posicion_imagen_2
                img(src='@/assets/curso/temas/tema2/img-20.svg')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Para clasificar los requerimientos se usa la técnica FURPS+, <em>(Functionability, Usability, Reliability, Performance & Supportability),</em> Funcionalidad, facilidad de Uso, Confiabilidad, Rendimiento y Facilidad de soporte. El modelo se clasifica dos categorías: requisitos funcionales (F) que especifican las funciones que el<em> software</em> debe realizar y requerimientos no-funcionales (URPS), que puntualizan atributos del sistema o del medio ambiente del sistema. El símbolo (+) representa restricciones no-funcionales que deben tenerse en cuenta, como diseño, implementación, legales e interfaz y los que se derivan de la norma ISO-9126 como eficiencia, mantenibilidad y portabilidad.



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.pb-0
          h5 Tabla 5
          p.mb-0
            em Restricciones del modelo FURPS+
        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-22-.svg')
          figcaption.color-caption-1 Nota. Tomado de CVUDES (2015).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img-23.svg")
      .col-lg-10
        p Una vez clasificados, según el tipo, los requisitos se priorizan con el método MoSCoW, el cual sirve para saber qué debe hacer primero, qué puede hacer después y qué no necesita hacer. El método corresponde a cuatro categorías:
    .row
      .col-lg-8.order-2.order-lg-1
        TabsA.color-acento-botones.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="<em>M de Must Have </em>")
            p (Debe tener), requisitos indispensables, deben llevarse a cabo en primer lugar y no son negociables.

          .tarjeta.clr-paleYellow.p-4(titulo="<em>S de Should Have</em>")
            p (Debería tener), agrupa los requisitos importantes a realizar una vez finalizada la categoría “debe tener”. Aportan valor agregado real y contribuyen a lograr los objetivos, pero pueden diferirse en el tiempo.

          .tarjeta.clr-paleYellow.p-4(titulo="<em>C de Could have</em>")
            p (Podría tener), requisitos que sería interesante tener si es posible, cuando haya tiempo al finalizar las dos primeras categorías. Su realización no debe afectar los demás requisitos.

          .tarjeta.clr-paleYellow.p-4(titulo="<em>W de Won’t have <br>but would like to<br> in the future</em>")
            p (No lo tendrá, pero de pronto en el futuro), son los requisitos secundarios que sería bueno realizar algún día, pero que por ahora se dejan de lado.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema2/img-24.svg").m-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure.mb-5
          img(src="@/assets/curso/temas/tema2/img-25.svg").m-auto
      .col-lg-8
        p Las ventajas del método <em>MoSCoW</em> son:

        ul.lista-ul
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p La forma de nombrar las categorías es pertinente y facilita la priorización.
          li 
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p La última categoría permite anotar las demandas del cliente y registrarlas para integrarlas en versiones o desarrollos posteriores.
          li 
          li 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p Priorizar, facilita dividir los recursos adecuadamente.
          li 
        p.mb-4 Se deben equilibrar los requisitos en las categorías para evitar que todo sea prioritario, de lo contrario, algunos importantes como mejoras y mantenimiento, terminan en las últimas categorías.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12  
            .cajon.p-4.mb-4.color-cajon-1.mb-5
              p Aplicando ambos modelos se tiene una herramienta que clasifica y prioriza los requerimientos, los hace entendibles para los interesados. El formato matricial permite visualizar rápidamente la relación Requisitos-Prioridad y participar eficientemente en el proceso de análisis y priorización de requisitos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img-26.svg")
      .col-lg-10
        p El modelo FURPS se desarrolló por primera vez en Hewlett-Packard y se usa para clasificar los requisitos funcionales y no-funcionales de los sistemas (Dyson, 2019). A continuación, se encuentra un ejemplo de matriz que permite entender esta tarea:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.pb-0
          h5 Tabla 6
          p.mb-0
            em Matriz FURPS+ & MoSCoW
        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-27.svg')
          figcaption.color-caption-1 Nota. Tomada de Dyson, J. (2019). 
    

    h3.mb-5 Fabricación del modelo prototipo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img-28.svg') 
      .col-lg-8
        .cajon-b.color-cajon-25.p-3.mb-5.color-pos-4
          p.mb-0 Utilizar prototipos como técnica de validación de requisitos para mostrarle al usuario una versión aproximada del <i>software</i>, permite que explore y participe en la validación de la apariencia, funcionalidad y hacerse una idea de cómo quedará. Pueden ser interfaces de usuario mediante maquetación, las pantallas gráficas y de aplicaciones web. Veamos:

    .tarjeta.color-slider.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-3 El prototipo permite a los usuarios ganar experiencia y a los diseñadores recibir su retroalimentación para cumplir los requisitos y presentar una próxima versión.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-29.png')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-3 Los prototipos se usan en conjunción con otras técnicas como entrevistas y diseño conjunto de aplicaciones <em>(JAD)</em>. Se desarrollan utilizando requisitos preliminares o ejemplos de sistemas similares.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-30.png')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-3Hay Varios métodos para crear prototipos de sistemas como guiones gráficos <em>(storyboards)</em> y ejecutables minimalistas. La ventaja de usar prototipos es la expectativa y ánimo que generan en los usuarios, al ser parte activa en el desarrollo de los requisitos.	 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-31.png')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-3Una Desventaja es que los usuarios se apegan a ellos y, por lo tanto, se resisten a soluciones alternativas. La validación de prototipos en etapas tempranas del ciclo de vida del desarrollo del <em>software</em> minimiza los riesgos de modificación luego de la etapa de construcción.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-32.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img-33.png")
      .col-lg-10
        p Los prototipos son más que herramientas para ayudar a los desarrolladores a probar sus aplicaciones móviles o sitios web, son claves en el proceso de diseño centrado en el usuario. En la siguiente figura se muestra cómo hacer un prototipo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.pb-0
          h5 Figura 10
          p.mb-0
            em Prototipo de aplicación móvil utilizando software para maquetación
        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-34.png')
          figcaption.color-caption-1 Nota. Tomada de Ronam, S. (2021). 

    h3.mb-5 <b>Los pasos para desarrollar un prototipo son:</b>

    PasosA.color-acento-botones.mb-5(tipo="n")
      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p.mt-5 Entender el problema del cliente, para eso se hace todo el proceso de requerimientos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-35.svg')

      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/img-36.svg')
        .col-md-6
          p Definir la solución en el documento de especificación de requerimientos (ERS) para que el equipo de trabajo defina detalles y restricciones técnicas antes de comenzar a codificar.

      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p Desarrollar el prototipo con requisitos aprobados, para hacer elecciones técnicas y comenzar el desarrollo.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-37.svg')

      .row.justify-content-center.align-items-center
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-38.svg')
        .col-md-6.mb-4.mb-md-0
          p Poner el prototipo en funcionamiento.

      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          p Analizar la retroalimentación proveniente de los usuarios.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-39.svg')
    p.mb-5 Ahora, veamos las ventajas y las desventajas del uso de prototipos: 
    .tarjeta--container.row.mb-5

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-40.svg')

        h2.text-center.mb-5 Ventajas del uso de prototipos
        ul.lista-ul
          li.mb-0 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p.mb-0 Minimiza riesgos al construir software que no satisfaga la necesidad del usuario.
          li 
          li.mb-0 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p.mb-0 Reduce el costo de iteración e incrementa la probabilidad de éxito del proyecto.
          li 
          li.mb-0 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p.mb-0 Prevé el uso de herramientas para el desarrollo de software.
          li 
          li.mb-0 
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p.mb-0 Permite identificar funcionalidades no contempladas, para su inclusión en el análisis.
          li 

          li
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            p Provee un mecanismo de consenso de las interfaces de la aplicación. 
          li 

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-4
              img(src='@/assets/curso/temas/tema2/img-41.svg')
          h2.text-center.mb-5 Desventajas del uso de prototipos
          ul.lista-ul
            li.mb-0
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p.mb-0 El proceso de elaboración puede tomar mucho tiempo si el usuario final no tiene claro lo que desea o no decide rápidamente la validación.
            li
            li.mb-0 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p.mb-0 Al recibir el prototipo puede pensar que la aplicación está terminada y no destina tiempo para mejorarla.
            li 
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p Durante la etapa de desarrollo el programador puede alterar el prototipo y generar una iteración que requiera nuevamente la validación del usuario y, en consecuencia, incrementar costo y tiempo.
            li 

    h3.mb-5 Generación de documentación 

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-md-3.mb-5.cuadro-izq.posicion-texto
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-2
            .col-lg-4.mb-1.mb-lg-0
              figure.posicion_imagen_4
                img(src='@/assets/curso/temas/tema2/img-42.svg')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Otra técnica es el Diseño Conjunto de Aplicaciones (JAD) como alternativa a las entrevistas individuales. Ayuda a los clientes y usuarios a formular problemas y a explorar soluciones, involucrándolos dentro del desarrollo, mediante talleres colaborativos.


    p.mb-5 <b>El documento de especificación de requisitos contiene la descripción de requerimientos funcionales y no-funcionales como:</b>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema2/img-43.svg')

    .row.justify-content-center.align-items-center.mb-5

      .titulo-sexto.color-acento-contenido
        h5 Figura 11
        p.mb-0
          em Características de las herramientas para documentación de requisitos    
      .col-lg-12
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img.mb-3(src='@/assets/curso/temas/tema2/img-44.png')
              figcaption.color-caption-1 Nota. Adaptada de Aston, B. (2021). 
          .tarjeta.color-modal.p-3(x="10%" y="33%" numero="")
            p Flujos interactivos y simulaciones. <br>Dashboards y storyboards.<br>Funciones para modelos gráficos (UML).
          .tarjeta.color-modal.p-3(x="30%" y="60%" numero="")
            p Encontrar relaciones entre requisitos.<br>Análisis de impacto en tiempo real.<br>Ejecutar casos de prueba.
          .tarjeta.color-modal.p-3(x="49.5%" y="33.7%" numero="")
            p Permitir, revisar y aprobar firmas electrónicas.<br>Recoger información a través de comentarios y mensajes.<br>Notificar la actividad de los usuarios.
          .tarjeta.color-modal.p-3(x="70%" y="60%" numero="")
            p Definir los requerimientos.<br>Modelar las relaciones entre requisitos.<br>Reutilizar requerimientos.<br>Importar/exportar datos para documentación.
          .tarjeta.color-modal.p-3(x="90%" y="37.5%" numero="")
            p IDE de desarrollo.<br>Procesador de texto.<br>Hoja de cálculo.


    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Desarrollo de contenido Entendiendo los requisitos del negocio

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img-1.png")
      .col-lg-9
        p Al iniciar, es indispensable entender los requisitos del negocio, empresa u organización, con el fin de hacer un levantamiento adecuado de los requisitos. A continuación, se explican los pasos iniciales de este proceso:

    .tarjeta.color-slider.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-5 Desarrollar un proyecto de <em>software</em> parte de una idea o necesidad de negocio: resolver un problema, mejorar un proceso o explotar una nueva oportunidad.

            p.ms-5 Las personas u organizaciones que efectivamente tienen que ver con el proyecto de <em>software</em>, quienes tienen ese interés válido en cubrir esas necesidades constituyen el grupo de interés; dentro de este hay patrocinadores que impulsan el proyecto, clientes que tienen el problema a resolver y un equipo técnico de trabajo capaz de materializar esas ideas o necesidades en un producto de <em>software</em>.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-2.svg')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
              p.ms-4 <b>La ingeniería de requerimientos se ocupa de:</b>
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta.ms-5
                    span 1
                  p Los objetivos reales de las funciones y restricciones del proyecto de <em>software</em>. 
                li 
                  .lista-ol--cuadro__vineta.ms-5
                    span 2
                  p La relación entre los diversos factores y las especificaciones del comportamiento del <em>software</em> y su evolución en el tiempo. 
                li 
                  .lista-ol--cuadro__vineta.ms-5
                    span 3
                  p La introducción de un <em>software</em> para resolver un problema real como resultado del proceso.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img-3.svg')

        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta.ms-3
                  span 4
                p Un buen entendimiento inicial del problema y su contexto asociado, constituyen el núcleo de la especificación de requerimientos. 
              li 
                .lista-ol--cuadro__vineta.ms-3
                  span 5
                p Las variaciones en las especificaciones, porque, aunque las partes estén de acuerdo, esta definición cambiará durante el proyecto.  
              li 
                .lista-ol--cuadro__vineta.ms-3
                  span 6
                p La comprensión de las limitaciones, restricciones y el entorno de operación del <em>software</em>.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-4.svg')
        .row
          .col-md-7.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 Independientemente de la metodología a seguir para el desarrollo del proyecto, la actividad inicial es determinar la viabilidad del producto final. 

            p.ms-5 <b>Esta etapa de concepción del <em>software</em> tiene dos pasos:</b>

            ol.lista-ol--cuadro.ms-5
              li 
                .lista-ol--cuadro__vineta.ms-3
                  span 1
                p Recopilar el catálogo de requerimientos - lo que el cliente quiere que el <em>software</em> haga. Se debe <b>escuchar y conversar</b> con los interesados, hacer lo que el cliente pide, evitando exagerar los requerimientos o ilusionar al cliente con algo que no se puede cumplir; lo importante es construir un sistema que funcione y cumpla las expectativas del cliente y los usuarios.
          .col-md-5
            figure
              img.tamanio-img(src='@/assets/curso/temas/tema1/img-5.svg')
        .row
          .col-md-7.mb-4.mb-md-0.row.justify-content-center.align-items-center
            ol.lista-ol--cuadro.ms-5
              li 
                .lista-ol--cuadro__vineta.ms-3
                  span 2
                p Especificar los requisitos del <em>software</em> - definir la arquitectura del sistema que cumpliría esos requerimientos definidos por el cliente, desde puntos de vista computacional y estructural, documentando y entregando la información validada por las partes interesadas a la siguiente etapa del proyecto. 
          .col-md-5
            figure
              img.tamanio-img(src='@/assets/curso/temas/tema1/img-6.svg')

        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-4 Las partes interesadas son todos los individuos u organizaciones que tienen un interés válido en el desarrollo del proyecto, quienes ganan o pierden con el éxito o el fracaso del sistema.

            p.ms-4 Los interesados son importantes en la obtención y validación de requisitos, por eso es preciso escucharlos, ellos son:

            ol.lista-ol--cuadro.ms-5
              li 
                .lista-ol--cuadro__vineta.ms-3
                  span 1 
                p Patrocinador <em>(sponsor)</em> que es quien provee los recursos.
              li 
                .lista-ol--cuadro__vineta.ms-3
                  span 2 
                p Experto del dominio que valida la arquitectura.
              li 
                .lista-ol--cuadro__vineta.ms-3
                  span 3 
                p Personas usuarios finales del sistema.
              li 
                .lista-ol--cuadro__vineta.ms-3
                  span 4 
                p Entidades reguladoras y normalizadoras.
              li 
                .lista-ol--cuadro__vineta.ms-3
                  span 5
                p Equipo de trabajo que realiza el desarrollo.
          .col-md-6
            .titulo-sexto.color-acento-contenido.pb-0
              p.mb-0.text-small <b>Figura 1.</b> Interesados del proyecto
            figure
              img.mb-2(src='@/assets/curso/temas/tema1/img-7.svg')
              figcaption.color-caption Nota: Adaptada de Análisis de los stakeholders. Grandes Pymes (2017).

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-5 Todo proyecto comienza con el equipo de trabajo, intentando entender el problema a resolver y determinando cuáles resultados son importantes para las partes interesadas. Esto incluye comprender las necesidades del negocio que motivan el proyecto y las cuestiones técnicas que lo restringen.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-8.svg')

    separador 

    #t_1_1.titulo-segundo.color-acento-contenido.pb-2
      h3 1.1 Estudio de viabilidad del sistema y sus funcionalidades

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-md-3.mb-5.cuadro-derecha-2
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-2
            .col-lg-4.mb-1.mb-lg-0
              figure.posicion_imagen_2
                img(src='@/assets/curso/temas/tema1/img-9.svg')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p El estudio de viabilidad examina el contexto del <em>software</em> a realizarse; las necesidades específicas que deben abordar el diseño y la construcción; las prioridades que guían el orden en el que se efectúa el trabajo; la información; las funciones y los comportamientos que afectarán el producto resultante.

    p.mb-5 <b>Consiste en siete fases diferentes:</b> concepción, indagación u obtención, elaboración, negociación, especificación, validación y administración. Algunas pueden ser concurrentes y todas se adaptan a las necesidades del proyecto de <em>software</em>:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Figura 2.</b> Fases del estudio de viabilidad
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-10.svg')

    PasosB.color-acento-botones.color-fondo-puntos.p-3.mb-5
      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Concepción:</b>

          p.ms-5 El proyecto comienza cuando se identifica una necesidad del negocio o se descubre un mercado o servicio potencial. En esta fase se hace el entendimiento básico del problema, se identifican los usuarios finales y lo que quieren o necesitan, es decir, la naturaleza de la solución.


        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-11.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Indagación u obtención:</b>

          p.ms-5 Consiste en preguntarle al cliente, a los usuarios y a los demás interesados cuáles son los objetivos para el sistema, qué se va a lograr, cómo se ajusta a las necesidades del negocio y, finalmente, cómo va a usarse en la operación diaria. La parte más importante de la indagación es entender los objetivos del negocio, estos pueden ser funcionales o no-funcionales.
          .row.ms-5
            .col-auto 
              p.mt-4 <b>Problemas que pueden surgir en esta etapa</b>
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span Modal
                .indicador--click(v-if="mostrarIndicador")

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-12.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Elaboración:</b>
          
          p.ms-5 Consiste en desarrollar, expandir y refinar la información obtenida del cliente durante la concepción e indagación. Debe identificar aspectos funcionales, del comportamiento e información del <em>software</em>. La elaboración toma los escenarios de usuario y los refina. Cada escenario o caso describe cómo el usuario va a interactuar con el sistema y se analiza para extraer las clases o entidades de negocio visibles al usuario. Se definen los atributos de cada clase analizada y los servicios que requiere cada una.

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-13.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Negociación:</b>

          p.ms-5 Es usual que clientes y usuarios pidan más de lo que puede lograrse con la limitación de recursos del negocio. También es común que distintos clientes o usuarios propongan requerimientos conflictivos con el argumento de que su versión es <b>“esencial para nuestras necesidades”.</b>

          p.ms-5 Para conciliar durante la fase de negociación, se pide a clientes, usuarios y otros interesados que prioricen sus requerimientos y que analicen los conflictos. Mediante un enfoque iterativo se da prioridad a los requerimientos, evaluando su costo y riesgo, y se enfrentan los conflictos internos; algunos se eliminan, se combinan o se modifican de modo que ambas partes ganan pues se logra un acuerdo satisfactorio.

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-14.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Especificación:</b>

          p.ms-5 Puede ser un documento, varios modelos gráficos, un modelo matemático, un conjunto de casos de uso, un prototipo o cualquier combinación de éstos. Puede usarse una plantilla estándar, lo que lleva a presentar los requerimientos en forma consistente y comprensible. Pero en ocasiones es necesario ser flexible cuando se desarrolla una especificación. Para sistemas grandes conviene realizar un documento escrito que combine descripciones en un lenguaje natural con modelos gráficos, pero para sistemas pequeños quizá todo lo que se requiera sean casos de uso.

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-15.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Validación:</b>          

          p.ms-5 Consiste en evaluar la calidad del resultado generado desde la ingeniería de requerimientos analizando las especificaciones para garantizar que todos han sido enunciados sin ambigüedades; que se detectaron y corrigieron las inconsistencias, omisiones y errores, y que el resultado del trabajo se presenta conforme a los estándares establecidos para el proceso, el proyecto y el producto. 

          p.ms-5 Ejemplos de los problemas que ocurren durante la validación de requisitos y que parecen inocuos:

          p.ms-5 ●  El <em>software</em> debe ser fácil de usar.
          p.ms-5 ●  La probabilidad de una intrusión exitosa no autorizada en la base de datos debería ser menor que 0.0001.

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-16.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 El primer requisito es vago para los desarrolladores que lo prueben o evalúen. ¿Qué significa exactamente "fácil de usar"? Para validarlo, debe ser cuantificado o calificado de alguna manera. 

          p.ms-5 El segundo requisito tiene un elemento cuantitativo (“menos de 0.0001”), pero estas pruebas de intrusión son difíciles y consumen mucho tiempo; además, ¿está justificado este nivel de seguridad para la aplicación?, ¿pueden otros requisitos complementarios de seguridad (por ejemplo, protección por contraseña, protocolo de enlace especializado) reemplazar el requisito cuantitativo anotado?

          .row.ms-5
            .col-auto 
              p.mt-4 <b>La validación de requerimientos</b>
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                span Modal
                .indicador--click(v-if="mostrarIndicador")

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-17.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Administración:</b>

          p.ms-5 Todos los requerimientos de <em>software</em> cambian, y el deseo o necesidad de modificarlos continúa durante el ciclo de vida del sistema. La administración es un conjunto de actividades que ayudan al equipo del proyecto a identificar, controlar hacer seguimiento y modificaciones en cualquier momento del desarrollo del proyecto.

          p.ms-5 La importancia de la identificación de requerimientos radica en que define claramente lo que se va a hacer, entregando un documento de requisitos de <em>software</em> que servirá como insumo de entrada a las siguientes fases del proyecto, de manera que una falla inicial se propagará en las siguientes fases de elaboración y construcción, haciendo que su solución sea mucho más costosa que haberla detectado y corregido inicialmente.

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-18.svg')

    p.mb-5 <b>A continuación, se presenta un ejemplo de lista de chequeo para validación de requerimientos.</b>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Tabla 1.</b> Ejemplo de lista de chequeo
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-19.svg')
          figcaption.color-caption-1 Nota. Adaptada de Software Engineering: A Practitioner's Approach. Pressman y Maxim (2019).

    separador 

    #t_1_2.titulo-segundo.color-acento-contenido.pb-2
      h3 1.2 Recogida de requisitos

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-md-4.mb-5.cuadro-derecha-2
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-2
            .col-lg-4.mb-1.mb-lg-0
              figure.posicion_imagen_3
                img(src='@/assets/curso/temas/tema1/img-20.svg')
            .col-lg-8
              .bloque-texto-a__texto.p-1
                p.p-3 Hasta ahora se ha estudiado la importancia de los requerimientos y el proceso conjunto por el cual las partes interesadas acuerdan los mismos; pero estos, además de ser identificados, deben ser descritos y documentados de forma estructurada y normalizada.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.p-4.mb-4.color-cajon.mb-5
          p Declaraciones como: <b>“el programa debe escribirse en Java”</b> no es un requerimiento porque es una decisión de implementación. Pero una declaración como: <b>“un usuario puede retirar de la biblioteca hasta 10 libros diferentes al tiempo”</b> si es un requerimiento porque define un atributo de la clase usuario.

    p.mb-5 En el siguiente gráfico se pueden observar los elementos que intervienen en el proceso de análisis y recopilación de requisitos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7 
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Figura 3.</b> Proceso de análisis y recopilación de requisitos
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-21.svg')
          figcaption.color-caption-1 Nota: Adaptada de Análisis de los <em>stakeholders.</em> ,<a href="https://www.grandespymes.com.ar/2021/04/10/analisis-de-los-stakeholders/">Grandes Pymes (2021).https://www.grandespymes.com.ar/2021/04/10/analisis-de-los-stakeholders/</a>  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img-22.svg")
      .col-lg-9
        p Los requerimientos se deben precisar y eso implica entender el entorno en el que el <em>software</em> funcionará y definir en forma detallada las declaraciones que especifican lo que hará. Cinco criterios evalúan que los requerimientos sirvan:

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img-23.svg").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Cada requerimiento")
              .col-12
                p.mb-0 Debe ser validado por el patrocinador o patrocinadores. La mejor forma de lograr la obtención de requisitos es involucrar a los usuarios al interactuar con ellos, entre más se hable y escuche, mayor claridad habrá a medida que se logre acumular información sobre el <em>software</em> que se va a realizar.

            .row(titulo="Cada propiedad del dominio")
              .col-12
                p.mb-0 (Entorno donde va a funcionar el <em>software</em>, no la máquina o sistema operativo) también debe ser validado por el patrocinador o patrocinadores.

            .row(titulo="La especificación de requerimientos")
              .col-12
                p.mb-0 No se restringe al entorno o se refiere al futuro.
                
            .row(titulo="Manera de comprobar")
              .col-12
                p.mb-0 Debe haber manera de comprobar que la implementación de la especificación satisface los requerimientos en el entorno donde trabajará. Para esto se diseñan y prueban prototipos.
            .row(titulo="Las especificaciones y propiedades ")
              .col-12
                p.mb-0 Del entorno (dominio) son consistentes.

    p.mb-5 Un requerimiento debe cumplir ciertos criterios y características, entre otros debe ser único, verificable, claro, realista y posible (Equipo Editorial <em>Project Management,</em> 2019). Las cualidades clave de los requerimientos son:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-24.svg")
          .crd_hover_txt--body
            h5.mb-3 Cuantificable 
            p.mb-0 Cuantificable en términos de mediciones. Por ejemplo, una declaración como “el tiempo de respuesta debe ser corto” no es cuantificable, pero si se cambia por “el tiempo de respuesta debe ser menor a 2 segundos” se puede medir y comprobar.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-25.svg")
          .crd_hover_txt--body
            h5.mb-3 Debe ser completo 
            p.mb-0 Los requerimientos deben definir todas las propiedades y restricciones del <em>software</em>. En la práctica se logran al cumplir las pautas para definición de requerimientos como asegurar que no falten referencias o funciones.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-26.svg")
          .crd_hover_txt--body
            h5.mb-3 Corrección o validez
            p.mb-0 Se debe unificar el significado de los requerimientos. A menudo implica el cumplimiento de políticas, leyes y normas.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-27.svg")
          .crd_hover_txt--body
            h5.mb-3 Consistencia
            p.mb-0 Al involucrar interesados con diferentes opiniones sobre el problema, se presentan contradicciones en las etapas tempranas de desarrollo. A través de la negociación y priorización se resuelven los conflictos y alcanza un acuerdo.  
            
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-28.svg")
          .crd_hover_txt--body
            h5.mb-3 Unicidad en la definición
            p.mb-0 Las palabras y significados escritos en las declaraciones deben significar lo mismo para todos los interesados del proyecto. Un glosario elimina las ambigüedades semánticas.  
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-29.svg")
          .crd_hover_txt--body
            h5.mb-3 Pertinencia
            p.mb-0 Definir claramente el problema a solucionar es fundamental, los requerimientos deben ser relevantes a las necesidades de los patrocinadores sin restringir al equipo de trabajo.  
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-30.svg")
          .crd_hover_txt--body
            h5.mb-3 Factibilidad
            p.mb-0 Los requisitos deben especificarse para que puedan implementarse utilizando los recursos disponibles, dentro del presupuesto y el cronograma.  
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-31.svg")
          .crd_hover_txt--body
            h5.mb-3  Trazabilidad
            p.mb-0 Ayuda a identificar el impacto de los cambios en otros partes del <em>software</em> y a evaluar cómo se debe propagar este cambio.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img-32.svg")
      .col-lg-9
        p Contar con una buena clasificación de requisitos permite establecer las necesidades de un proyecto de desarrollo cubriendo sus aspectos más importantes.

        p Los requerimientos del <em>software</em> a desarrollar pueden clasificarse según distintas reglas. En la siguiente tabla se detalla dicha clasificación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Tabla 2.</b> Clasificación de los requerimientos
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-34.svg')
          figcaption.color-caption-1 Nota. Adaptada de Mohapatra y Rath (2020).

    separador 

    #t_1_3.titulo-segundo.color-acento-contenido.pb-2
      h3 1.3 Herramientas y técnicas

    p.mb-5 Los usuarios nunca saben lo que quieren del producto final, por esto se enfatiza en “escuchar y conversar” con ellos: Hay varias técnicas para este diálogo debido a que los usuarios no son un grupo monolítico, tienen diferentes necesidades, quieren diferentes funcionalidades y ni siquiera utilizarán los mismos equipos.

    .tarjeta.color-slider.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-5 Los usuarios se clasifican en grupos dependiendo del rol que van a tener cuando estén utilizando el <em>software</em> final.

          .col-md-6
            figure
              img.tamanio-img(src='@/assets/curso/temas/tema1/img-35.svg')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-5 La especificación se hace con historias y casos de usuario. Como el alcance del requerimiento ya está acordado y se han definido cuáles son los requerimientos, estos se analizan y se especifican usando estos dos métodos, entre otros.

          .col-md-6
            figure
              img.tamanio-img(src='@/assets/curso/temas/tema1/img-36.svg')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-5 <b>Análisis:</b> como se obtienen muchos requerimientos, para organizarlos se mapean las historias de usuario <em>(Story Mapping Technique)</em> agrupando los usuarios por categorías y asignando prioridades.

          .col-md-6
            figure
              img.tamanio-img(src='@/assets/curso/temas/tema1/img-37.svg')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-5 Finalmente, se averigua con los usuarios si el prototipo mostrado hace lo que se busca, validando la retroalimentación recibida para que estos entiendan el concepto.

          .col-md-6
            figure
              img.tamanio-img(src='@/assets/curso/temas/tema1/img-38.svg')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-5 Se da la oportunidad de sugerir e introducir cambios o ajustes sobre la funcionalidad del <em>software</em>.

          .col-md-6
            figure
              img.tamanio-img(src='@/assets/curso/temas/tema1/img-39.svg')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.ms-5 El prototipo es importante, es una maqueta del producto que se muestra al grupo de interés para que opinen, critiquen, sugieran y retroalimenten al equipo de trabajo: esta validación corrige desviaciones en el alcance del proyecto.

          .col-md-6
            figure
              img.tamanio-img(src='@/assets/curso/temas/tema1/img-40.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4
            figure
              img(src="@/assets/curso/temas/tema1/img-41.svg")
          .col-lg-8
            p Se usan plantillas normalizadas que sirven para articular el problema y ayudan en la delimitación de la visión del producto. Bautizar el proyecto con un nombre que contenga la esencia, le da vida al proyecto, facilita referirlo con el equipo de trabajo y la documentación.

            .cajon.p-4.mb-4.color-cajon-1.mb-5
              p Para afianzar el conocimiento, se recomienda ver las plantillas normalizadas para uso en la recogida y análisis de requisitos.

    p.mb-5 Las técnicas de interacción con los patrocinadores y clientes son individuales o grupales, se reúnen los usuarios para preguntarles qué es lo que quieren o buscan de la aplicación, procesos del negocio o necesidades de la organización.

    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Entrevista" :icono="require('@/assets/curso/temas/tema1/img-42.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Dado el carácter informal de la entrevista se hace inicialmente antes de pasar a técnicas más estructuradas, y es efectiva para desarrollar un reporte del punto de vista del cliente.

            p Antes de realizar la entrevista se presenta la agenda y las preguntas generales, pero a medida que se va desarrollando pueden surgir preguntas más abiertas dejando que libremente sean formuladas por los asistentes sin desviarse de la idea o intención central.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-47.svg')
      .py-4.py-md-5(titulo="Talleres <em>(Workshop)</em>" :icono="require('@/assets/curso/temas/tema1/img-43.svg')")
        .row
          .col-md-6
            p Como la entrevista, pero enfocada en la parte funcional, reúne los interesados clave: patrocinadores y expertos del dominio, que mediante trabajo colaborativo y discusiones resuelven asuntos sobre diferencias de opinión, necesidades, conflictos y requerimientos no clarificados. 
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-48.svg')
      .py-4.py-md-5(titulo="Observación" :icono="require('@/assets/curso/temas/tema1/img-44.svg')")
        .row
          .col-md-6
            p No siempre es sencillo para los usuarios expresarse o no saben cómo hacerlo, entonces es necesario ver la operación directamente y cómo se desempeñan al manejar las aplicaciones. Observar al usuario tiene la ventaja de entender qué partes usa de una aplicación o cuáles se les dificultan o le hacen falta.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-49.svg')
      .py-4.py-md-5(titulo="Cuestionarios" :icono="require('@/assets/curso/temas/tema1/img-45.svg')")
        .row
          .col-md-6
            h4 
            p Si el grupo es grande o está en otra ciudad, se consignan las preguntas y se envían para diligenciarse. Las preguntas deben ser claras, correctas y enfocadas hacia los requerimientos específicos del encuestado. Recibir retroalimentación ayuda a mejorar la calidad y consistencia de las preguntas.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-50.svg')
      .py-4.py-md-5(titulo="Observación independiente" :icono="require('@/assets/curso/temas/tema1/img-46.svg')")
        .row
          .col-md-6
            h4 
            p La hace el equipo de trabajo antes de hablar con los usuarios, es útil cuando se hace una aplicación para reemplazar, actualizar o añadir funcionalidad a un <em>software</em> en uso, tener una idea general de cómo ha sido utilizado. Es decir, es consultar la documentación del software y hablar con quienes mejor lo trabajen.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-51.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img-52.svg")
      .col-lg-10
        p El tipo de aplicación determina cuál técnica de interacción usar: si es masiva se hacen entrevistas, grupos de enfoque y cuestionarios; si es individual o para un grupo pequeño se hace observación o, si se es nuevo en el dominio del software, hay que hacer talleres y observaciones para adquirir conocimiento y entender el dominio.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Figura 4.</b> Técnicas para recopilar requerimientos
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-53.svg')
          figcaption.color-caption-1 Nota. Reproducida de Técnicas para la recolección de requisitos. Team Asana (2021).  

    p.mb-5 La recopilación de requisitos es una de las fases fundamentales del proceso de análisis, diseño y construcción de <em>software</em>, ya que ayuda a obtener la primera descripción del problema. A continuación, en la infografía conocerá las técnicas tradicionales más usadas en la elicitación de requisitos. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-54.svg')
          .tarjeta.color-modal.p-3(x="28%" y="28%" numero="")
            p Formulario con preguntas abiertas al cliente, que escribe lo que piensa.
          .tarjeta.color-modal.p-3(x="50%" y="9%" numero="")
            p Formulario con preguntas cerradas al cliente. Opciones predefinidas.
          .tarjeta.color-modal.p-3(x="72.5%" y="26.7%" numero="")
            p Sesión de expresión libre sobre un tema, se escuchan todas las ideas.
          .tarjeta.color-modal.p-3(x="73%" y="71.6%" numero="")
            p Versión aproximada del <em>software</em>, que muestra al usuario alguna funcionalidad o presentación.
          .tarjeta.color-modal.p-3(x="50.4%" y="90.5%" numero="")
            p Reunión de usuarios que examinan y sugieren algo sobre la funcionalidad del <em>software</em>. 
          .tarjeta.color-modal.p-3(x="28.3%" y="73.6%" numero="")
            p Diálogo dirigido entre los interesados, individual o grupal.

    p En el desarrollo de <em>software</em>, la recopilación de requisitos se refiere a identificar y documentar los requisitos del sistema de los usuarios, clientes o partes interesadas. Existen para esta tarea técnicas tradicionales y otras más modernas o ágiles. A continuación, en la infografía conocerá las técnicas ágiles más usadas en la elicitación de requisitos de <em>software</em>.



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-55.svg')
          .tarjeta.color-modal-2.p-3.color-dos(x="30%" y="28%" numero="")
            p.text-white Reúne clientes y usuarios para formular problemas y explorar soluciones, para que desarrollen juntos mediante talleres colaborativos.
          .tarjeta.color-modal-2.p-3(x="52%" y="9%" numero="")
            p.text-white Observar al cliente en su que hacer diario, puedes ser pasiva o activa.
          .tarjeta.color-modal-2.p-3(x="73.5%" y="26.7%" numero="")
            p.text-white Sirve para examinar el mercado y el estado del arte, determina si el <em>software</em> será competitivo o no.
          .tarjeta.color-modal-2.p-3(x="74%" y="71.6%" numero="")
            p.text-white Se arma una historia resumen, con la descripción sencilla sobre la funcionalidad o necesidad del cliente.
          .tarjeta.color-modal-2.p-3(x="51.6%" y="90.5%" numero="")
            p.text-white Se usa para aprender del <em>software</em> en uso, para reemplazarlo o sacar una nueva versión. 
          .tarjeta.color-modal-2.p-3(x="30.3%" y="73.6%" numero="")
            p.text-white Es un desarrollo interactivo para construcción de prototipos mediante aplicaciones <em>CASE (Computer Aided Software Engineering).</em>

    p.mb-5 <b>Mapeo de historias de usuarios</b>

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-md-4.mb-5.cuadro-derecha-2
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-2
            .col-lg-4.mb-1.mb-lg-0
              figure.posicion_imagen_3
                img(src='@/assets/curso/temas/tema1/img-56.svg')
            .col-lg-8
              .bloque-texto-a__texto.p-1
                p.p-3 Los requerimientos desde la perspectiva del usuario se cuentan como una historia que resume el rol y los cómo, por qué y cuándo de una característica del <em>software</em>, mediante una descripción sencilla y corta, al menos dos oraciones escritas y diálogos sobre la funcionalidad o necesidad del cliente que se hagan con el equipo de desarrollo; es una forma conveniente, efectiva y popular para escribir requerimientos. 

    p.mb-5 El propósito del mapeo de historias es facilitar el descubrimiento de productos y la priorización de los esfuerzos de desarrollo. Se logra colocando las acciones y tareas del usuario en un mapa que se usa para mantenerlas en contexto (Digité, 2020). Para escribir historias de usuario usa una tarjeta con los tres componentes centrados en el valor que se busca obtener.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img-57.svg").img400.m-auto
      .col-lg-8
        SlyderF.custom.mb-5.p-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img-58.svg").img-100    
            h5.text-center.mb-3 Rol      
            p.text-center.text-small.mb-2 Persona o grupo enfocado en su rol o papel dentro del proyecto.

          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img-59.svg").img-100 
            h5.text-center.mb-1 Lo que se quiere      
            p.text-center.text-small.mb-0 (Objetivo, comportamiento, funcionalidad o característica) lo que se busca que haga o cumpla esta historia de usuario.

          .tarjeta.tarjeta--slyder.p-2
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img-60.svg").img-100 
            h5.text-center.mb-1 Para poder      
            p.text-center.text-small.mb-0 (Motivo, razón, valor, beneficio) escribir este propósito ayuda a los desarrolladores a entender mejor la funcionalidad, aunque algunas veces sea evidente.

          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img-61.svg").img-100  
            h5.text-center.mb-2 El por qué       
            p.text-center.text-small.mb-0 Después del <b>haga-esto</b> en la historia de usuario define los criterios de aceptación o de satisfacción.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.p-3.color-cajon-1.mb-5
          p La historia de usuario es un compromiso con el cliente que evitará diferencias sobre lo que se quiere. En la siguiente figura se encuentra la tarjeta para definir y sistematizar las historias de usuarios.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Figura 5.</b> Modelo de tarjeta para capturar historias de usuario
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-62.svg')
          figcaption.color-caption-1   Nota. Adaptada de Plantilla para las historias de usuario. Scrumízate (2017).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img-63.svg")
      .col-lg-10
        p Los criterios de aceptación consignados en la tarjeta permitirán la futura evaluación de la implementación, las pruebas a ejecutar y los puntos de vista para entender el trabajo a realizar, delimitar lo indispensable y definir cómo las funciones del sistema van a interactuar con el usuario.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src="@/assets/curso/temas/tema1/img-64.svg")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.p-3.color-cajon-3.mb-5
          p El mapa de historias captura las perspectivas de los usuarios, descompone los requerimientos de las historias en una secuencia como parte del flujo de trabajo, agrupándolas en temas relacionados y dándoles prioridad desde el punto de vista de usabilidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Figura 6.</b> Tablero con mapa de historias
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-65.svg')
          figcaption.color-caption-1  Nota. Adaptada de <em>User stories with examples and a template.</em> REHKOPF (2021).

    .tarjeta.color-tar-1.mb-5
      .row.justify-content-between.align-items-center
        .col-md.col-lg-8
          p.ms-5 Las historias de usuario son útiles para involucrar a los clientes en las actividades iniciales de obtención de requisitos, pero pueden carecer de integridad, haciendo difícil juzgar si son suficientes para cubrir todos los requisitos esenciales del sistema.
        .col-8.col-sm-5.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/img-66.svg")

    .tarjeta.color-tar-2.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-5.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/img-67.svg")
        .col-md.col-lg-8
          h3.ms-2 Diagramas de casos de uso
          p.ms-2.me-4 Se introduce el Lenguaje de Modelado Unificado (UML) un estándar usado para la representación visual tanto de los objetos, estados y procesos dentro de un sistema. Puede parecer lejano a la analítica de datos, pero al servir como lenguaje de modelado de <em>software</em>, ayuda a los desarrolladores a presentar la descripción del sistema de forma comprensible para los demás interesados.

    .tarjeta.color-tar-1.mb-5
      .row.justify-content-around.align-items-center
        .col-md.col-lg-8
          p.ms-5 El caso de uso es una descripción formal de las acciones de un sistema desde el punto de vista del cliente/usuario y representa cada uno de los requisitos funcionales del sistema, también especifica el comportamiento de dicha funcionalidad de dos formas: básica sin errores y extendida con los errores que puedan ocurrir.
        .col-8.col-sm-5.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/img-68.svg")

    .row.justify-content-center
      .col-lg-10
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-69.svg')

          div(x="20%" y="19%" numero="+")
            .tarjeta.p-4
              .row
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img-70.svg')
                .col-lg-9
                  .h4 Funcionalidad
                  p.mb-3 La funcionalidad se escribe en una plantilla con lenguaje natural e incluye información:
                  p.ms-3  ●  Identificador
                  p.ms-3  ●  Nombre del caso
                  p.ms-3  ●  Actores involucrados
                  p.ms-3  ●  Precondiciones, lo que tiene que cumplirse o hacerse antes de la ejecución del caso.
                  p.ms-3  ●  Postcondiciones, lo que se debe cumplir después de ejecutar el caso de uso.
                  p La descripción del flujo de eventos determina qué hace el sistema y qué interacción tiene con los actores, para entregar la funcionalidad completa.

          div(x="43%" y="32%" numero="+")
            .tarjeta.p-4
              .row
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img-71.svg')
                .col-lg-9
                  .h4 Reglas para construir casos de uso:
                  p.ms-3  ●  Relacionar mínimo un actor.
                  p.ms-3  ●  Cada actor representa un rol, esto significa que si un actor interactúa con el sistema de diferentes maneras (asumiendo diferentes papeles), estará representado por varios actores en los diferentes casos de uso.
                  p.ms-3  ●  Es un iniciador, es decir que responde a acciones del actor e inicia una secuencia de acciones.
                  p.ms-3  ●  Su resultado es relevante, depura los requisitos que tienen valor intrínseco. Si no aporta valor se llama caso de abuso, ya que especifica cosas que el actor no debería hacer.

          div(x="78%" y="38%" numero="+")
            .tarjeta.p-4
              .row
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img-72.svg')
                .col-lg-9
                  .h4 Plantilla de casos de uso
                  p.mb-3 Los casos de uso enfocan el proceso de desarrollo debido a que varias actividades posteriores, como el diseño y pruebas, parten de ellos. 

    p.mb-5 A continuación, se encuentra una plantilla que contiene las especificaciones esenciales para escribir casos de uso.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Tabla 3.</b> Plantilla para escribir el caso de uso
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-74.svg')
          figcaption.color-caption-1 Nota. Adaptada de Casos de uso y diagramas de casos de uso. Universitat Politècnica de València-UPV (2021). 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img-75.svg")
      .col-lg-10
        p Los diagramas de casos de uso ilustran la funcionalidad proporcionada por una unidad del sistema, representan gráficamente los diferentes casos de uso del sistema y muestran las interacciones entre estos y los actores. No incluye detalles sobre implementación, interacción interna o restricciones de orden entre estos. Capturan los requisitos funcionales del sistema a desarrollar y sus elementos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img-76.png").img400.m-auto
      .col-lg-8
        SlyderF.custom.mb-5.p-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src="@/assets/curso/temas/tema1/img-77.svg").img-100    
            h5.text-center.mb-4 Entorno del sistema y nombre del diagrama.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src="@/assets/curso/temas/tema1/img-78.svg").img-100 
            h5.text-center.mb-4 Casos de uso, el conjunto de requisitos funcionales.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img-79.svg").img-100 
            h5.text-center.mb-3 Actor o actores externos al sistema y que interactúan con este.

          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img-80.svg").img-100  
            h5.text-center.mb-2 Líneas de comunicación entre los elementos y que expresan una relación de inclusión, extensión y herencia.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src="@/assets/curso/temas/tema1/img-81.svg").img-100  
            h5.text-center.mb-3 La relación entre los varios actores solo es de herencia.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Figura 7.</b> Ejemplo de diagrama de caso de uso
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-82.svg')
          figcaption.color-caption-1 Nota. Reproducida de Casos de uso y diagramas de casos de uso. Universitat Politècnica de València-UPV (2021).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p En la figura anterior se ven los elementos del diagrama: el rectángulo que representa el sistema y dentro de este los casos de uso que indican sus funciones; las figuras representan los actores externos al sistema. Las relaciones entre actor y caso de uso se dibujan con una línea simple. Las flechas etiquetadas representan las relaciones entre los casos de uso. La relación "incluir" indica que un caso de uso es necesitado por otro para poder cumplir una tarea y que el primero puede realizar todos los eventos del caso incluido. La relación "extender" indica opciones que pueden o no ejecutarse para cierto caso de uso.

        p Por ejemplo, solo el ACTOR 1 (Socio) puede ejecutar todos los casos de uso, el ACTOR 2 (Cliente) no puede ejecutar el caso de uso REPETIR ÚLTIMA COMPRA. El caso PAGO CON TARJETA DEBITO siempre incluye el caso IDENTIFICAR LA TARJETA, pero el caso OFRECER AYUDA es una alternativa, finalmente IDENTIFICAR LA TARJETA se puede hacer con IDENTIFICAR CON PIN o IDENTIFICAR POR CONTACTO que involucra el actor LECTOR NFC.
      
        .cajon.p-4.mb-4.color-cajon-1.mb-5
          p Los diagramas sirven para identificar actores externos y delimitar el sistema, indicando las relaciones y complementándose con las plantillas que describen cada uno de los casos de uso ilustrados.

      .col-lg-4
        figure
          img.mb-5(src='@/assets/curso/temas/tema1/img-83.svg')

    p.mb-5 <b>Para afianzar el aprendizaje del lenguaje UML se invita a ver el siguiente video</b>
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/hlK2aN6Osjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 <b>Mapas de procesos y diagramas de flujo</b>  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img-84.svg') 
      .col-lg-7
        .cajon-b.color-primario.p-3.mb-5.color-pos-2
          p.mb-0 Los mapas de procesos se muestran visualmente mediante pasos y decisiones, también se conocen como diagramas de flujo que indican el sentido de las tareas, las decisiones que deben tomarse y las relaciones fundamentales entre los pasos. Ayuda a organizar los procesos y los hace entendibles. 

          p El uso de mapas de procesos mejora la comunicación y documentación, ayudando al equipo de trabajo a identificar cuellos de botella, repeticiones y demoras.

          p La figura muestra los elementos del diagrama de flujo que incluyen acciones, pasos de actividades, puntos de decisión, funciones, entradas o salidas, personas involucradas, cuantificación del proceso y tiempo necesario. Cada elemento se representa con un símbolo específico, como una flecha, un círculo, un diamante, un recuadro, un óvalo o un rectángulo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Figura 8.</b> Símbolos del diagrama de flujo (procesos)
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-85.svg')
          figcaption.color-caption-1 Nota. Adaptada de ¿Cuáles son tus necesidades de creación de mapas de procesos? Lucidchart (2021). 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img-86.svg")
      .col-lg-10
        p Los mapas de procesos facilitan la comprensión de sus características, permitiendo formular preguntas importantes para mejorar y generar datos útiles para la solución de problemas. Tipos de mapas de procesos:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-87.svg') 
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-88.svg')
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-89.svg')
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-90.svg')
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-91.svg')
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-92.svg')
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-93.svg')

    separador 

    #t_1_4.titulo-segundo.color-acento-contenido.pb-2
      h3 1.4 Salidas y entregables

    p.mb-5 Hasta el momento, se han definido los requerimientos para definir el software, desde la concepción del producto hasta las fases iniciales del desarrollo. El resultado de este trabajo son varios documentos, incluyendo el acuerdo comercial y las plantillas siguiendo las buenas prácticas. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Figura 9.</b> Procesos de la ingeniería de requerimientos
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-94.svg')
          figcaption.color-caption-1 Nota. Adaptada de Proceso de ingeniería de requisitos. Sommerville, (2016).

    p.mb-5 Al ser esta la fase inicial del proyecto, sus salidas alimentan las etapas sucesivas con varios productos:

    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img.my-3(src="@/assets/curso/temas/tema1/img-95.png")      
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Desarrollar la visión general del sistema") <b>Requisitos generales del sistema,</b> especificar las características principales del <em>software</em> a desarrollar.<br><b>Casos de uso del sistema,</b> describir cómo utilizarán el <em>software</em> los clientes.

          p(numero="2" titulo="Documentar los requisitos del sistema") ● <b>Diagramas de historia,</b> detallar cómo debe interactuar el <em>software</em> con los usuarios, para que puedan realizar sus tareas dentro del modelo de negocio.<br>● <b>Requisitos funcionales,</b> Enunciarlos para que a partir de ellos pueda implementarse una solución. Tipos:<br> - Requisitos de información, describen que deberá almacenar y gestionar el <em>software</em> para dar soporte a los procesos de negocio.<br> - Reglas de negocio, incluyen las reglas o restricciones de cumplimiento obligatorio.<br> - Requisitos de conducta, es decir, las capacidades o interacciones con el usuario.<br>● <b>Requisitos no funcionales,</b> las características de calidad del sistema.<br>● <b>Requisitos de integración,</b> establece cuáles servicios deben integrarse al <em>software</em>.<br>● <b>Restricciones técnicas,</b> limitaciones de carácter tecnológico que debe cumplir el sistema.

          p(numero="3" titulo="Analizar los requisitos del sistema") ● <b>Arquitectura del sistema.</b> Son los estándares y modelos que impactan el resto del desarrollo.<br>● <b>Modelo estático.</b> Constituye el modelo del sistema a desarrollar.<br>● <b>Modelo dinámico/funcional.</b> Detecta problemas con los casos de uso y el diseño de la capa de lógica.<br>●<b>Interfaz de usuario.</b> Relevante para la validación de los requisitos con clientes y usuarios.<br>●<b> Interfaz de servicios.</b> Importante si el sistema va a tener una interfaz que puede vulnerarse.<br>●<b> Problemas en los requisitos.</b> Identificados mediante el análisis y priorización. 

          p(numero="4" titulo="Verificar la calidad de los requisitos del sistema") ● <b>Problemas en los requisitos: </b>surgen al verificar la calidad de estos.

          p(numero="5" titulo="Validar los requisitos del sistema") <b>Actas de reuniones,</b> recogen los resultados obtenidos en las sesiones de validación. Si hay aceptación de los interesados, se registra con actas y contratos.<br><br><b>Problemas en los requisitos.</b> identificados y validados entre los interesados.

          p(numero="6" titulo="Registrar problemas en los requisitos") ● <b>Problemas en los requisitos.</b> Se anotan para aclarar su significado o suprimirlos si están duplicados.

          p(numero="7" titulo="Registrar la trazabilidad de los requisitos") ● <b>Especificación de Requisitos del Sistema (ERS).</b> Elabora las matrices de trazabilidad que reflejan las dependencias entre los requisitos y elementos que la componen. Estas se registran dentro del ERS.

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-12.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-modal-1.svg')

    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-md-12.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-modal-2.svg')


    
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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

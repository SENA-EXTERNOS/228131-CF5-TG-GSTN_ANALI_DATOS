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

    PasosB.color-acento-botones.color-fondo-puntos.p-3
      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Concepción</b>

          p.ms-5 El proyecto comienza cuando se identifica una necesidad del negocio o se descubre un mercado o servicio potencial. En esta fase se hace el entendimiento básico del problema, se identifican los usuarios finales y lo que quieren o necesitan, es decir, la naturaleza de la solución.


        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-11.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Indagación u obtención</b>

          p.ms-5 Consiste en preguntarle al cliente, a los usuarios y a los demás interesados cuáles son los objetivos para el sistema, qué se va a lograr, cómo se ajusta a las necesidades del negocio y, finalmente, cómo va a usarse en la operación diaria. La parte más importante de la indagación es entender los objetivos del negocio, estos pueden ser funcionales o no-funcionales.
          .row.ms-5
            .col-auto 
              p.mt-4 <b>Problemas que pueden surgir en esta etapa</b>
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span Abrir modal
                .indicador--click(v-if="mostrarIndicador")
                

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-12.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Elaboración</b>
          
          p.ms-5 Consiste en desarrollar, expandir y refinar la información obtenida del cliente durante la concepción e indagación. Debe identificar aspectos funcionales, del comportamiento e información del software. La elaboración toma los escenarios de usuario y los refina. Cada escenario o caso describe cómo el usuario va a interactuar con el sistema y se analiza para extraer las clases o entidades de negocio visibles al usuario. Se definen los atributos de cada clase analizada y los servicios que requiere cada una.

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-13.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Negociación</b>

          p.ms-5 Es usual que clientes y usuarios pidan más de lo que puede lograrse con la limitación de recursos del negocio. También es común que distintos clientes o usuarios propongan requerimientos conflictivos con el argumento de que su versión es “esencial para nuestras necesidades”.

          p.ms-5 Para conciliar durante la fase de negociación, se pide a clientes, usuarios y otros interesados que prioricen sus requerimientos y que analicen los conflictos. Mediante un enfoque iterativo se da prioridad a los requerimientos, evaluando su costo y riesgo, y se enfrentan los conflictos internos; algunos se eliminan, se combinan o se modifican de modo que ambas partes ganan pues se logra un acuerdo satisfactorio.

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-14.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Especificación</b>

          p.ms-5 Puede ser un documento, varios modelos gráficos, un modelo matemático, un conjunto de casos de uso, un prototipo o cualquier combinación de éstos. Puede usarse una plantilla estándar, lo que lleva a presentar los requerimientos en forma consistente y comprensible. Pero en ocasiones es necesario ser flexible cuando se desarrolla una especificación. Para sistemas grandes conviene realizar un documento escrito que combine descripciones en un lenguaje natural con modelos gráficos, pero para sistemas pequeños quizá todo lo que se requiera sean casos de uso.

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-15.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Validación</b>          

          p.ms-5 Consiste en evaluar la calidad del resultado generado desde la ingeniería de requerimientos analizando las especificaciones para garantizar que todos han sido enunciados sin ambigüedades; que se detectaron y corrigieron las inconsistencias, omisiones y errores, y que el resultado del trabajo se presenta conforme a los estándares establecidos para el proceso, el proyecto y el producto. 

          p.ms-5 Ejemplos de los problemas que ocurren durante la validación de requisitos y que parecen inocuos:

          p.ms-5 ●  El software debe ser fácil de usar.
          p.ms-5 ●  La probabilidad de una intrusión exitosa no autorizada en la base de datos debería ser menor que 0.0001.

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-16.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 El primer requisito es vago para los desarrolladores que lo prueben o evalúen. ¿Qué significa exactamente "fácil de usar"? Para validarlo, debe ser cuantificado o calificado de alguna manera. 

          p.ms-5 El segundo requisito tiene un elemento cuantitativo (“menos de 0.0001”), pero estas pruebas de intrusión son difíciles y consumen mucho tiempo; además, ¿está justificado este nivel de seguridad para la aplicación?, ¿pueden otros requisitos complementarios de seguridad (por ejemplo, protección por contraseña, protocolo de enlace especializado) reemplazar el requisito cuantitativo anotado?

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-17.svg')

      .row(titulo="")
        .col-md-7.mb-4.mb-md-0.mt-5
          p.ms-5 <b>Administración</b>

          p.ms-5 Todos los requerimientos de software cambian, y el deseo o necesidad de modificarlos continúa durante el ciclo de vida del sistema. La administración es un conjunto de actividades que ayudan al equipo del proyecto a identificar, controlar hacer seguimiento y modificaciones en cualquier momento del desarrollo del proyecto.

          p.ms-5 La importancia de la identificación de requerimientos radica en que define claramente lo que se va a hacer, entregando un documento de requisitos de software que servirá como insumo de entrada a las siguientes fases del proyecto, de manera que una falla inicial se propagará en las siguientes fases de elaboración y construcción, haciendo que su solución sea mucho más costosa que haberla detectado y corregido inicialmente.

        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-18.svg')

    separador 

    #t_1_2.titulo-segundo.color-acento-contenido.pb-2
      h3 1.2 Recogida de requisitos


    separador 

    #t_1_3.titulo-segundo.color-acento-contenido.pb-2
      h3 1.3 Herramientas y técnicas


    separador 

    #t_1_4.titulo-segundo.color-acento-contenido.pb-2
      h3 1.4 Salidas y entregables

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Modal uno
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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

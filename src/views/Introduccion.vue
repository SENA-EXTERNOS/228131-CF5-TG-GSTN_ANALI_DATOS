<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .cajon-b.color-primario.p-3.mb-5.intro
          p.mb-4 Apreciado aprendiz, bienvenido a este componente formativo donde se abordan y aprenden temas como el de la recaudación de requisitos para el <i>software</i>, con sus ejes temáticos, formalidades para los negocios, y las herramientas necesarias para dicha recolección. También se incluyen las principales actividades de la ingeniería de requerimientos, desde la toma de información al cliente, pasando por el análisis, la discusión y la validación, así como la relación que hay entre estas actividades y otros diferentes aspectos. Al finalizar, habrá adquirido los conocimientos para desenvolverse en el campo de este tipo de recolección de <i>software</i>. 

          p ¡Le deseamos una experiencia de aprendizaje significativa y memorable!

      .col-lg-3
        figure
          img(src="@/assets/curso/temas/img-intro.png")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

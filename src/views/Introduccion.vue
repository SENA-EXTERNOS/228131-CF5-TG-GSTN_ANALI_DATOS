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
          p.mb-4 Estimado aprendiz, reciba una cordial bienvenida a este recurso de aprendizaje. El presente componente formativo está orientado a la recolección de requisitos de software. Se abordan como ejes temáticos, los requisitos del negocio, así como las herramientas para dicha  recolección. Asimismo, las principales actividades de la ingeniería de requerimientos, desde la toma de información al cliente, pasando por el análisis, la discusión y la validación, así como la relación que hay entre estas actividades y otros aspectos más. Al finalizar, obtendrá los conocimientos para desenvolverse en el campo de este tipo de recolección de <em>software</em>. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje:

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

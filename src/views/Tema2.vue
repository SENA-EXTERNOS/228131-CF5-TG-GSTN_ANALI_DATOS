<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas y técnicas para recolección de requisitos

    

    separador 

    #t_2_1.titulo-segundo.color-acento-contenido.pb-2
      h3 2.1 Entrevistas con patrocinador y usuarios
    separador 

    #t_2_2.titulo-segundo.color-acento-contenido.pb-2
      h3 2.2 Técnicas de creatividad grupal - Lluvia de ideas
    separador 

    #t_2_3.titulo-segundo.color-acento-contenido.pb-2
      h3 2.3 Cuestionarios y encuestas
    separador 

    #t_2_4.titulo-segundo.color-acento-contenido.pb-2
      h3 2.4 Análisis de tareas y de dominio
    separador 

    #t_2_5.titulo-segundo.color-acento-contenido.pb-2
      h3 2.5 Fabricación del modelo prototipo
    separador 

    #t_2_6.titulo-segundo.color-acento-contenido.pb-2
      h3 2.6  Generación de documentación 

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

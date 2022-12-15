<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Desarrollo de contenido Entendiendo los requisitos del negocio

    separador 

    #t_1_1.titulo-segundo.color-acento-contenido.pb-2
      h3 1.1 Estudio de viabilidad del sistema y sus funcionalidades



    separador 

    #t_1_2.titulo-segundo.color-acento-contenido.pb-2
      h3 1.2 Recogida de requisitos


    separador 

    #t_1_3.titulo-segundo.color-acento-contenido.pb-2
      h3 1.3 Herramientas y técnicas


    separador 

    #t_1_4.titulo-segundo.color-acento-contenido.pb-2
      h3 1.4 Salidas y entregables
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<template>
  <div class="container">

    <div class="row-fluid">
      <select class="selectpicker" data-show-subtext="true" data-live-search="true">
        <slot></slot>
      </select>
     
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Initialiser le plugin Bootstrap-select ici
    $('.selectpicker').selectpicker();
  }
}
</script>

<style scoped>
/* Inclure les styles de Bootstrap-select */
@import url("//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css");
@import url("//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.3/css/bootstrap-select.min.css");
/* Ajouter des styles personnalisés si nécessaire */
</style>

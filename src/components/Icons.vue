<template>
  <svg  class="icon" @click="$emit('click',$event)">
    <use :xlink:href="'#icon-'+name"></use>
  </svg>
</template>

<script lang="ts">

  import '../plugin/svg.js'

  export default {
    props: ['name'],
    name: 'Icon',

  };
</script>

<style lang="scss" >
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>

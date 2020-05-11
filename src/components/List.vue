<template>
  <div class="col" :class="[`col-${span}`]" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "List",
    props:{
      span:{
        type:[Number,String]
      }
    }
  };
</script>



<style scoped lang="scss">
  .col {
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }

  }
</style>

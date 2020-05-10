<template>
  <button class="g-button">
    <slot></slot>
  </button>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }
</script>


<style lang="scss" scoped>

  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
  &:hover {
     border-color: var(--border-color-hover);
   }
  &:active {
     background-color: var(--button-active-bg);
   }
  &:focus {
     outline: none;
   }
  }
</style>


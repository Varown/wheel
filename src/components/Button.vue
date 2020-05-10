<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <Icon class="icon" v-if="icon" :name="icon"/>
    <span class="content">
      <slot></slot>
    </span>

  </button>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Icon from '@/components/Icons.vue';
  @Component({
    components: {Icon}
  })

  export default class Button extends Vue {
    @Prop() icon!: string;
    @Prop({default: 'left'}) iconPosition!: string;

  }
</script>


<style lang="scss" scoped>

  .g-button {
    display:inline-flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    vertical-align: middle;
  &:hover {
     border-color: var(--border-color-hover);
   }
  &:active {
     background-color: var(--button-active-bg);
   }
  &:focus {
     outline: none;
   }
    > .icon{

      padding-top: .1em;
      order: 1;
      margin-right: .1em;
    }
    > .content{
      order: 2;
    }
    &.icon-right{
      > .icon{
        width: 1em; height: 1em;
        padding-top: .1em;
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
      > .content{
        order: 1;
      }
    }
  }
</style>


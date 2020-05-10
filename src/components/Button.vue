<template>
  <button class="g-button"
          @click="$emit('click')"
          :class="{[`icon-${iconPosition}`]:true}">
    <Icon class="icon" v-if="icon&&!loading" :name="icon"/>
    <Icon class="loading icon" v-if="loading"  name="loading"/>
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
    @Prop() loading!: boolean;
  }
</script>


<style lang="scss" scoped>
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
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
        padding-top: .1em;
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
      > .content{
        order: 1;
      }
    }
    .loading{
      padding-top: .1em;
      animation:spin 2s infinite linear ;
    }
  }
</style>


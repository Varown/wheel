<template>
  <button class="g-button"
          @click="$emit('click')"
          :class="{[`icon-${iconPosition}`]:true}">
    <Icon class="icon" v-if="icon&&!loading" :name="icon"/>
    <Icon class="loading icon" v-if="loading"  name="loading"/>
    <span class="content">
      <slot/>
    </span>
  </button>

</template>


<script>
  import Icon from "./Icons";
  export default {
    name: "Button",
    components: {
      Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: "left",
        validator(value) {
          return value === "left" || value === "right";
        }
      }
    }
  };
</script>

<style lang="scss">
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  $border-color-hover: #666;
  $border-color: #999;
  $border-radius: 4px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $button-active-bg: #eee;
  $button-bg: white;
  $button-height: 32px;
  $color: #333;
  $font-size: 14px;
  $input-height: 32px;
  $red: #F1453D;
  .g-button { font-size: $font-size; height: $button-height; padding: 0 1em;
    border-radius: $border-radius; border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;
    &:hover { border-color: $border-color-hover; }
    &:active { background-color: $button-active-bg; }
    &:focus { outline: none; }
    > .content { order: 2; }
    > .icon { order: 1; margin-right: .1em; }
    &.icon-right {
      > .content { order: 1; }
      > .icon { order: 2; margin-right: 0; margin-left: .1em;}
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }
</style>

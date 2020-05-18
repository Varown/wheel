<template>
   <label class="wrapper" :class="{error}">
     <input  type="text" :value="value" :disabled="disabled" :readonly="readonly"
             @change="$emit('change', $event.target.value)"
             @input="$emit('input', $event.target.value)"
             @focus="$emit('focus', $event.target.value)"
             @blur="$emit('blur', $event.target.value)"
     >
     <template v-if="error" >
       <Icon name="error"/>
       <span class="errorMessage"> {{error}}</span>
     </template>

   </label> 

</template>


<script>
  import Icon from './Icons'

  export default {
    components: {Icon},
    name: 'Input',
    props: {
      value: {
        type: [String, Date]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    },
    methods:{
      setRawValue(value){
        this.$refs.input.value = value
      }
    }
  }
</script>


<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .wrapper { font-size: $font-size; display: inline-flex;
    align-items: center;
    margin-left: 2px;
    > :not(:last-child) {margin-right: .5em; }
    > input { height: 32px; border: 1px solid $border-color; border-radius: 4px; padding: 0 8px; font-size: inherit;
      &:hover { border-color: $border-color-hover; }
      &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
      &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed; }
    }
    &.error {
      > input { border-color: $red; }
      .icon{fill: red;}
      .errorMessage { color: $red; }
    }

  }
</style>
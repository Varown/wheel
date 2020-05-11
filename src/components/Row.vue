<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>




<script lang="js">
  export default {
    name: 'Row',
    props: {
      gutter: {
        type: [Number, String]
      },
    },
    mounted () {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    },
    computed: {
      rowStyle () {
        const {gutter} = this
        return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
      }
    },
  }
</script>

<style scoped lang="scss">
  .row{
    display: flex;

    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
  }
</style>
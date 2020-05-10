<template>
  <div >
<Button>按钮</Button>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  @Component({
    components: {Button}
  })
  export default class Home extends Vue {

  }
</script>
<template>
  <div >
    <Button>
      <Icon name="left"/>
    </Button>

  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import Icon from '@/components/Icons.vue';
  @Component({
    components: {Icon, Button}
  })
  export default class Home extends Vue {

  }
</script>
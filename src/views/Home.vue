<template>
  <div >
    <Button icon="right"  icon-position="right" loading="true">
      按钮
    </Button>
    <Button icon="settings"  >
      按钮
    </Button>
    <Button >
      按钮
    </Button>
    <Icon name="left" />
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
<template>
  <div >
    <Button icon="right"  icon-position="right">
      按钮
    </Button>
    <Button icon="settings" @click="loading=!loading"
            :loading="loading" >
      按钮
    </Button>
    <Button >
      按钮
    </Button>
    <ButtonGroup>
      <Button icon="left">上一页</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button icon="right" icon-position="right">下一页</Button>
    </ButtonGroup>

  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import Icon from '@/components/Icons.vue';
  import ButtonGroup from '@/components/ButtonGroup.vue';
  @Component({

    components: {ButtonGroup, Icon, Button}
  })
  export default class Home extends Vue {
     loading=false
  }
</script>
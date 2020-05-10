<template>
  <div id="app">
    <div class="box">
      <Input value="你好" :disabled="true"/>

      <Input value="哈哈"/>
      <Input v-model="updateValue"/>
      {{updateValue}}
    </div>

    <div class="box">
      <Input value="" error="姓名不可少于两个字"/>
    </div>

    <div class="box">
      <Button icon="right" icon-position="right">
        按钮
      </Button>
      <Button icon="settings" @click="loading=!loading"
              :loading="loading">
        按钮
      </Button>
      <Button>
        按钮
      </Button>


      <ButtonGroup>
        <Button icon="left">上一页</Button>
        <Button>更多</Button>
        <Button icon="right" icon-position="right">下一页</Button>
      </ButtonGroup>
    </div>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import Icon from '@/components/Icons.vue';
  import ButtonGroup from '@/components/ButtonGroup.vue';
  import Input from '@/components/Input.vue';

  @Component({

    components: {Input, ButtonGroup, Icon, Button}
  })
  export default class Home extends Vue {
    loading = false;
    updateValue='你好'
  }
</script>
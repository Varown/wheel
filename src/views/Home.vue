<template>
  <div id="app">

    <button @click="showToast">点我</button>


    <Row>
      <List span="23" offset="1" :narrow-pc="{span:12, offset:12}">
        <div class="demo"></div>
      </List>
    </Row>
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
<style>
  .demo {
    background: #ddd;
    border: 1px solid #666;
    height: 50px;
  }
</style>

<script lang="js">

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import Icon from '@/components/Icons.vue';
  import ButtonGroup from '@/components/ButtonGroup.vue';
  import Input from '@/components/Input.vue';
  import Row from '@/components/Row.vue';
  import List from '@/components/List.vue';
  import Toast from '@/components/Toast.vue';
  import Plugin from  '@/plugin/plugin.js'
  Vue.use(Plugin)
  @Component({

    components: {Toast, List, Row, Input, ButtonGroup, Icon, Button}
  })
  export default class Home extends Vue {

    loading = false;
    updateValue='你好';
    showToast(){
      this.$toast('我是message')
    }
  }
</script>
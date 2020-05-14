<template>
  <div id="app">
    <div class="box">
    <Collapse single>
      <CollapseItem title="标题一">内容一</CollapseItem>
      <CollapseItem title="标题二">内容二</CollapseItem>
      <CollapseItem title="标题三">内容三</CollapseItem>
    </Collapse>
    </div>


    <div style="overflow: hidden;
    border: 1px solid green;margin: 40px; padding: 5px;">
      <Popover position="right" trigger="click" >
        <template slot-scope="{close}" slot="content" >
          <div>popover内容</div>
          <Button @click="close">关闭</Button>
        </template>
        <Button>点我</Button>
      </Popover>
      <Popover position="left" trigger="click">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <Button>点我</Button>
      </Popover>
    </div>
    <div style="overflow: hidden;
    border: 1px solid green;margin: 40px; padding: 5px;">
      <Popover position="right" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <Button>点我</Button>
      </Popover>
      <Popover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <Button>点我</Button>
      </Popover>
    </div>
    <Tabs :selected.sync="selectedTab">
        <TabsHead>
          <template slot="actions">
            <Button>设置</Button>
          </template>
          <TabsItem name="woman">
            美女
          </TabsItem>
          <TabsItem name="finance" disabled>财经</TabsItem>
          <TabsItem name="sports">体育</TabsItem>
        </TabsHead>

        <TabsBody>
          <TabsPane name="woman">美女相关资讯</TabsPane>
          <TabsPane name="finance">财经相关资讯</TabsPane>
          <TabsPane name="sports">体育相关资讯</TabsPane>
        </TabsBody>

      </Tabs>
    <div class="box">
      <Button @click="showToast"> 点我</Button>
    </div>
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

  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Button from "@/components/Button.vue";
  import Icon from "@/components/Icons.vue";
  import ButtonGroup from "@/components/ButtonGroup.vue";
  import Input from "@/components/Input.vue";
  import Row from "@/components/Row.vue";
  import List from "@/components/List.vue";
  import Toast from "@/components/Toast.vue";
  import Plugin from "@/plugin/plugin.js";
  import TabsHead from "@/components/TabsHead";
  import TabsBody from "@/components/TabsBody";
  import TabsItem from "@/components/TabsItem";
  import TabsPane from "@/components/TabsPane";
  import Tabs from "@/components/Tabs";
  import Popover from "@/components/Popover";
  import Collapse from "@/components/Collapse";
  import CollapseItem from "@/components/CollapseItem";

  Vue.use(Plugin);
  @Component({

    components: {
      CollapseItem,
      Collapse,
      Popover,
      Tabs, TabsPane, TabsItem, TabsBody, TabsHead, Toast, List, Row, Input, ButtonGroup, Icon, Button
    }
  })
  export default class Home extends Vue {

    loading = false;
    updateValue = "你好";
    selectedTab = "sports";

    showToast() {
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
        position: "bottom",
        enableHtml: false,
        closeButton: {
          text: "已充值",
          callback() {
            console.log("他说已经充值智商了");
          }
        },
      });
    }

  }

</script>
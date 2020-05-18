<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <tabs :selected="selected">
      <tabs-head>
        <tabs-item name="1">1</tabs-item>
        <tabs-item name="2">2</tabs-item>
      </tabs-head>
      <tabs-body>
        <tabs-pane name="1">content 1</tabs-pane>
        <tabs-pane name="2">content 2</tabs-pane>
      </tabs-body>
    </tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Tabs from "../../../src/components/Tabs";
  import TabsBody from "../../../src/components/TabsBody";
  import TabsHead from "../../../src/components/TabsHead";
  import TabsItem from "../../../src/components/TabsItem";
  import TabsPane from "../../../src/components/TabsPane";

  export default {
    components: {Tabs, TabsBody, TabsHead, TabsItem, TabsPane},
    data() {
      return {
        selected: "1",
        content: `
          data:{
            selected: '1'
          }

      <tabs :selected="selected">
      <tabs-head>
        <tabs-item name="1">1</tabs-item>
        <tabs-item name="2">2</tabs-item>
      </tabs-head>
      <tabs-body>
        <tabs-pane name="1">content 1</tabs-pane>
        <tabs-pane name="2">content 2</tabs-pane>
      </tabs-body>
    </tabs>
      `.replace(/^ {8}/gm, "").trim()
      };
    }
  };
</script>
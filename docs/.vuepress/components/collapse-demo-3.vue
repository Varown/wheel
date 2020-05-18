<template>
  <div style="padding-top: 16px;">
    <h2>默认打开</h2>
    <p>
      <strong>预览</strong>
    </p>

    <Collapse single :selected.sync="selectedItem">
      <CollapseItem title="标题一" name="1">默认打开</CollapseItem>
      <CollapseItem title="标题二" name="2">内容二</CollapseItem>
      <CollapseItem title="标题三" name="3">默认打开</CollapseItem>
    </Collapse>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Collapse from '../../../src/components/Collapse'
  import CollapseItem from '../../../src/components/CollapseItem'

  export default {
    components: {
      Collapse,
      CollapseItem
    },
    data () {
      return {
        selectedItem:['1','3'],
        content: `
        data{selectedItem:['1','3']}
      <Collapse single :selected.sync="selectedItem">
        <CollapseItem title="标题一" name="1">默认打开</CollapseItem>
        <CollapseItem title="标题二" name="2">内容二</CollapseItem>
        <CollapseItem title="标题三" name="3">默认打开</CollapseItem>
    </Collapse>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
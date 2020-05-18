<template>
  <div style="padding-top: 16px;">
    <h2>允许多个</h2>
    <p>
      <strong>预览</strong>
    </p>

    <Collapse :selected.sync="selectedItem">
      <CollapseItem title="标题一" name="1">内容一</CollapseItem>
      <CollapseItem title="标题二" name="2">内容二</CollapseItem>
      <CollapseItem title="标题三" name="3">内容三</CollapseItem>
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
        selectedItem:[],
        content: `
        data () {return {selectedItem:[]}
      <Collapse  :selected.sync="selectedItem">
        <CollapseItem title="标题一" name="1">内容一</CollapseItem>
        <CollapseItem title="标题二" name="2">内容一</CollapseItem>
        <CollapseItem title="标题三" name="3">内容三</CollapseItem>
    </Collapse>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
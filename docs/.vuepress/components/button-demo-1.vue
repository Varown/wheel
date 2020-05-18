<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <Button>默认按钮</Button>
    <Button icon="setting">默认按钮</Button>
    <Button :loading="true">默认按钮</Button>
    <Button disabled>默认按钮</Button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/components/Button'

  export default {
    components: {
       Button
    },
    data () {
      return {
        content: `
          <Button>默认按钮</Button>
          <Button icon="setting">默认按钮</Button>
          <Button :loading="true">默认按钮</Button>
          <Button disabled>默认按钮</Button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
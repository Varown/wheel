<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <Input value="中文"></Input>
    <Input value="中文" disabled></Input>
    <Input value="中文" readonly></Input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Input from '../../../src/components/Input'

  export default {
    components: {Input},
    data () {
      return {
        selected: '1',
        content: `

           <Input value="中文"/>
           <Input value="中文" disabled/>
           <Input value="中文" readonly/>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
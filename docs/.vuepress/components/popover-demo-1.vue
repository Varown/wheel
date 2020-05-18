<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>

    <Popover>
      <Button>上方弹出</Button>
      <template slot="content">
        弹出内容
      </template>
    </Popover>
    <Popover position="bottom">
      <Button>下方弹出</Button>
      <template slot="content">
        弹出内容
      </template>
    </Popover>
    <Popover position="left">
      <Button>左边弹出</Button>
      <template slot="content">
        弹出内容
      </template>
    </Popover>
    <Popover position="right">
      <Button>右边弹出</Button>
      <template slot="content">
        弹出内容
      </template>
    </Popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import Button from '../../../src/components/button'
  import Popover from '../../../src/components/popover'


  export default {
    components: {Button, Popover},
    data () {
      return {
        content: `
           <Popover>
      <Button>上方弹出</Button>
      <template slot="content">
        弹出内容
      </template>
    </Popover>
    <Popover position="bottom">
      <Button>下方弹出</Button>
      <template slot="content">
        弹出内容
      </template>
    </Popover>
    <Popover position="left">
      <Button>左边弹出</Button>
      <template slot="content">
        弹出内容
      </template>
    </Popover>
    <Popover position="right">
      <Button>右边弹出</Button>
      <template slot="content">
        弹出内容
      </template>
    </Popover>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>
<template>
  <div style="padding-top: 16px;">
    <h2>this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <Button @click="$toast('点击弹出提示')">上方弹出</Button>
      <Button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</Button>
      <Button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</Button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .wrapper {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import plugin from '../../../src/plugin/plugin'
  import Button from '../../../src/components/Button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {Button},
    data () {
      return {
        content: `
          <style>
            .wrapper {
              z-index: 30;
            }
          </style>
          <Button @click="$toast('点击弹出提示')">上方弹出</Button>
          <Button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</Button>
          <Button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</Button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
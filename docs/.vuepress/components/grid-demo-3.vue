<template>
  <div style="padding-top: 16px;">
    <h2>设置空隙</h2>
    <p>
      <strong>预览</strong>
    </p>
    <Row class="demoRow" gutter="10">
      <List span="8">
        <div class="demoCol">8</div>
      </List>
      <List span="8" offset="8">
        <div class="demoCol">8</div>
      </List>
    </Row>
    <Row class="demoRow" gutter="10">
      <List span="6" offset="6">
        <div class="demoCol">6</div>
      </List>
      <List span="6" offset="6">
        <div class="demoCol">6</div>
      </List>
    </Row>
    <Row class="demoRow" gutter="10">
      <List span="4">
        <div class="demoCol">4</div>
      </List>
      <List span="4" offset="4">
        <div class="demoCol">4</div>
      </List>
      <List span="4" offset="8">
        <div class="demoCol">4</div>
      </List>
    </Row>
    <Row class="demoRow" gutter="10">
      <List span="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2" offset="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2" offset="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2" offset="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2" offset="2">
        <div class="demoCol">2</div>
      </List>
    </Row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import Row from '../../../src/components/Row'
  import List from '../../../src/components/List'
  export default {
    components: {Row, List},
    data () {
      return {
        content: `
          * {
            box-sizing: border-box;
          }

          <Row class="demoRow" gutter="10">
      <List span="8">
        <div class="demoCol">8</div>
      </List>
      <List span="8" offset="8">
        <div class="demoCol">8</div>
      </List>
    </Row>
    <Row class="demoRow" gutter="10">
      <List span="6" offset="6">
        <div class="demoCol">6</div>
      </List>
      <List span="6" offset="6">
        <div class="demoCol">6</div>
      </List>
    </Row>
    <Row class="demoRow" gutter="10">
      <List span="4">
        <div class="demoCol">4</div>
      </List>
      <List span="4" offset="4">
        <div class="demoCol">4</div>
      </List>
      <List span="4" offset="8">
        <div class="demoCol">4</div>
      </List>
    </Row>
    <Row class="demoRow" gutter="10">
      <List span="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2" offset="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2" offset="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2" offset="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2">
        <div class="demoCol">2</div>
      </List>
      <List span="2" offset="2">
        <div class="demoCol">2</div>
      </List>
    </Row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
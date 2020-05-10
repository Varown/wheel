<template>
  <div class="about">
    <h1>This is an about page</h1>

  </div>
</template>
<script>
  import Vue from "vue";
  import {Component} from "vue-class-component";
  import Button from "../components/Button";
  @Component({
    components: {Button}
  })
  export default class About extends Vue {
  }
</script>
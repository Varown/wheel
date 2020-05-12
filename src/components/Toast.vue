<template>
  <div class="toast" ref="toast">
    <div class="message">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
      </div>
    <div class="line" ref="line"></div>
    <span class="close"  v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      autoClose: {
        type: [Boolean, Number],
        default: 5,
        validator (value) {
          return value === false || typeof value === 'number';
        }
      },
      closeButton:{
        type:Object,
        default:()=>({
          text:"关闭",
          callback:undefined
        })
      },
      enableHtml: {
        type: Boolean,
        default: false
      },

    },
    mounted () {
      this.updateStyles()
      this.execAutoClose()
    },
    methods:{
      updateStyles () {
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      execAutoClose () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      close(){
        this.$el.remove()
        this.$destroy()
      },
      onClickClose(){
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)//this === toast实例
        }

      }

    }
  };
</script>



<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size;min-height: $toast-min-height; line-height: 1.8;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 0 16px;
    .message{
      padding: 8px 0;
    }
    .close{
      padding:0 16px;
      text-align: center;
      flex-shrink: 0;
    }
    .line{
      border:1px #666 solid;
      margin-left: 16px;
      min-height: 100%;
    }
  }

</style>
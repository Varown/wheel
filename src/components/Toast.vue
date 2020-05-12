<template>
  <div class="toast">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line"></div>
    <span class="close"  v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>

  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      autoClose:{
        type:Boolean,
        default:true
      },
      autoCloseDelay:{
        type: Number,
        default: 50
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
    mounted() {
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },this.autoCloseDelay*1000)
      }
    },
    methods:{
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
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size; height: $toast-height; line-height: 1.8;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 0 16px;
    .line{
      border:1px red solid;
      background: red;
      height: 100%;
    }
    .close{
      padding: 5px;
      text-align: center;
      flex-shrink: 0;
    }
  }

</style>
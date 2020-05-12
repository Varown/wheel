import Toast from "../components/Toast";

export default {

  install(Vue, option) {
    Vue.prototype.$toast = function (message) {
      const Constructor = Vue.extend(Toast);
      const toast = new Constructor({
        propsData:{
          closeButton: {
            text:'爱你',
            callback(){
              console.log('哈哈')
            }
          }
      }
      });
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  }
};
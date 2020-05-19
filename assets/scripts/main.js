import Vue from 'vue/dist/vue.esm';
import { BootstrapVue } from 'bootstrap-vue/esm/index.js';
import ComponentA from './components/ComponentA.vue';

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  components: {
    ComponentA
  },
  mounted () {
    console.log('app loaded');

    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
  }
});

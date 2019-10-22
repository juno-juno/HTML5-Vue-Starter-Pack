import Vue from 'vue/dist/vue.esm';
import DemoTemplate from '../../templates/demo-template.vue';

export default {
  init() {

    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');

    console.log('Home -- init');

    new Vue({
      el: '#only-homepage',
      template: '<h3>This is vue template</h3>'
    });

    new Vue({
      el: '#only-homepage-template',
      ...DemoTemplate
    });

  },
  finalize() {

    console.log('Home -- finalize');

  },
};

import Vue from 'vue/dist/vue.esm';

export default {
  init() {

    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');

    console.log('common -- init');

    new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!',
        seen: true
      }
    });

  },
  finalize() {

    console.log('common -- finalize');

  },
};

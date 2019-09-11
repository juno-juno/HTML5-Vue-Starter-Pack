import Vue from 'vue';
// import 'vue/dist/vue.runtime.esm'

export default {
  init() {

    // JavaScript to be fired on all pages
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');

    console.log('common -- init');

    const app = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      }
    })

  },
  finalize() {

    console.log('common -- finalize');

  },
};

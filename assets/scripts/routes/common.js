// import Vue from 'vue';
// import Common from '../../templates/Common.vue';

export default {
  init() {

    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');

    console.log('common -- init');

    new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      },
      // ...Common
    });

  },
  finalize() {

    console.log('common -- finalize');

  },
};

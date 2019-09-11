import Vue from 'vue';

export default {
  init() {

    console.log('home -- init');

  },
  finalize() {

    console.log('home -- finalize');

    const app = new Vue({
      el: '#only-homepage',
      data: {
        helloHomepage: 'Hello Homepage!',
        loadMessage: 'You loaded this page on ' + new Date().toLocaleString()
      }
    })

  },
};

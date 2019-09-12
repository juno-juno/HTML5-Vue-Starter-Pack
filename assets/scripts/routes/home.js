import Vue from 'vue';
import Home from '../../templates/Home.vue';

export default {
  init() {

    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');

    console.log('Home -- init');

    new Vue({
      el: '#only-homepage',
      ...Home
    });

  },
  finalize() {

    console.log('Home -- finalize');

  },
};

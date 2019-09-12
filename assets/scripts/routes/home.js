export default {
  init() {

    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');

    console.log('Home -- init');

    new Vue({
      el: '#only-homepage',
      template: '<h3>This is vue template</h3>'
    });

  },
  finalize() {

    console.log('Home -- finalize');

  },
};

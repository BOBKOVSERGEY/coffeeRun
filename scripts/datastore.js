(function (window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    console.log('Hello');
    this.data = {};
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);

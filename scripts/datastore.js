(function (window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    this.data = {};
  }
  // добаляем список ключ значение
  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  }
  // получаем список по ключу
  DataStore.prototype.get = function (key) {
    return this.data[key];
  }
  // получаем список всех заказов
  DataStore.prototype.getAll = function () {
    return this.data;
  }
  // удаляет из списка по ключу
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  }
  App.DataStore = DataStore;
  window.App = App;
})(window);

/*var dsOne = new App.DataStore();
var dsTwo = new App.DataStore();
dsOne.data['email'] = 'james@bond.com';
dsOne.data['order'] = 'black coffee';
dsTwo.data['email'] = 'moneypenny@bond.com';
dsTwo.data['order'] = 'Chai tea';
dsOne.data;
dsTwo.data;
*/

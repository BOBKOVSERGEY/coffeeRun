//IIFE и конструктор модуля Truck
(function (window) {
  'use strict';
  var App = window.App || {};

  // конструктор объекта
  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }
 // создаем заказ
  Truck.prototype.createOrder = function (order) {
    console.log('Добавление заказа для ' + order.emailAddress)
    this.db.add(order.emailAddress, order);
  };
  // удаляем заказы
  Truck.prototype.deliverOrder = function (customerId) {
    console.log('Доставка заказа для ' + customerId);
    this.db.remove(customerId);
  }

  // распечатка заказов
  Truck.prototype.printOrders = function () {
    var customerIdArray = Object.keys(this.db.getAll());
    console.log('Truck #' + this.truckId + ' has pending orders:');
    customerIdArray.forEach(function (id) {
      console.log(this.db.get(id));
    }.bind(this));
  }

  App.Truck = Truck;
  window.App = App;
})(window);

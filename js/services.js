// app Services
angular.module('mirus.services', ['ngResource'])

.factory('Config', function () {
  return {
      version : '0.0.1',
      ip: 'mirusapp.ddns.net',
      port: 7777,
      protocol: 'http'
  };
})

.factory('getInfo', ['$resource','Config',function ($resource,Config){
	return {
		getBill:$resource('http://' + Config.ip + ':' + Config.port + '/bills',{})
	};
}])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '[]');
    }
  }
}])
.factory('handleBills', function ($rootScope) {

  var currentBill={};
  var detalle ={};
  var toBuy = {};

  return {
    updateBills:function(){
      $rootScope.$broadcast('newBill');
    },
    updateBuyList:function(){
      $rootScope.$broadcast('newProductToBuy');
    },
    passBill: function(obj){
      currentBill = obj;
      console.log('passBill working');
    },
    remove: function(bill) {
      bills.splice(bills.indexOf(bill), 1);
    },
    getCurrentBill: function() {
      return currentBill;
    },
    passProduct: function(obj){
       detalle = obj;
    },
    getCurrentProduct: function(){
      return detalle;
    }
  }
})
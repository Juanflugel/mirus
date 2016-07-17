// app Services
angular.module('mirus.services', ['ngResource'])

.factory('Config', function () {
  return {
      version : '0.0.1',
      ip: 'www.estock.website',
      port: 5006,
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

  var currentBill = {};
  var detalle = {};
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
    },
    diffDate : function(array){
      var l = array.length
      var now = new Date().getTime();
      var newCol = [];
      var count = 1;
      for(i=0;i<l;i++){
        array[i].itemLastDate = new Date(now+2*24*3600*1000*count);
        newCol.push(array[i]);
        console.log('trabajando');
        count++
      }
      return newCol;
    },
    standardDate: function(array){
      var newCol = [];
      _.each(array,function(obj){
        // var year = new Date(obj.itemLastDate).getFullYear().toString();
        // var month = (new Date(obj.itemLastDate).getMonth()+1).toString();
        // var day = new Date(obj.itemLastDate).getDate().toString();
        var time = new Date(obj.itemLastDate).getTime();
        obj.itemLastDate = time;
        newCol.push(obj);
      });
       // return _.groupBy(newCol,'itemLastDate');
       return newCol;

    }

  }
})
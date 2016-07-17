angular.module('mirus.allProductsModule',[])


.controller('allProductsCtrl', ['$scope', '$rootScope', '$ionicPlatform', '$cordovaLocalNotification','handleBills','$localstorage',
   function($scope, $rootScope, $ionicPlatform, $cordovaLocalNotification,handleBills,$localstorage) {

$scope.allProductsList = $localstorage.getObject('allProductsList')||[];

$scope.standardDate = function(){
 var vaina = handleBills.standardDate($scope.allProductsList);
 //console.log(vaina);
}
$scope.standardDate();

$scope.greaterThan = function(prop){
    return function(item){
      if (item[prop] > new Date().getTime()) return true;
    }
  }

$scope.deleteProduct = function(item){
	var r = confirm('Do you want to eat :'+ item.itemName + ' ?');
	// console.log(item);
	if (r == true){
		$scope.allProductsList.splice($scope.allProductsList.indexOf(item),1);
		$localstorage.setObject('allProductsList',$scope.allProductsList);
    var buyList = $localstorage.getObject('buyList');
    buyList.push(item);
    $localstorage.setObject('buyList',buyList);
	}
	else{
		return
	}
}

 $ionicPlatform.ready(function () {
    
    // ========== Scheduling

    
    $scope.scheduleSingleNotification = function () {
    	var now             = new Date().getTime();
   		var  _5_sec_from_now = new Date(now + 30*1000);
    
      $cordovaLocalNotification.schedule(
      	{
      		id:'1234',
		    text: "Delayed Notification",
		    title: "Prueba de Mirus",
        autoCancel: true,
		    firstAt: _5_sec_from_now,
		    led: "FFFFFF",
		    sound: null,
        every: 'day',
		    icon:'../img/icon.png'
	     }
	);

    };

    $scope.scheduleSingleNotification();

    $rootScope.$on('$cordovaLocalNotification:schedule',
    function (event, notification, state) {
      alert(notification.id);
    });
    $rootScope.$on('$cordovaLocalNotification:trigger',
    function (event, notification, state) {
      alert('se disparo esa monda');
    });
 });







}])
angular.module('mirus.buyListModule',[])
.controller('buyListCtrl', ['$scope','$localstorage',function ($scope,$localstorage) {

	$scope.productList = $localstorage.getObject('buyList');

	$scope.deleteProduct = function(item){
		$scope.productList.splice($scope.productList.indexOf(item),1);
		console.log($scope.productList);
		$localstorage.setObject('buyList',$scope.productList);
	}
}])

// .controller('MyCtrl', ['$scope', '$rootScope', '$ionicPlatform', '$cordovaLocalNotification','handleBills','$localstorage',
//    function($scope, $rootScope, $ionicPlatform, $cordovaLocalNotification,handleBills,$localstorage) {


  
 

  
// }]);
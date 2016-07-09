angular.module('mirus.allProductsModule',[])
.controller('allProductsCtrl', ['$scope','$localstorage','handleBills' ,function ($scope,$localstorage,handleBills){


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
	if (r==true){
		$scope.allProductsList.splice($scope.allProductsList.indexOf(item),1);
		$localstorage.setObject('allProductsList',$scope.allProductsList);
	}
	else{
		return
	}
}	
}])
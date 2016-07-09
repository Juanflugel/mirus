angular.module('mirus.billsModule',[
	'mirus.services',
	'ngCordova'
	])

.controller('billsCtrl', ['$scope','getInfo','$cordovaBarcodeScanner','$localstorage','handleBills',function ($scope,getInfo,$cordovaBarcodeScanner,$localstorage,handleBills){
	
	getInfo.getBill.query({},function (data){
		$scope.bills = data;
		var l = [];
		l.push.apply(l,data[0].bougthProducts);
		l.push.apply(l,data[1].bougthProducts);
		$localstorage.setObject('allProductsList',l);

	});
	
	//$scope.bills = $localstorage.getObject('bills')||[];

	$scope.passBill = function(obj){
		handleBills.passBill(obj);
	}

	$scope.getNewBill = function(){

		$cordovaBarcodeScanner.scan().then(function (barcode) {
			const code = barcode.text;
			const type = barcode.type;
			const query = {};
			query.billId = code;
	        // validacion de lectura del codigo
	         if (code ==''|| null|| undefined) {
	        	alert('Invalid Bill Number');
	         }
	        // query para buscar el numero de factura
	        else {

	        	getInfo.getBill.query(query,function (data){

		  			if (data.length == 0){
		        		alert('Bill Number Not Registered');
		        	}
		        	else{
			        	$scope.bills.push(data[0]);
			        	$localstorage.setObject('bills',$scope.bills);
			        	var allProducts = $localstorage.getObject('allProductsList')||[] ;
			        	allProducts.push.apply(allProducts,data[0].bougthProducts);
			        	$localstorage.setObject('allProductsList',allProducts);
			        	alert('cantidad '+ data[0].bougthProducts.length);
		        	}		        

	        	},function (err){
	        		alert('No Response From Server');
	        	});
	   		 }

		},function(error) {
			alert(error);
		});

	};

}])

.controller('productsListCtrl', ['$scope','handleBills', function ($scope,handleBills){
	$scope.currentBill = handleBills.getCurrentBill();
	$scope.products = $scope.currentBill.bougthProducts;
	console.log('new controller working');
	$scope.passProduct = function(obj){
		handleBills.passProduct(obj);
	}
}])
.controller('productDetailCtrl', ['$scope', 'handleBills','$localstorage',function ($scope,handleBills,$localstorage){
	$scope.currentBill = handleBills.getCurrentBill();
	$scope.currentProduct = handleBills.getCurrentProduct();
	$scope.sendToBuyList = function(obj){
		var buyList = $localstorage.getObject('buyList');
		buyList.push(obj);
		$localstorage.setObject('buyList',buyList);
		alert('item : '+ obj.itemName + ' sent to BuyList');
	}
}])
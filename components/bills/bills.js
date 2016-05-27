angular.module('mirus.billsModule',[
	'mirus.services',
	'ngCordova'
	])

.controller('billsCtrl', ['$scope','getInfo','$cordovaBarcodeScanner','$localstorage',function ($scope,getInfo,$cordovaBarcodeScanner,$localstorage){

	$scope.bills = $localstorage.getObject('bills')||[];

	$scope.getNewBill = function(){

		$cordovaBarcodeScanner.scan().then(function(barcode) {
	        const code = barcode.text;
	        const type = barcode.type;
	        const query = {};
	        query.billId = code;
	        	getInfo.getBill.query(query,function (data){
	        		$scope.bills.push(data[0]);
					$localstorage.setObject('bills',$scope.bills);
				},function (err){});

	    },function(error) {
	        alert(error);
	    });

	};


	

	

	
}])
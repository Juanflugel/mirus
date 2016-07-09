angular.module('mirus.buyListModule',[])
.controller('buyListCtrl', ['$scope', function ($scope) {

	$scope.productList = [{
		"itemId": "coop1899",
		"itemImage": "http://www.sky.coop/files/coop/template/img/logos/sky-logo-supernarkt.png",
		"itemName": "Sky-trage",
		"itemAmount": 1,
		"itemUnits": "Tüte",
		"itemPrice": 0.23,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf038"
	}, {
		"itemId": "Ja!-01",
		"itemImage": "http://www.discounter-preisvergleich.de/bilder/produkte/8576/8576_2012-02-04-15-00-18.jpg",
		"itemName": "Ja! Apfelschorle",
		"itemAmount": 1,
		"itemUnits": "Flasche",
		"itemPrice": 0.8,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf037"
	}, {
		"itemId": "ap-01",
		"itemImage": "http://t0.gstatic.com/images?q=tbn:ANd9GcQhRaLfm-3dRMsUWOklhKXDzi5hrRQnyj-ks606b9ZfhmwvnfS4B5bO",
		"itemName": "Apfel",
		"itemAmount": 0.428,
		"itemUnits": "kg",
		"itemPrice": 1.07,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf036"
	}, {
		"itemId": "yak-01",
		"itemImage": "http://cdn3.volusion.com/jsmed.zpcyw/v/vspfiles/photos/YK5000-2T.jpg?1402612456",
		"itemName": "Yakul Drink",
		"itemAmount": 1,
		"itemUnits": "Paket",
		"itemPrice": 2.49,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf035"
	}, {
		"itemId": "pfir-01",
		"itemImage": "http://obst-gemuese.bitpalast.net/images/objects/pfirsich.jpg",
		"itemName": "Pfirsiche",
		"itemAmount": 0.564,
		"itemUnits": "kg",
		"itemPrice": 2.81,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf034"
	}, {
		"itemId": "milch-01",
		"itemImage": "http://media.das-ist-drin.de/dynamic/418380_big.jpg",
		"itemName": "Ja! Milch",
		"itemAmount": 1,
		"itemUnits": "Karton",
		"itemPrice": 0.42,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf033"
	}, {
		"itemId": "zuc-01",
		"itemImage": "http://www.heilpraxisnet.de/wp-content/uploads/2015/08/Zucchini-Vergiftung-e1440002401838.jpg",
		"itemName": "Zucchini grün",
		"itemAmount": 0.384,
		"itemUnits": "kg",
		"itemPrice": 0.76,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf032"
	}, {
		"itemId": "Bau-01",
		"itemImage": "https://www.edekanord-shop.de/product-images/epim/20150707180223371/image496x496",
		"itemName": "Bauer 4-korn",
		"itemAmount": 1,
		"itemUnits": "Becher",
		"itemPrice": 0.65,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf031"
	}, {
		"itemId": "lauch-01",
		"itemImage": "http://src.discounto.de/pics/Angebote/2012-06/283700/307913_Lauchzwiebeln_xxl.jpg",
		"itemName": "Lauchzwiebeln",
		"itemAmount": 1,
		"itemUnits": "A",
		"itemPrice": 0.59,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf030"
	}, {
		"itemId": "gur-01",
		"itemImage": "http://www.gartenbista.de/wp-content/uploads/2012/07/Gurken-Valery121283-Fotoliid35932690-150x150.jpg",
		"itemName": "Gurken",
		"itemAmount": 1,
		"itemUnits": "A",
		"itemPrice": 0.49,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf02f"
	}, {
		"itemId": "pa-01",
		"itemImage": "http://en.tsw.targi.pl/wp-content/uploads/sites/3/2014/01/Fotolia_45864454_XXL.jpg",
		"itemName": "Paprika",
		"itemAmount": 0.418,
		"itemUnits": "Kg",
		"itemPrice": 2.09,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf02e"
	}, {
		"itemId": "Jagm-01",
		"itemImage": "http://img.dooyoo.de/DE_DE/175/Essen-trinken/nahrungsmittel/ja-gemuesemais.jpg",
		"itemName": "Ja Gemüsemais",
		"itemAmount": 1,
		"itemUnits": "Dose",
		"itemPrice": 0.49,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf02d"
	}, {
		"itemId": "zmw-01",
		"itemImage": "http://hausschlachtebedarf.de/images/fotolia15274734subscriptionmonthlym_370.jpg",
		"itemName": "Zwiebelmettwurst",
		"itemAmount": 0.131,
		"itemUnits": "Kg",
		"itemPrice": 1.3,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf02c"
	}, {
		"itemId": "mc-01",
		"itemImage": "http://images2.hellotrade.com/data3/QO/IH/HELLOTD-8625206/cas-250x250.png",
		"itemName": "Minicabanossi",
		"itemAmount": 0.15,
		"itemUnits": "Kg",
		"itemPrice": 2.99,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf02b"
	}, {
		"itemId": "dano-01",
		"itemImage": "http://www.danone.com/uploads/tx_bidanonesitemarques/natural_02.jpg",
		"itemName": "Danone Activia",
		"itemAmount": 1,
		"itemUnits": "Paket",
		"itemPrice": 1.89,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf02a"
	}, {
		"itemId": "cksh-01",
		"itemImage": "http://www.lebensmittel.de/productpics/bz_1/bnb_s/bn_w20112011sczzczo2011cm//w_300/h_300/1620006.jpg",
		"itemName": "Cockteilkirschen",
		"itemAmount": 1,
		"itemUnits": "Glas",
		"itemPrice": 1.49,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf029"
	}, {
		"itemId": "mhh-01",
		"itemImage": "https://www.edeka.de/media/edeka-zentrale/ernaehrung/edeka-wissen/fleisch/edeka_wissen_fleisch_haehnchenbrustfilet_144x144.jpg",
		"itemName": "Hähnchen",
		"itemAmount": 0.548,
		"itemUnits": "Kg",
		"itemPrice": 3.83,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf028"
	}, {
		"itemId": "mimm2-01",
		"itemImage": "https://www.worldofsweets.de/out/pictures/generated/product/1/185_150_99/nimm2-1000g.jpg",
		"itemName": "Nimm2",
		"itemAmount": 1,
		"itemUnits": "Tüte",
		"itemPrice": 1.59,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf027"
	}, {
		"itemId": "orsft-01",
		"itemImage": "http://img.coopathome.ch/produkte/gross/44/4446497lun.jpg",
		"itemName": "Orangesaft",
		"itemAmount": 1,
		"itemUnits": "Karton",
		"itemPrice": 1.29,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf026"
	}, {
		"itemId": "apfKom-01",
		"itemImage": "http://www.spreewaldhof.de/files/spreewaldhof/img/products/fitini/apfelmus_370ml.png",
		"itemName": "Apfelkompott",
		"itemAmount": 1,
		"itemUnits": "Glas",
		"itemPrice": 0.89,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf025"
	}, {
		"itemId": "milka-01",
		"itemImage": "http://www.rr-icecream.de/imageGen.ashx?image=%2fmedia%2f38940%2fkraft-milka-cup_cv_185ml.png&width=220",
		"itemName": "Kraft Milka Ice",
		"itemAmount": 1,
		"itemUnits": "Becher",
		"itemPrice": 1.89,
		"itemLastDate": "2016-05-29T10:42:31.000Z",
		"_id": "575714549d73a67f1a2cf024"
	}];

	$scope.deleteProduct = function(index){
		$scope.productList.splice(index,1);
	}
}])

.controller('MyCtrl', ['$scope', '$rootScope', '$ionicPlatform', '$cordovaLocalNotification','handleBills','$localstorage',
   function($scope, $rootScope, $ionicPlatform, $cordovaLocalNotification,handleBills,$localstorage) {


  
 //  $ionicPlatform.ready(function () {
    
 //    // ========== Scheduling

    
 //    $scope.scheduleSingleNotification = function () {
 //    	var now             = new Date().getTime(),
 //    _5_sec_from_now = new Date(now + 10*1000);
 //    monda = new Date(_5_sec_from_now + 10*1000);
 //      $cordovaLocalNotification.schedule(
 //      	[{
 //      		id:'1234',
	// 	    text: "Delayed Notification",
	// 	    at: _5_sec_from_now,
	// 	    // led: "FF0000",
	// 	    sound: null
	//      },{

 //      		id:'5678',
	// 	    text: "la sugunda monda",
	// 	    at: monda,
	// 	    // led: "FF0000",
	// 	    sound: null
	//     }]
	// );

 //    };

 //    $scope.scheduleSingleNotification();

 //    $rootScope.$on('$cordovaLocalNotification:schedule',
 //    function (event, notification, state) {
 //      alert(notification.id);
 //    });
 //    $rootScope.$on('$cordovaLocalNotification:trigger',
 //    function (event, notification, state) {
 //      alert('se disparo esa monda');
 //    });
 // });

  $scope.productList = $localstorage.getObject('buyList');

	$scope.deleteProduct = function(index){
		$scope.productList.splice(index,1);
		console.log($scope.productList);
		$localstorage.setObject('buyList',$scope.productList);
	}
}]);
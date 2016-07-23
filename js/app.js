// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'ui.router',
  'ionic-material',
  'ngCordova',
  'mirus.services',
  'mirus.billsModule',
  'mirus.buyListModule',
  'mirus.allProductsModule',
  'starter.controllers'])

.run(function($ionicPlatform,$rootScope,$cordovaNetwork,$cordovaLocalNotification,$state,$timeout) {
  var internetConnected = true;
  $ionicPlatform.ready(function() {
	
	// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	// for form inputs)
	if (window.cordova && window.cordova.plugins.Keyboard) {
	  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	  cordova.plugins.Keyboard.disableScroll(true);

	}
	if (window.StatusBar) {
	  // org.apache.cordova.statusbar required
	  StatusBar.styleDefault();
	}
	 if (window.Connection) {
	 // listen for Online event
	  $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
		if(internetConnected) return;
		internetConnected = true;
		alert(onlineState.toUpperCase()+' Conexion working');
	  })

	  // listen for Offline event
	  $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
		if(!internetConnected) return;
		  internetConnected = false;
		alert('No Internet Conexion');
	  })
	}

	// $rootScope.$on("$cordovaLocalNotification:click", function(notification, $state,$timeout) {
 //    // var data = JSON.parse(state.data);
 //    // window.location.href = data.url;
 //    $timeout(function(){ $state.go('app.allProducts'); }, 1000);
 //    // alert('todo fino primo vamos bien');
 //    // $state.go('app.allProducts');
	// });

	

  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.navBar.alignTitle('center');
  $stateProvider

	.state('app', {
	url: '/app',
	abstract: true,
	templateUrl: 'templates/menu.html',
	controller: 'AppCtrl'
  })

  .state('app.bills', {
	url: '/bills',
	views: {
	  'menuContent': {
		templateUrl: 'components/bills/bills.html',
		controller: 'billsCtrl'
	  }
	}
  })
  .state('app.productsList', {
	url: '/bills/:billId',
	views: {
	  'menuContent': {
		templateUrl: 'components/bills/productsList.html',
		controller: 'productsListCtrl'
	  }
	}
  })
  .state('app.productDetail', {
	url: '/bills/:billId/:productId',
	views: {
	  'menuContent': {
		templateUrl: 'components/bills/productDetail.html',
		controller: 'productDetailCtrl'
	  }
	}
  })
  .state('app.buyList', {
	  url: '/buyList',
	  views: {
		'menuContent': {
		  templateUrl: 'components/Einkauflist/buyList.html',
		  controller: 'buyListCtrl'
		}
	  }
  })
  .state('app.allProducts', {
	  url: '/allProducts',
	  views: {
		'menuContent': {
		  templateUrl: 'components/allProducts/allProducts.html',
		  controller: 'allProductsCtrl'
		}
	  }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/bills');
});

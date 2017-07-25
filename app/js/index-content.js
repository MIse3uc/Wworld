
	console.log("this is content")
		var app = angular.module("app",["ionic","ionicLazyLoad","ui.router"]);
		console.log(app)
		app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
			console.log("this is content2")
			$urlRouterProvider.otherwise("/zt");
			console.log(app)
			var indexUrl = ["zt","fx","sc","wd"];
			angular.forEach(indexUrl,function(i){
				$stateProvider
					.state(i,{
						url:"/"+i,
						templateUrl:"template/index/"+i+".html"
					})
			})

			var fxUrls = ["jia","jx","qz","dy","top"];
			angular.forEach(fxUrls,function(i){
				$stateProvider
					.state("fx."+i,{
						url:"/"+i,
						templateUrl:"template/index/fx/"+i+".html",
						controller:"fx-content"
					})
			})

			$stateProvider
				.state('zt-firstBanner',{
					url:"/zt-firstBanner",
					templateUrl:"template/index/zt/zt-firstBanner.html"
				})
				.state('fx.jia.topUser',{
					url:"/topUser",
					templateUrl:"template/index/fx/topUser.html",
					controller:"fx-content"
				})
				.state('sc.xqy',{
					url:"/xqy",
					templateUrl:"template/index/sc/xqy.html"
				})

			$ionicConfigProvider.scrolling.jsScrolling(true);  //安卓不能scroll的解决办法，因为在1.2版本 由原生替代了滑动，所有现在改为用JS方法来滑动。
			$ionicConfigProvider.platform.android.tabs.position('bottom'); //ionic-tabs 安卓在顶部的解决方法。
			$ionicConfigProvider.platform.android.backButton.text("Back");

		})

		app.controller("content",function($scope,$http,$ionicHistory,$rootScope){
			$scope.$watch("viewContentLoaded",function(){
				$http({
				method:"GET",
				url:"./json/zt.json"
			}).then(function(response){
				console.log("ajax.js")
				/*$("img").lazyload({
					container: $(".lazy"),
					effect : "fadeIn" ,
					placeholder : "img/grey.gif"
				});*/

				with(response.data.zt){
					var
						data = topLoops,
						data1 = midLoops,
						data2 = thirdLoops,
						data3 = fourLoops;
				}

				var
					data5 = response.data.sc.topBanner,
					data6 = response.data.sc.nav;

				console.log(data5)

				$scope.toploops = data;
				$scope.midloops = data1;
				$scope.thirdloops = data2;
				$scope.fourloops = data3;
				$scope.sctopbanner = data5;
				$scope.scnav = data6;


				$scope.topBanner = function($event,$index){
					var data4 = response.data.zt['ztTopbanner'+$index];
					$scope.ztTopbanner = data4;
				}
			})



			//fx-jx的json
				$http({
					method:"GET",
					url:"./json/fx-content.json"
				}).then(function(response){
					var data = response.data.jx.topBanner;
					var data1 = response.data.jx.bottomBanner;
					var data2 = response.data.jia.user;

					$scope.topbanner = data;
					$scope.bottombanner = data1;
					$scope.user = data2;
				})
		})
	})

		app.controller("fx-content",function($scope,$http,$rootScope,$ionicTabsDelegate,$ionicBackdrop,$ionicModal){
		$scope.$watch("viewContentLoaded",function(){
			$scope.dofresh = function(){
				$scope.a = "ASDasdasd";
				$scope.$broadcast("scroll.refreshComplete");
			}

			document.getElementById("jia");
			jia.onclick = function(){
				console.log("11")
			}
			/*$ionicModal.fromTemplateUrl("modal.html",{
				scope:$scope,
				animation:"slide-in-up",
				backdropClickToClose:"true"
			}).then(function(modal){
				$scope.modal = modal;
			})


			$scope.closeModal = function() {
		        $scope.modal.hide();
		    };
		    //Cleanup the modal when we are done with it!
		    $scope.$on("$destroy", function() {
		        $scope.modal.remove();
		    });*/

		   /*var sharePop = $ionicPopup.show({
		   	templateUrl:'modal.html',
		   	scope:$scope,
		   	 buttons: [
       			{ text: 'Cancel' },
       			{type:"button-dark"}]
		   })*/

		/*  $scope.shareModal = function(){
		  	$ionicBackdrop.retain();
		  }*/
		  /*$scope.shareModal = function(){
				$scope.modal.show();
			}*/

		})
	})

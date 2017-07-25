/*
* @Author: MIse
* @Date:   2017-06-06 19:29:46
* @Last Modified by:   MIse
* @Last Modified time: 2017-06-12 20:05:07
*/

// 'use strict';

var appController = angular.module('appController',[]);

appController.controller('content',function($scope,$http){
    $scope.$watch("viewContentLoaded",function(){
        $http({
            method:"GET",
            url:"./json/zt.json"
        }).then(function(response){
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
        	$scope.Back = function(){
				window.history.back();
			}
    })
})

appController.controller('topUser',function($scope,$http,$ionicTabsDelegate){
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

    $scope.$watch("viewContentLoaded",function(){
        $scope.dofresh = function(){
            $scope.a = "ASDasdasd";
            $scope.$broadcast("scroll.refreshComplete");
        }

        document.getElementById("jia");
        jia.onclick = function(){
            console.log("11")
        }
    })
})

appController.controller('Store',function($scope,$rootScope,$http){
	$http({
		method:"GET",
		url:'./json/Store.json'
	}).then(function(response){
		var
			data01 = response.data.Store.freshSell,
			data02 = response.data.Store.Recommend,
			data03 = response.data.Store.shootingEquipment;

		$scope.freshSell = data01;
		$scope.Recommend = data02;
		$scope.shEqum = data03;
	})

	$scope.enterDetailPages = function($event){
		localStorage.targetTitle = $event.currentTarget.children[1].children[0].innerText;
        $rootScope.targetTitle = localStorage.targetTitle;

	}
})

appController.controller('Xqy',function($scope,$rootScope){


});
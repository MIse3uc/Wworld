/*
* @Author: MIse
* @Date:   2017-06-06 19:27:30
* @Last Modified by:   MIse
* @Last Modified time: 2017-06-08 10:00:01
*/

'use strict';

var appRouter = angular.module('appRouter',['ui.router']);
appRouter.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/zt');
    $stateProvider
        .state('zt-firstBanner',{
            url:"/zt-firstBanner",
            templateUrl:"template/index/zt/zt-firstBanner.html"
        })
        .state('fx.jia.topUser',{
            url:"/topUser",
            templateUrl:"template/index/fx/topUser.html",
            controller:"topUser"
        })
        .state('sc.xqy',{
            url:"/xqy",
            templateUrl:"template/index/sc/xqy.html",
            controller:'Xqy'
        })

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
                controller:"topUser"
            })
    })
})
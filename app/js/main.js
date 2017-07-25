// main.js

var requireConfing = {

	paths: {
		app : 'app',         //页面总配置
		controller : 'controller',   //controller配置
		directive : 'directive',   //directive配置
		ionicPackage : 'ionic',   //ionic配置
		router : 'router',   //router配置
		web : 'web',					   //逻辑js
		jquery : '../framework/jquery-1.8.3.min',       //jquery.js
		ionic : '../framework/ionic.bundle',        //ionic & angular.js
		angularRoute : '../framework/angular-route',    //angualr-ui.route
		lazyload : '../framework/ionic-image-lazy-load',  //ionic-lazyload.js
	},

	/*shim: {  //配置js的依赖关系
		content : {
			deps: ['jquery','ionic','angularRoute']

			 /**
			   * 这里的意思是：content模块依赖query&ionic&angularRoute ,所以在要用到content时，
			   * requireJs 会先将jquery&ionic&angularRoute加载进来才会执行content。
			   * requireJs 用这种方式来保证各个文件间的倚赖关系，并保证引用顺序。
			   */
		/*},
		web : {
			deps: ['jquery','lazyload']
		},
		angularRoute : {
			deops: ['jquery','ionic']
		}
	}*/


	shim: {
		angularRoute : {
			deps: ['jquery','ionic'],
			exports: 'angularRoute'
		},
		ionic : {
			exports: 'ionic'
		},
		jquery : {
			exports: 'jquery'
		},
		lazyload : ['jquery','ionic'],
		web : ['jquery','lazyload','app'],
		app : ['jquery','ionic','lazyload','angularRoute','controller','directive','router','ionicPackage'],
		directive : ['ionic'],
		controller : ['ionic'],
		ionicPackage : ['ionic','jquery'],
		router : ['ionic','jquery','angularRoute']
	}
}

require.config(requireConfing);

require(['app'],function(app){
	angular.bootstrap(document.getElementById("container"),["app"])
});
require(['web']);


/*define(function(require){
	require(['content'],function(ionic,angular){
		console.log("OK")
	})
})*/



/*require.config({
	paths: {
		"jquery" : ["jquery-1.8.3.min"],
		"ionic" : ["ionic.bundle.min"],
		"angularRoute" : ["angular-route"],
		"indexContent" : ["index-content"],
		"web" : ["web"],
		"lazyload" : ["jquery.lazyload.min"]
	},

	shim: {
		"jquery": {exports : "$"},
		"lazyload" : ["jquery"],
		"angularRoute" : ["jquery","ionic"],
		"indexContent" : ["jquery","ionic","angularRoute"],
		"web" : ["jquery","lazyload"]
	}

})


require(['jquery','lazyload']);
require(["jquery","ionic","angularRoute",'indexContent'])
require(['jquery','lazyload','web']);*/

		/*"jquery" : ["upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.2.min.js","jqery-1.8.3.min"],
		"ionic" : ["http://code.ionicframework.com/1.3.3/js/ionic.bundle.min.js","ionic.bundle.min"],
		"angularRoute" : ["cdn.bootcss.com/angular.js/2.0.0-beta.17/router.min.js","angular-route"],*/
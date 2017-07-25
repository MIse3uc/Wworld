/*
* @Author: MIse
* @Date:   2017-06-06 19:32:09
* @Last Modified by:   MIse
* @Last Modified time: 2017-06-08 09:36:00
*/

'use strict';

var appIonic = angular.module('appIonic',[]);

appIonic.config(function($ionicConfigProvider){
    $ionicConfigProvider.scrolling.jsScrolling(true);
    //↑安卓不能scroll的解决办法，因为在1.2版本 由原生替代了滑动，所有现在改为用JS方法来滑动。
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    //↑ionic-tabs 安卓在顶部的解决方法。
    $ionicConfigProvider.platform.android.backButton.text('Back');
})
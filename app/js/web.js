define(['jquery','lazyload'],function(jquery,lazyload){
	(function($){
		console.log("this is web")
			console.log("webOK")
			 var flag = true;
			function IsPC() {
		        var ua = navigator.userAgent;
		        var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];

		        for (var i = 0; i < Agents.length; i++) {
		            if (ua.indexOf(Agents[i]) > 0) {
		                flag = false;
		                break;
		            }
		        }
		        if(window.screen.width>=768){
		             flag = true;
		        }

		    	if(flag==true){
					console.log("正在PC端访问")
					$("body").html("<h2 style='left: 50%;position:absolute;top:50%;margin-top:-21.5px;margin-left: -210px;'>请用手机端访问，并刷新网页。</h2>");
				}
			}

			IsPC();

			$(window).resize(function(){
				var ua = navigator.userAgent;
		        var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];

		        for (var i = 0; i < Agents.length; i++) {
		            if (ua.indexOf(Agents[i]) > 0) {
		                flag = false;
		                break;
		            }
		        }
		        if(window.screen.width>=768){
		             flag = true;
		        }

		        if(flag==true){
					console.log("正在PC端访问")
					$("body").html("<h2 style='left: 50%;position:absolute;top:50%;margin-top:-21.5px;margin-left: -210px;'>请用手机端访问，并刷新网页。</h2>");
				}
			})

			console.log("web.js")



			/*$(".lazy").each(function(i,val){
				$("img").lazyload({
				    container: val,
				    effect : "fadeIn",
				    placeholder : "img/grey.gif",
				    threshold : 10,
				    skip_invisible : false
				});
			});*/



	})(jQuery)
})





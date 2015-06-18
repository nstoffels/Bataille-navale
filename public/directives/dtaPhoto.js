angular.module("app", ["ngRoute"])
//'use strict';
    .directive("dtaPhoto",function() {
	return {
			restrict : "E",
			template : /*"<div ng-click=\"e()\>*/"ici, bientôt, une photo",/*</div>",*/
			scope:{
				borderWidth : "=", e:"&"
			},


			link : function(scope, element, attrs){

				element.on('click', function(){
					scope.$apply(function(){
						scope.e()
					})
				})

				console.log(scope, element, attrs)
				element.css("borderStyle", "solid" )
				element.css("display", "block")
				console.log(scope.borderWidth)
				scope.$watch("borderWidth", function(){
					
					
				element.css("borderWidth", scope.borderWidth+"px")
				})
				element.css("color", attrs.couleur || "blue")
			}
	}
})


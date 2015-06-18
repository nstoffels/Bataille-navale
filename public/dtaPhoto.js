angular.module("app")
.directive("dtaPhoto", function () {

    return {

        restrict: "E",
        template: "<div ng-click=\"e()\">ici bientôt une photo {{ toto }} <span ng-transclude></span></div>",
        scope: {
            w: "=",
            str: "@",
            e: "&"
        },
        transclude: true,
        link: function (scope, element, attrs) {
            element.css("borderStyle", "solid")
            element.css("display", "inline-block")
            element.css("color", attrs.couleur || 'blue')

            scope.$watch("w", function () {
                element.css("borderWidth", scope.w + "px")
            })
        }

    }

})
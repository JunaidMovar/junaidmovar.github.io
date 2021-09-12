var app = angular
.module('junaidMovarPortfolio',['ngRoute'])
.filter("rawHtml", [
    "$sce",
    function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }
])
.filter("trustedUrl", [
    "$sce",
    function ($sce) {
        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    }
]);
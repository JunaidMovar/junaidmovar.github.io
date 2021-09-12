app.controller('homeCtrl',function($scope,$rootScope){
    $rootScope.PAGE_NAME = " - HOME";
    $scope.Years = (new Date() - new Date(2019,12,08)) / (1000 * 60 * 60 * 24 * 365);
    $scope.Years = $scope.Years.toFixed(1);
})
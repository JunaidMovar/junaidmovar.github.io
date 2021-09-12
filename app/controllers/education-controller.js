app.controller('educationCtrl',function($scope,$rootScope){
    $rootScope.PAGE_NAME = " - EDUCATION";
    $scope.education = [
        {
            course:'MCA',
            university:'Gujarat Technological University',
            year:'2020',
            percentage:'8.88'
        },
        {
            course:'BCA ',
            university:'Saurashtra University',
            year:'2018',
            percentage:'77%'
        },
        {
            course:'HSC Commerce)',
            university:'G.S.H.E.B ',
            year:'2015',
            percentage:'65%'
        },
        {
            course:'SSC ',
            university:'G.S.E.B ',
            year:'2013',
            percentage:'63%'
        }
    ]
})
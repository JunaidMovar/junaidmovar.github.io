app.config(function($routeProvider){
    $routeProvider.otherwise('/home');
    $routeProvider
    .when(
        '/home', {
            name: 'home',
            templateUrl: 'pages/home.html',
            controller: 'homeCtrl'
        }
    )
    .when(
        '/education', {
            name: 'education',
            templateUrl: 'pages/education.html',
            controller: 'educationCtrl'
        }
    );
});
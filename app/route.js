app.config(function($routeProvider){
    $routeProvider.otherwise('/');
    $routeProvider
    .when(
        '/', {
            name: 'home',
            templateUrl: 'pages/home.html',
            controller: 'homeCtrl'
        }
    )
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
    )
    .when(
        '/contact', {
            name: 'contact',
            templateUrl: 'pages/contact.html',
            controller: 'contactCtrl'
        }
    )
    .when(
        '/about', {
            name: 'about',
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        }
    )
    .when(
        '/experience', {
            name: 'experience',
            templateUrl: 'pages/experience.html',
            controller: 'experienceCtrl'
        }
    )
    ;
});
const routes = ($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'home',
        })
        .otherwise({
            redirectTo: '/'
        })
}

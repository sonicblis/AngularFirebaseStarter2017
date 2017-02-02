(function (angular) {
  angular.module('MyFirebaseApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: '/',
        component: 'home',
      });

      $urlRouterProvider.otherwise('/');
    }]);
}(angular));

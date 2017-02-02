(function () {
  function HomeController() {

  }
  angular.module('MyFirebaseApp')
    .component('home', {
      templateUrl: 'views/home.html',
      controller: ['db', 'auth', 'authProvider', HomeController],
    });
}());

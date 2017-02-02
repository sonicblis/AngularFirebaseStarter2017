(function (angular, firebase) {
  const firebaseConn = firebase.initializeApp({
    apiKey: '[your key]',
    authDomain: '[your auth domain]',
    databaseURL: '[your db url]',
    storageBucket: '[your storage bucket]',
    messagingSenderId: '[your messaging sender id]',
  });

  angular.module('MyFirebaseApp')
    .constant('db', firebaseConn.database())
    .constant('auth', firebase.auth())
    .constant('authProvider', new firebase.auth.GoogleAuthProvider())
    .run(['$rootScope', function ($rootScope) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          $rootScope.user = user; // eslint-disable-line no-param-reassign
          $rootScope.$digest();
        }
      });
    }]);
}(angular, firebase));

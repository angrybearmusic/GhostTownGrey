angular.module( 'ghostTownGrey', [
  'templates-app',
  'templates-common',
  'ghostTownGrey.news',
  'ghostTownGrey.contact',
  'ghostTownGrey.live',
  'ghostTownGrey.store',
  'ghostTownGrey.videos',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/news' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ghostTownGrey' ;
    }
  });
})

;


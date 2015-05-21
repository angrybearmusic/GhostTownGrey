angular.module('ghostTownGrey.live', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'leaflet-directive'
])

.config(function config( $stateProvider ) {
  $stateProvider.state('live', {
    url: '/live',
    views: {
      "main": {
        controller: 'LiveCtrl',
        templateUrl: 'live/live.tpl.html'
      }
    },
    data: { pageTitle: 'Live' }
  });
})

.controller('LiveCtrl', function LiveCtrl($scope) {
  angular.extend($scope, {
    center: {
      lat: 44.1419049,
      lng: -120.5380992,
      zoom: 6
    },
    markers: {
      current: {
        lat: 0,
        lng: 0,
        message: "New Message"
      }
    },
    defaults: {
      scrollWheelZoom: false,
      zoomAnimation: true
    }
  });

  $scope.addShowShow = true;

  $scope.formMaster = {
    date: '',
    time: '12:00',
    venue: '',
    name: '',
    address: '',
    phone: '',
    warning: ''
  };

  $scope.upcomingShows = [
  ];

  $scope.venues = [
    {
      id: 1,
      name: "Hawthorne Theatre",
      address: "1507 SE 39th Ave, Portland, OR 97214",
      phone: "(503) 233-7100",
      lat: 45.511862,
      lng: -122.623018,
      zoom: 16
    },
    {
      id: 2,
      name: "Branx",
      address: "320 SE 2nd Ave, Portland, OR 97214",
      phone: "(503) 234-5683",
      lat: 45.520381,
      lng: -122.663494,
      zoom: 16
    },
    {
      id: 3,
      name: "Analog Cafe",
      address: "720 SE Hawthorne Blvd, Portland, OR 97214",
      phone: "(503) 206-7439",
      lat: 45.512064,
      lng: -122.658162,
      zoom: 16
    }
  ];

  $scope.resetForm = function () {
    $scope.form = angular.copy($scope.formMaster);
    $scope.addShowToggle();
  };

  $scope.addShowToggle = function () {
    $scope.addShowShow = !$scope.addShowShow;
    console.log($scope.addShowShow);
  };

  

  $scope.addShow = function () {
    if ($scope.form.date !== '' && $scope.form.name !== '') {
      var newShow = {
        date: $scope.form.date,
        time: $scope.form.time,
        venue: $scope.form.name
      };
      $scope.upcomingShows.push(newShow);
      $scope.addShowToggle();
    } else {
      $scope.form.warning = "Missing necessary info. Please try again.";
    }
  };

  $scope.setVenue = function () {
    for (var i = 0; i < $scope.venues.length; i++) {
      if ($scope.form.venue === $scope.venues[i].id) {
        $scope.center.lat = $scope.venues[i].lat;
        $scope.center.lng = $scope.venues[i].lng;
        $scope.center.zoom = $scope.venues[i].zoom;
        $scope.markers.current.lat = $scope.venues[i].lat;
        $scope.markers.current.lng = $scope.venues[i].lng;
        $scope.markers.current.message = $scope.venues[i].name;
        $scope.form.name = $scope.venues[i].name;
        $scope.form.address = $scope.venues[i].address;
        $scope.form.phone = $scope.venues[i].phone;
      }
    }
  };

  $scope.resetForm();
});

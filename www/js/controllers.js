angular.module('starter')
  .controller(
    'MenuController',
    function ($scope, $state) {//INJE��O DE DEPEND�NCIA import
      //ESCOPO = contexto da view onde o controller reside
      $scope.clicouEmLocais = function () {
        //ionic, vai pro estado/rota X
        $state.go('locais');
      };
    }
  )
  .controller(
    'LocaisController',
    function ($scope, $cordovaGeolocation) {//inje��o de dependencia
      var posOptions = {
        timeout: 10000,//tempo que ele leva pra desistir
        enableHighAccuracy: false
        //true: GPS +tempo +preciso
        //false: qualquer coisa que consiga me
        //dar um lat/lng   +rapidez  -precis�o

      };
      //JSON = representa��o de dados - chave: valor

      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(
          function (position) {
            var lat = position.coords.latitude
            var lng = position.coords.longitude

            var minhaPosicao = new google.maps.LatLng(lat, lng);

            var mapConf = {
              center: minhaPosicao,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var mapa = new google.maps.Map(
              document.getElementById('mapa'),
              mapConf
            );

            var poiHemopasso = new google.maps.Marker({
                position: new google.maps.LatLng(-28.265534, -52.404307),
                map: mapa,
                title: "Hemopasso"
              });
            var poiHemocentro = new google.maps.Marker({
                position: new google.maps.LatLng(-28.259672, -52.412574),
                map: mapa,
                title: "Hemocentro"
              });

            poiHemocentro.addListener(
              'click',
              function () {
                var infoWindow = new google.maps.InfoWindow({
                  content: "Rua Teixeira Soares, 570. Hemocentro"
                });
                infoWindow.open(mapa, poiHemocentro);
              }
            );

          }, function (err) {
            // error
            console.log(err);
          }
        );
    }
  );

angular.module('starter')
	.config(
		function($stateProvider, $urlRouterProvider){ //IONIC
			//inje��o de depend�ncia
			$urlRouterProvider.otherwise('menu');//STARTUP
		
			$stateProvider.state(
				'menu',
				{
					url: '/menu',
					templateUrl: 'templates/menu.html',
					controller: 'MenuController'
				}
			); 

			$stateProvider.state(
				'locais',
				{
					url: '/locais',
					templateUrl: 'templates/locais.html',
					controller: 'LocaisController'
				}
			);//ESTADOS = ROTAS
			
		}
	)
	
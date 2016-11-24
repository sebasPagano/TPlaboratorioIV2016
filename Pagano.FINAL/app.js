angular.module('proyecto',
    ['ui.router',
    'satellizer',
    'angularFileUpload'
])

.config(function ($stateProvider, $urlRouterProvider,$authProvider){

 
$authProvider.loginUrl = 'Pagano.FINAL/servidor/php/auth.php'
$authProvider.tokenName = "final"
$authProvider.tokenPrefix = "proyecto"
$authProvider.authHeader = "data"


  $stateProvider

  	// pagina principal
      .state('inicio', {
                url : '/inicio',
                templateUrl : 'vistas/main.html',
                controller: 'inicioCtrl'

            })

        .state('Login', {
                url : '/Login',
                templateUrl : 'vistas/Login.html',
                controller: 'LoginCtrl'

            })

    // navbar fija de ABM
      .state('abm', {
                url : '/abm',
                abstract:true,
                templateUrl : 'vistas/abmAbstract.html',
                controller: 'abmMenuCtrl'
            })

 	// pagina de alta	 
      .state('abm.alta', {
                url: '/alta',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/abmAlta.html',
                        controller: 'abmAltaCtrl'
                    }
                }
            })

    // pagina de grilla  
      .state('abm.grilla', {
                url: '/grilla',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/abmGrilla.html',
                        controller: 'abmGrillaCtrl'
                    }
                }
            })
            .state('abm.altaProducto', {
                url: '/altaProducto',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/abmAltaProducto.html',
                        controller: 'abmAltaProductoCtrl'
                    }
                }
            })

    // pagina de grilla  
      .state('abm.grillaProducto', {
                url: '/grillaProducto',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/abmGrillaProducto.html',
                        controller: 'abmGrillaProductoCtrl'
                    }
                }
            })

   
   $urlRouterProvider.otherwise('/inicio');
});


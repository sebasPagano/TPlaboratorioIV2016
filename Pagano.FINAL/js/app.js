angular.module('proyecto',
    ['ui.router',
    'satellizer',
    'angularFileUpload',
    'ngMap'
])

.config(function ($stateProvider, $urlRouterProvider,$authProvider){

 
$authProvider.loginUrl = 'Pagano.FINAL/servidor/php/auth.php';
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
      .state('menu', {
                url : '/menu',
                abstract:true,
                templateUrl : 'vistas/abmAbstract.html',
                controller: 'abmMenuCtrl'
            })

        .state('menu.bienvenido', {
            url: '/bienvenido',
            views: {
                'contenido': {
                    templateUrl: 'vistas/bienvenido.html',
                    controller: 'BienvenidoCtrl'
                }
            }
        })

        .state('menu.ofertasGrilla', {
            url: '/ofertas',
            views: {
                'contenido': {
                    templateUrl: 'vistas/ofertas.html',
                    controller: 'OfertasGrillaCtrl'
                }
            }
        })
      .state('menu.ofertasAlta', {
            url: '/ofertasAlta',
            views: {
                'contenido': {
                    templateUrl: 'vistas/ofertasAlta.html',
                    controller: 'OfertasAltaCtrl'
                }
            }
        })
        .state('menu.pedidosAlta', {
            url: '/pedidosAlta',
            views: {
                'contenido': {
                    templateUrl: 'vistas/pedidosAlta.html',
                    controller: 'PedidosAltaCtrl'
                }
            }
        })
        .state('menu.pedidosGrilla', {
            url: '/pedidosGrilla',
            views: {
                'contenido': {

                    templateUrl: 'vistas/pedidosGrilla.html',
                    controller: 'PedidosGrillaCtrl'
                }
            }
        })



        .state('menu.sucursalAlta', {
            url: '/sucursalAlta',
            views: {
                'contenido': {
                    templateUrl: 'vistas/sucursalAlta.html',
                    controller: 'SucursalAltaCtrl'
                 }
            }
          
        })

        .state('menu.sucursalGrilla', {
            url: '/sucursalGrilla',
            views: {
                'contenido': {
                    templateUrl: 'vistas/sucursalGrilla.html',
                    controller: 'SucursalGrillaCtrl'
                 }
            }
          
        })


        .state('menu.graficos', {
            url: '/Graficos',
            views: {
                'contenido': {
                    templateUrl: 'vistas/Graficos.html',
                    controller: 'GraficosCtrl'
                 }
            }
          
        })


 	// pagina de alta	 
      .state('menu.alta', {
                url: '/alta',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/abmAlta.html',
                        controller: 'abmAltaCtrl'
                    }
                }
            })

    // pagina de grilla  
      .state('menu.grilla', {
                url: '/grilla',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/abmGrilla.html',
                        controller: 'abmGrillaCtrl'
                    }
                }
            })
            .state('menu.altaProducto', {
                url: '/altaProducto',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/abmAltaProducto.html',
                        controller: 'abmAltaProductoCtrl'
                    }
                }
            })

    // pagina de grilla  
      .state('menu.grillaProducto', {
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


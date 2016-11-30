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


        .state('menu.sucursalLanus', {
            url: '/sucursal/Lanus',
            views: {
                'contenido': {
                    templateUrl: 'vistas/sucursalLanus.html',
                    controller: 'SucursalLanusCtrl'
                 }
            }
          
        })

        .state('menu.sucursalAvellaneda', {
            url: '/sucursal/Avellaneda',
            views: {
                'contenido': {
                    templateUrl: 'vistas/sucursalAvellaneda.html',
                    controller: 'SucursalAvellanedaCtrl'
                 }
            }
          
        })
        .state('menu.sucursalLomas', {
            url: '/sucursal/Lomas',
            views: {
                'contenido': {
                    templateUrl: 'vistas/sucursalLomas.html',
                    controller: 'SucursalLomasCtrl'
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


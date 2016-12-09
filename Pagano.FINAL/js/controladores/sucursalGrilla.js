angular
  .module('proyecto')
  .controller('SucursalGrillaCtrl',function($scope,$http,$auth,$state,NgMap,FactorySucursal,FactoryOferta){

  	    $scope.mapa = {};
  	    $scope.SucursalVer = 0;
  	     $scope.VerOfertas = 0;
  	     $scope.VerFotos = 0;
   		 $scope.latitud = "-34.662189";
   		 $scope.longitud = "-58.364643";
/*
	   	$http.get("http://localhost:8080/Pagano.FINAL/ws1/sucursales")
	    .then(function (respuesta){

	        $scope.listado = respuesta.data;
	        console.info("Listado: ", $scope.listado);


	    },function(error){

	        console.info("Error: ", error);

	    });*/

	    FactorySucursal.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listado = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });

	    $scope.GPS = function(latitud,longitud,id)
	    {
	    $scope.SucursalVer = 1;
	    $scope.latitud = latitud;
   		$scope.longitud = longitud;
   		$scope.SucursalId = id;

	    }
	    $scope.OCULTAR = function()
	    {
	    $scope.SucursalVer = 0;
	    }

	   	$scope.OcultarOFERTA = function()
	    {
	     $scope.VerOfertas = 0;
	    }
	    $scope.Ofertas = function(id)
	    {
	    $scope.VerOfertas = 1;
	    $scope.IDLOCAL = id;
/*
	    $http.get("http://localhost:8080/Pagano.FINAL/ws1/ofertas").then(function (respuesta){

	        $scope.listadoOferta = respuesta.data;
	        
	      

	    },function(error){

	        console.info("Error: ", error);

	    });*/
      FactoryOferta.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listadoOferta = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });


	    }
	    $scope.Fotos = function(id)
	    {
	    	$scope.VerFotos = 1;
	    	$scope.SucursalIdFoto = id;
	    }
	    $scope.OcultarFotos = function()
	    {
	     $scope.VerFotos = 0;
	    }


})
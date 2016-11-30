angular
  .module('proyecto')
  .controller('SucursalGrillaCtrl',function($scope,$http,$auth,$state,NgMap){

  	    $scope.mapa = {};
  	    $scope.SucursalVer = false;
   		 $scope.latitud = "-34.662189";
   		 $scope.longitud = "-58.364643";

	   	$http.get("http://localhost:8080/Pagano.FINAL/ws1/sucursales")
	    .then(function (respuesta){

	        $scope.listado = respuesta.data;
	        console.info("Listado: ", $scope.listado);


	    },function(error){

	        console.info("Error: ", error);

	    });

	    $scope.GPS = function(latitud,longitud)
	    {
	    $scope.SucursalVer = true;
	    $scope.latitud = latitud;
   		$scope.longitud = longitud;

	    }
	    $scope.OCULTAR = function()
	    {
	    $scope.SucursalVer = false;
	

	    }


})
angular
  .module('proyecto')
  .controller('SucursalGrillaCtrl',function($scope,$http,$auth,$state,NgMap){

  	    $scope.mapa = {};
  	    $scope.SucursalVer = 0;
   		 $scope.latitud = "-34.662189";
   		 $scope.longitud = "-58.364643";

	   	$http.get("http://localhost:8080/Pagano.FINAL/ws1/sucursales")
	    .then(function (respuesta){

	        $scope.listado = respuesta.data;
	        console.info("Listado: ", $scope.listado);


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


})
angular
  .module('proyecto')
  .controller('BienvenidoCtrl',function($scope,$http,$auth,$state){

 	$scope.Conectado=$auth.isAuthenticated();
	 if($scope.Conectado == true)
	 {
	    $scope.usuario = $auth.getPayload().usuarioLogueado;

	$scope.nombre = $scope.usuario.nombre;
	    console.info("persona",$scope.usuario.tipo);
	}


})
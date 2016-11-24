angular
  .module('proyecto')
  .controller('abmMenuCtrl',function($scope,$http,$auth,$state){
 
    $scope.usuario = $auth.getPayload().usuarioLogueado;
$scope.nombre = $scope.usuario.nombre;
    console.info("persona",$scope.usuario.tipo);


    $scope.logout = function()
    {
        $auth.logout();
        $state.go('inicio');
    }
})
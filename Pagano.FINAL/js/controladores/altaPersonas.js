angular
  .module('proyecto')
  .controller('abmAltaCtrl',function($scope,FactoryUsuario,$http,FileUploader,$auth){

    $scope.ConectadoAlta=$auth.isAuthenticated();
    if($scope.ConectadoAlta==true)
    {
$scope.usuario = $auth.getPayload().usuarioLogueado;
}
    $scope.alta = {};

    $scope.guardar = function(){

       /* var objetoUsuario = JSON.stringify($scope.alta);
        console.info(objetoUsuario);
        *//*
        $http.post("http://localhost:8080/Pagano.FINAL/ws1/usuario" ,$scope.alta)
            .then(function (respuesta){

            console.info("Exito", respuesta);


        },function(error){

            console.info("Error: ", error);

        });*/
        FactoryUsuario.Guardar($scope.alta).then(function(respuesta){
        console.log("Exito",respuesta);
      

        },function(error){

            console.info("Error: ", error);

        });


    }

})
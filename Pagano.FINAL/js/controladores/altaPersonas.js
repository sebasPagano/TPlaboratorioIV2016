angular
  .module('proyecto')
  .controller('abmAltaCtrl',function($scope,$http,FileUploader,$auth){
 
$scope.usuario = $auth.getPayload().usuarioLogueado;



     

    $scope.alta = {};

    $scope.guardar = function(){

        var objetoUsuario = JSON.stringify($scope.alta);
        console.info(objetoUsuario);

        $http.post("http://localhost:8080/Pagano.FINAL/ws1/usuario/" + objetoUsuario)
            .then(function (respuesta){

            console.info("Exito", respuesta);


        },function(error){

            console.info("Error: ", error);

        });


    }

})
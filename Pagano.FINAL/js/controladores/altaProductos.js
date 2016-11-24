angular
  .module('proyecto')
  .controller('abmAltaProductoCtrl',function($scope,$http,FileUploader,$auth,$state){
 

  $scope.usuario = $auth.getPayload().usuarioLogueado;
    $scope.alta = {};

    $scope.guardar = function(){

        var objetoUsuario = JSON.stringify($scope.alta);
        console.info(objetoUsuario);

        $http.post("http://localhost:8080/Pagano.FINAL/ws1/producto/" + objetoUsuario)
            .then(function (respuesta){

            console.info("Exito", respuesta);
        


        },function(error){

            console.info("Error: ", error);

        });


    }

})
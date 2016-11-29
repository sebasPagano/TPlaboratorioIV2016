angular
  .module('proyecto')
  .controller('abmAltaCtrl',function($scope,$http,FileUploader,$auth){

    $scope.ConectadoAlta=$auth.isAuthenticated();

    $scope.alta = {};

    $scope.guardar = function(){

        var objetoUsuario = JSON.stringify($scope.alta);
        console.info(objetoUsuario);

        $http.post("http://localhost:8080/Pagano.FINAL/ws1/usuario" ,$scope.alta)
            .then(function (respuesta){

            console.info("Exito", respuesta);


        },function(error){

            console.info("Error: ", error);

        });


    }

})
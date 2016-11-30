angular
  .module('proyecto')
  .controller('SucursalAltaCtrl',function($scope,$http,$auth,$state){

  	$scope.alta = {};

    $scope.guardar = function(){

       /* var objetoUsuario = JSON.stringify($scope.alta);
        console.info(objetoUsuario);
        */
        $http.post("http://localhost:8080/Pagano.FINAL/ws1/sucursal" ,$scope.alta)
            .then(function (respuesta){

            console.info("Exito", respuesta);


        },function(error){

            console.info("Error: ", error);

        });


    }

})
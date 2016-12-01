angular
  .module('proyecto')
  .controller('abmGrillaCtrl',function($scope,$http,$auth){
$scope.usuarioM = $auth.getPayload().usuarioLogueado;
    $scope.listado = {};
    $scope.modificar = {};
    $scope.modo = false;

    $http.get("http://localhost:8080/Pagano.FINAL/ws1/users")
    .then(function (respuesta){

        $scope.listado = respuesta.data;
        console.info("Listado: ", $scope.listado);


    },function(error){

        console.info("Error: ", error);

    });

    $scope.borrar = function(id){

        $http.delete("http://localhost:8080/Pagano.FINAL/ws1/usuario/"+ id)
            .then(function (respuesta){

                console.info("Filas restantes: ", respuesta.data);


            },function(error){

                console.info("Error: ", error);

        });
    }

    $scope.desplegarMod = function (persona){

        $scope.modificar = persona;
        $scope.modo = true;

        $scope.modificar.nombre = persona.nombre;
        $scope.modificar.tipo = persona.tipo;
    }

    $scope.actualizar = function(){

        $objetoUsuario = JSON.stringify($scope.modificar);

        $http.put("http://localhost:8080/Pagano.FINAL/ws1/usuarioM",$scope.modificar)
            .then(function (respuesta){

                console.info("Modificado: ", respuesta.data);
                $scope.modo = false;


            },function(error){

                console.info("Error: ", error);

        });

    }            

})
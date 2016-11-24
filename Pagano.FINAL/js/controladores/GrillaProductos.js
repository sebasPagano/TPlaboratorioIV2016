angular
  .module('proyecto')
  .controller('abmGrillaProductoCtrl',function($scope,$http,$auth){

    $scope.listado = {};
    $scope.modificar = {};
    $scope.modo = false;

    $scope.usuario = $auth.getPayload().usuarioLogueado;

    $http.get("http://localhost:8080/Pagano.FINAL/ws1/productos")
    .then(function (respuesta){

        $scope.listado = respuesta.data;
        console.info("Listado: ", $scope.listado);


    },function(error){

        console.info("Error: ", error);

    });

    $scope.borrar = function(id){

        $http.delete("http://localhost:8080/Pagano.FINAL/ws1/producto/"+ id)
            .then(function (respuesta){

                console.info("Filas restantes: ", respuesta.data);


            },function(error){

                console.info("Error: ", error);

        });
    }

    $scope.desplegarMod = function (voto){

        $scope.modificar = voto;
        $scope.modo = true;

        $scope.modificar.nombre = voto.nombre;
    }

    $scope.actualizar = function(){

        $objetoUsuario = JSON.stringify($scope.modificar);

        $http.put("http://localhost:8080/Pagano.FINAL/ws1/producto/" + $objetoUsuario)
            .then(function (respuesta){

                console.info("Modificado: ", respuesta.data);
                $scope.modo = false;


            },function(error){

                console.info("Error: ", error);

        });

    }            

})
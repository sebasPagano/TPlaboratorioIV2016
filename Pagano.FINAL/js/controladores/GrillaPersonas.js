angular
  .module('proyecto')
  .controller('abmGrillaCtrl',function($scope,FactoryUsuario,$http,$auth,FactorySucursal){
$scope.usuarioM = $auth.getPayload().usuarioLogueado;
    $scope.listado = {};
    $scope.modificar = {};
    $scope.modo = false;
    $scope.modo2 = false;
    $scope.tipo = "todos";

     FactoryUsuario.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listado = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });
    FactorySucursal.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listadoSucursales = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });



    $scope.Buscar = function(){
        $scope.listado = [];
    if($scope.tipo == "todos")
    {    
      FactoryUsuario.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listado = respuesta.data;

          },function(error){

            console.info("Error: ", error);

        });
    }else
    {
         console.log($scope.tipo);
      FactoryUsuario.BuscarPor($scope.tipo).then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listado = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });

    }

    }


/*
    $http.get("http://localhost:8080/Pagano.FINAL/ws1/users")
    .then(function (respuesta){

        $scope.listado = respuesta.data;
        console.info("Listado: ", $scope.listado);


    },function(error){

        console.info("Error: ", error);

    });*/

    $scope.borrar = function(id){

       /* $http.delete("http://localhost:8080/Pagano.FINAL/ws1/usuario/"+ id)
            .then(function (respuesta){

                console.info("Filas restantes: ", respuesta.data);


            },function(error){

                console.info("Error: ", error);

        });*/

        FactoryUsuario.Borrar(id).then(function(respuesta){
       
        console.info("Filas restantes: ", respuesta);

      },function(error){

        console.info("Error: ", error);

      });
    }

    $scope.desplegarMod = function (persona){


        $scope.modificar = persona;
        $scope.modo = true;
  
   
        $scope.modificar.nombre = persona.nombre;
        $scope.modificar.tipo = persona.tipo;
        $scope.modificar.id_Local = persona.id_Local;
    }

    $scope.actualizar = function(){

       FactoryUsuario.Editar($scope.modificar).then(function(respuesta){
        console.info("Modificado: ", respuesta);
        $scope.modo = false;
      

        },function(error){

            console.info("Error: ", error);

        });
/*
        $http.put("http://localhost:8080/Pagano.FINAL/ws1/usuarioM",$scope.modificar)
            .then(function (respuesta){

                console.info("Modificado: ", respuesta.data);
                $scope.modo = false;


            },function(error){

                console.info("Error: ", error);

        });*/

    }            

})
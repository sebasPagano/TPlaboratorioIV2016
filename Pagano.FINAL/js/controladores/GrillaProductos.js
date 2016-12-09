angular
  .module('proyecto')
  .controller('abmGrillaProductoCtrl',function($scope,FileUploader,$http,$auth,FactoryProducto){

    $scope.listado = {};
    $scope.modificar = {};
    $scope.modo = false;
    $scope.usuario = $auth.getPayload().usuarioLogueado;

    $scope.uploader = new FileUploader({url: 'PHP/upload.php'});
    $scope.uploader.queueLimit = 10;

  $scope.cargar = function(){
        /** llamo a la funcion uploadAll para cargar toda la cola de archivos **/
        $scope.uploader.uploadAll();
        /** agrego mi funcionalidad **/
    }

            $scope.uploader.onErrorItem = function(fileItem, response, status, headers) {
          console.info('onErrorItem', fileItem, response, status, headers);
      };

      $scope.uploader.onCompleteAll = function() {
          console.info('Se cargo con exito');
      };



    $scope.usuario = $auth.getPayload().usuarioLogueado;
/*
    $http.get("http://localhost:8080/Pagano.FINAL/ws1/productos")
    .then(function (respuesta){

        $scope.listado = respuesta.data;
        console.info("Listado: ", $scope.listado);


    },function(error){

        console.info("Error: ", error);

    });*/
      FactoryProducto.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listado = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });

    $scope.borrar = function(id){
/*
        $http.delete("http://localhost:8080/Pagano.FINAL/ws1/producto/"+ id)
            .then(function (respuesta){

                console.info("Filas restantes: ", respuesta.data);


            },function(error){

                console.info("Error: ", error);

        });*/
        
        FactoryProducto.Borrar(id).then(function(respuesta){
       
        console.info("Filas restantes: ", respuesta);

      },function(error){

        console.info("Error: ", error);

      });
    }

    $scope.desplegarMod = function (producto){

        $scope.modificar = producto;
        $scope.modo = true;

        $scope.modificar.nombre = producto.nombre;
        
    }

    $scope.actualizar = function(){

        //$objetoUsuario = JSON.stringify($scope.modificar);
        $scope.modificar.foto = $scope.uploader.queue[0].file.name;
        /*
        $http.put("http://localhost:8080/Pagano.FINAL/ws1/productoM",$scope.modificar)
            .then(function (respuesta){

                console.info("Modificado: ", respuesta.data);
                $scope.modo = false;


            },function(error){

                console.info("Error: ", error);

        });*/
       FactoryProducto.Editar($scope.modificar).then(function(respuesta){
        console.info("Modificado: ", respuesta);
        $scope.modo = false;
      

        },function(error){

            console.info("Error: ", error);

        });

    }            

})
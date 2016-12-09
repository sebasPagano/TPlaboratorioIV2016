angular
  .module('proyecto')
  .controller('PedidosGrillaCtrl',function($scope,$state,$stateParams,$http,FileUploader,$auth){
$scope.modoEncuesta = false;

$scope.usuario = $auth.getPayload().usuarioLogueado;
  	 $http.get("http://localhost:8080/Pagano.FINAL/ws1/pedidos")
    .then(function (respuesta){

        $scope.listado = respuesta.data;
        console.info("Listado: ", $scope.listado);


    },function(error){

        console.info("Error: ", error);

    });
    console.log($stateParams);
    $scope.RealizarEncuesta = function(descripcion)
    {
      $scope.modoEncuesta = true;
      console.log(descripcion);
      $scope.descripcionProd = descripcion;
     // $state.go('menu.encuesta');

    }

    $scope.Estado = function(pedido)
    {
      pedido.estado = "cerrado";
      $http.put("http://localhost:8080/Pagano.FINAL/ws1/pedidoM",pedido)
        .then(function (respuesta){

            console.info("Modificado: ", respuesta.data);
            $scope.modo = false;


        },function(error){

            console.info("Error: ", error);

    });

    } 
$scope.alta = {};
        $scope.guardarEncuesta = function(){

          $scope.alta.descripcion = $scope.descripcionProd;
        $http.post("http://localhost:8080/Pagano.FINAL/ws1/encuesta",$scope.alta)
            .then(function (respuesta){

            console.info("Exito", respuesta);
        


        },function(error){

            console.info("Error: ", error);

        });


       }

     $scope.desplegarMod = function (pedido){

        $scope.modificar = pedido;
        $scope.modo = true;

   $scope.modificar.descripcion = pedido.descripcion;
        $scope.modificar.cantidad = pedido.cantidad;
        $scope.modificar.id = pedido.id;
        $scope.modificar.estado = pedido.estado;
        $scope.modificar.fecha = pedido.fecha;

  	 $http.get("http://localhost:8080/Pagano.FINAL/ws1/productos")
    .then(function (respuesta){

        $scope.listadoProductos = respuesta.data;
        console.info("Listado: ", $scope.listadoProductos);


    },function(error){

        console.info("Error: ", error);

    });

     
        
    }

    $scope.actualizar = function(){

    	for(var i=0;i<$scope.listadoProductos.length;i++)
   		{
   			if($scope.listadoProductos[i].nombre == $scope.modificar.descripcion)
   			{
   				$scope.modificar.id_producto = $scope.listadoProductos[i].id_producto;
   				$scope.modificar.precio = $scope.listadoProductos[i].precio * $scope.modificar.cantidad;
   				console.log($scope.modificar.precio);
   				console.log($scope.modificar.id_producto);
   			}
    	
    	}

        
        $http.put("http://localhost:8080/Pagano.FINAL/ws1/pedidoM",$scope.modificar)
            .then(function (respuesta){

                console.info("Modificado: ", respuesta.data);
                $scope.modo = false;


            },function(error){

                console.info("Error: ", error);

        });

    }         


    

})
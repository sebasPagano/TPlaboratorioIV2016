angular
  .module('proyecto')
  .controller('PedidosGrillaCtrl',function($scope,$http,FileUploader,$auth){

  	 $http.get("http://localhost:8080/Pagano.FINAL/ws1/pedidos")
    .then(function (respuesta){

        $scope.listado = respuesta.data;
        console.info("Listado: ", $scope.listado);


    },function(error){

        console.info("Error: ", error);

    });

     $scope.desplegarMod = function (pedido){

        $scope.modificar = pedido;
        $scope.modo = true;

   $scope.modificar.descripcion = pedido.descripcion;
        $scope.modificar.cantidad = pedido.cantidad;
        $scope.modificar.id = pedido.id;
     
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
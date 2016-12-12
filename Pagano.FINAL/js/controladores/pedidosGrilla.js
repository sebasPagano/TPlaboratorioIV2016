angular
  .module('proyecto')
  .controller('PedidosGrillaCtrl',function($scope,$state,$http,FileUploader,$auth,FactoryPedido,FactoryProducto,FactoryEncuesta,FactorySucursal){
$scope.modoEncuesta = false;

$scope.usuario = $auth.getPayload().usuarioLogueado;
var f = new Date();
  $scope.fecha1 =new Date(f.getFullYear(), f.getMonth(), f.getDate());
  $scope.fecha2 =new Date(f.getFullYear(), f.getMonth(), f.getDate());
  	 /*$http.get("http://localhost:8080/Pagano.FINAL/ws1/pedidos")
    .then(function (respuesta){

        $scope.listado = respuesta.data;
        console.info("Listado: ", $scope.listado);


    },function(error){

        console.info("Error: ", error);

    });*/
        FactorySucursal.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listadoSucursales = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });
    
      FactoryPedido.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listado = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });
      

    $scope.RealizarEncuesta = function(descripcion,pedido)
    {
      $scope.modoEncuesta = true;
      console.log(descripcion);
      $scope.descripcionProd = descripcion;
      $scope.pedidoEncuesta = pedido;
      console.log($scope.pedidoEncuesta);


    }

    $scope.Estado = function(pedido)
    {
      pedido.estado = "cerrado";
      /*$http.put("http://localhost:8080/Pagano.FINAL/ws1/pedidoM",pedido)
        .then(function (respuesta){

            console.info("Modificado: ", respuesta.data);
            $scope.modo = false;


        },function(error){

            console.info("Error: ", error);

    });*/
        FactoryPedido.Editar(pedido).then(function(respuesta){
        console.info("Modificado: ", respuesta);
        $scope.modo = false;
      

        },function(error){

            console.info("Error: ", error);

        });

    } 

$scope.alta = {};

        $scope.guardarEncuesta = function(pedidoEncuesta){

          $scope.alta.descripcion = $scope.descripcionProd;
       /* $http.post("http://localhost:8080/Pagano.FINAL/ws1/encuesta",$scope.alta)
            .then(function (respuesta){

            console.info("Exito", respuesta);
        


        },function(error){

            console.info("Error: ", error);

        });*/

        
        pedidoEncuesta.realizadaEncuesta = "si";
        FactoryPedido.Editar(pedidoEncuesta).then(function(respuesta){
        console.info("Modificado: ", respuesta);
        $scope.modoEncuesta = false;
      

        },function(error){

            console.info("Error: ", error);

        });
        

        FactoryEncuesta.Guardar($scope.alta).then(function(respuesta){
        console.log("Exito",respuesta);
        $scope.modoEncuesta = false;

        },function(error){

            console.info("Error: ", error);

        });
      $scope.modoEncuesta = false;

       }

     $scope.desplegarMod = function (pedido){

        $scope.modificar = pedido;
        $scope.modo = true;

   $scope.modificar.descripcion = pedido.descripcion;
        $scope.modificar.cantidad = pedido.cantidad;
        $scope.modificar.id = pedido.id;
        $scope.modificar.estado = pedido.estado;
        $scope.modificar.fecha = new Date(pedido.fecha);
        $scope.modificar.id_Local = pedido.id_Local;
        $scope.modificar.realizadaEncuesta = pedido.realizadaEncuesta;

  	/* $http.get("http://localhost:8080/Pagano.FINAL/ws1/productos")
    .then(function (respuesta){

        $scope.listadoProductos = respuesta.data;
        console.info("Listado: ", $scope.listadoProductos);


    },function(error){

        console.info("Error: ", error);

    });*/
        FactoryProducto.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listadoProductos = respuesta.data;

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

        /*
        $http.put("http://localhost:8080/Pagano.FINAL/ws1/pedidoM",$scope.modificar)
            .then(function (respuesta){

                console.info("Modificado: ", respuesta.data);
                $scope.modo = false;


            },function(error){

                console.info("Error: ", error);

        });*/
        FactoryPedido.Editar($scope.modificar).then(function(respuesta){
        console.info("Modificado: ", respuesta);
        $scope.modo = false;
      

        },function(error){

            console.info("Error: ", error);

        });

    }         


    

})
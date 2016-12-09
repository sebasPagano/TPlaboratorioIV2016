angular
  .module('proyecto')
  .controller('PedidosAltaCtrl',function($scope,$http,FileUploader,$auth,FactoryProducto,FactoryPedido){

  $scope.usuario = $auth.getPayload().usuarioLogueado;
    var f = new Date();
      var fecha =f.getFullYear() + "-"+(f.getMonth() +1)+"-"+f.getDate();
      console.log(fecha);
  console.log($scope.usuario.tipo);
$scope.listado=[];
  $scope.alta ={};
/*
  $http.get("http://localhost:8080/Pagano.FINAL/ws1/productos")
    .then(function (respuesta){

        $scope.listado = respuesta.data;
        console.info("Listado: ", $scope.listado);
         console.info($scope.listado[0].precio);


    },function(error){

        console.info("Error: ", error);

    });*/
  //listado de productos
        FactoryProducto.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listado = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });


     $scope.guardar = function(){
     	
      if($scope.usuario.tipo =="Cliente")
      {
     	$scope.alta.id =$scope.usuario.id;
      }

     	for(var i=0;i<$scope.listado.length;i++)
   		{
   			if($scope.listado[i].nombre == $scope.alta.descripcion)
   			{
   				$scope.alta.id_producto = $scope.listado[i].id_producto;
   				$scope.alta.precio = $scope.listado[i].precio * $scope.alta.cantidad;
   				console.log($scope.alta.precio);
   				console.log($scope.alta.id_producto);
   			}
    	
    	}

      $scope.alta.estado = "pendiente";


       FactoryPedido.Guardar($scope.alta).then(function(respuesta){
        console.log("Exito",respuesta);
      

        },function(error){

            console.info("Error: ", error);

        });

      /*  $http.post("http://localhost:8080/Pagano.FINAL/ws1/pedido",$scope.alta)
            .then(function (respuesta){

            console.info("Exito", respuesta);
        


        },function(error){

            console.info("Error: ", error);

        });*/
    


    }

    

})
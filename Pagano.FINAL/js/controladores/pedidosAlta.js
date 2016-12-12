angular
  .module('proyecto')
  .controller('PedidosAltaCtrl',function($scope,$http,FileUploader,$auth,FactoryProducto,FactoryPedido,FactorySucursal){
/*  function fechahoy()
  {
     var f = new Date();
      $scope.fecha =f.getFullYear() + "-"+(f.getMonth() +1)+"-"+f.getDate();
      return fecha;
  }*/
  $scope.usuario = $auth.getPayload().usuarioLogueado;
    var f = new Date();
      var fecha =f.getFullYear() + "-"+(f.getMonth() +1)+"-"+f.getDate();

    $scope.fechahoy =f.getFullYear() + "-"+(f.getMonth() +1)+"-"+f.getDate();
      console.log(fecha);
  console.log($scope.usuario.tipo);
$scope.listado=[];
  $scope.alta ={}; 
  $scope.alta.fecha =new Date(f.getFullYear(), f.getMonth(), f.getDate());

  $scope.fecha1 =new Date(f.getFullYear(), f.getMonth(), f.getDate());
  $scope.fecha2 =new Date(f.getFullYear(), f.getMonth(), f.getDate()+2);
  $scope.fecha3 =new Date(f.getFullYear(), f.getMonth(), f.getDate()+3);
  $scope.fecha4 =new Date(f.getFullYear(), f.getMonth(), f.getDate()+4);
  $scope.fecha5 =new Date(f.getFullYear(), f.getMonth(), f.getDate()+5);

  $scope.fechaALTA = function()
  {
    console.log($scope.alta.fecha);
    console.log($scope.fecha1)
  }/*
  if($scope.alta.fecha.getTime() == $scope.fecha1.getTime())
  {
    alert("hola");
  }*/
 
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

          FactorySucursal.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listadoSucursales = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });
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
      $scope.alta.realizadaEncuesta = "no";


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
angular
  .module('proyecto')
  .controller('OfertasAltaCtrl',function($scope,$state,$http,FileUploader,$auth,FactoryOferta){

  	$scope.alta = {};

    var f = new Date();
    var fecha =f.getFullYear() + "-"+(f.getMonth() +1)+"-"+f.getDate();
    $scope.alta.fecha =new Date(f.getFullYear(), f.getMonth(), f.getDate());
    $scope.fechaHoy= new Date(f.getFullYear(), f.getMonth(), f.getDate());
  	/*$scope.Buscar = function(id)
  	{
  	 $http.get("http://localhost:8080/Pagano.FINAL/ws1/productos/"+id)
    .then(function (respuesta){

        $scope.producto = respuesta.data;
        console.info("Producto: ", $scope.producto);
        console.info("Producto: ", $scope.producto.nombre);
        $scope.alta.nombre = $scope.producto.nombre;



    },function(error){

        console.info("Error: ", error);

    });
	}*/

	   $scope.guardar = function(){

       // $scope.nombreF = $scope.item.file.name;
/*
        $http.post("http://localhost:8080/Pagano.FINAL/ws1/oferta",$scope.alta)
            .then(function (respuesta){

            console.info("Exito", respuesta);
        


        },function(error){

            console.info("Error: ", error);

        });*/
          FactoryOferta.Guardar($scope.alta).then(function(rta){
        console.log("Exito",rta);
      

        },function(error){

            console.info("Error: ", error);

        });
          $state.go('menu.ofertasGrilla');


    }
    

})